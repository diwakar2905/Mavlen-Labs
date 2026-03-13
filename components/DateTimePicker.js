import { useState, useEffect } from "react";
import Wheel from "./Wheel";
import "./picker.css";

const MONTH_NAMES = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export default function DateTimePicker({ onDateChange }) {
    const [now] = useState(() => new Date());
    const [date, setDate] = useState(() => {
        return {
            day: now.getDate(),
            month: MONTH_NAMES[now.getMonth()],
            year: now.getFullYear(),
            hour: String(now.getHours()).padStart(2, '0'),
            minute: String(now.getMinutes()).padStart(2, '0'),
        };
    });

    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const currentDay = now.getDate();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Available Years
    const availableYears = Array.from({ length: 10 }, (_, i) => currentYear + i);

    // Available Months
    const availableMonths = MONTH_NAMES.filter((_, i) =>
        date.year > currentYear || i >= currentMonth
    );

    // Available Days
    const monthIndex = MONTH_NAMES.indexOf(date.month);
    const daysInMonth = new Date(date.year, monthIndex + 1, 0).getDate();
    const availableDays = Array.from({ length: daysInMonth }, (_, i) => i + 1).filter(d =>
        date.year > currentYear ||
        monthIndex > currentMonth ||
        d >= currentDay
    );

    // Available Hours
    const availableHours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0')).filter(h =>
        date.year > currentYear ||
        monthIndex > currentMonth ||
        date.day > currentDay ||
        parseInt(h) >= currentHour
    );

    // Available Minutes
    const availableMinutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0')).filter(m =>
        date.year > currentYear ||
        monthIndex > currentMonth ||
        date.day > currentDay ||
        parseInt(date.hour) > currentHour ||
        parseInt(m) >= currentMinute
    );

    // Validation Effect: If current selection is no longer in available items, move to first available
    useEffect(() => {
        let adjusted = false;
        const newDate = { ...date };

        if (!availableMonths.includes(date.month)) {
            newDate.month = availableMonths[0];
            adjusted = true;
        }

        // Month might have changed, recalculate days
        const mIdx = MONTH_NAMES.indexOf(newDate.month);
        const dInM = new Date(newDate.year, mIdx + 1, 0).getDate();
        const aDays = Array.from({ length: dInM }, (_, i) => i + 1).filter(d =>
            newDate.year > currentYear ||
            mIdx > currentMonth ||
            d >= currentDay
        );

        if (!aDays.includes(newDate.day)) {
            newDate.day = aDays[0];
            adjusted = true;
        }

        const aHours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0')).filter(h =>
            newDate.year > currentYear ||
            mIdx > currentMonth ||
            newDate.day > currentDay ||
            parseInt(h) >= currentHour
        );

        if (!aHours.includes(newDate.hour)) {
            newDate.hour = aHours[0];
            adjusted = true;
        }

        const aMinutes = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0')).filter(m =>
            newDate.year > currentYear ||
            mIdx > currentMonth ||
            newDate.day > currentDay ||
            parseInt(newDate.hour) > currentHour ||
            parseInt(m) >= currentMinute
        );

        if (!aMinutes.includes(newDate.minute)) {
            newDate.minute = aMinutes[0];
            adjusted = true;
        }

        if (adjusted) {
            setDate(newDate);
        }
    }, [date.year, date.month, date.day, date.hour]);

    const getFormattedOutputs = (dateObj) => {
        const mIndex = MONTH_NAMES.indexOf(dateObj.month);
        const localDate = new Date(
            dateObj.year,
            mIndex,
            dateObj.day,
            parseInt(dateObj.hour),
            parseInt(dateObj.minute)
        );

        return {
            ...dateObj,
            utc: localDate.toISOString(),
            ist: localDate.toLocaleString('en-IN', {
                timeZone: 'Asia/Kolkata',
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            }),
            userTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };
    };

    const updateDate = (field, value) => {
        const newDate = { ...date, [field]: value };
        setDate(newDate);
    };

    // Output effect
    useEffect(() => {
        if (onDateChange) {
            onDateChange(getFormattedOutputs(date));
        }
    }, [date]);

    return (
        <div className="picker-container">
            <div className="picker-section">
                <Wheel
                    items={availableDays}
                    value={date.day}
                    onChange={(v) => updateDate('day', v)}
                />
                <Wheel
                    items={availableMonths}
                    value={date.month}
                    onChange={(v) => updateDate('month', v)}
                />
                <Wheel
                    items={availableYears}
                    value={date.year}
                    onChange={(v) => updateDate('year', v)}
                />
            </div>
            <div className="picker-divider" />
            <div className="picker-section">
                <Wheel
                    items={availableHours}
                    value={date.hour}
                    onChange={(v) => updateDate('hour', v)}
                />
                <div className="picker-colon">:</div>
                <Wheel
                    items={availableMinutes}
                    value={date.minute}
                    onChange={(v) => updateDate('minute', v)}
                />
            </div>
        </div>
    );
}
