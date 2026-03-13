import { useRef, useEffect } from "react";

const ITEM_HEIGHT = 36;

export default function Wheel({ items, value, onChange }) {
    const ref = useRef();
    const isProgrammaticScroll = useRef(false);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        if (!ref.current) return;
        const index = items.indexOf(value);
        if (index !== -1) {
            isProgrammaticScroll.current = true;
            ref.current.scrollTo({
                top: index * ITEM_HEIGHT,
                behavior: 'auto'
            });

            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => {
                isProgrammaticScroll.current = false;
            }, 100);
        }
    }, [value, items]);

    const handleScroll = () => {
        if (isProgrammaticScroll.current || !ref.current) return;

        const index = Math.round(ref.current.scrollTop / ITEM_HEIGHT);
        const newValue = items[index];

        if (newValue !== undefined && newValue !== value) {
            onChange(newValue);
        }
    };

    return (
        <div className="wheel-wrapper">
            <div
                className="wheel"
                ref={ref}
                onScroll={handleScroll}
                style={{ scrollSnapType: 'y mandatory' }}
            >
                <div style={{ height: ITEM_HEIGHT * 2 }} />
                {items.map((item, i) => (
                    <div
                        className="wheel-item"
                        key={i}
                        style={{ scrollSnapAlign: 'center' }}
                    >
                        {item}
                    </div>
                ))}
                <div style={{ height: ITEM_HEIGHT * 2 }} />
            </div>
            <div className="wheel-highlight" />
        </div>
    );
}
