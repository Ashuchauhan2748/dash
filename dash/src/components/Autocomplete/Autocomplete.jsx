import { useState, useRef, useEffect } from "react";
import styles from "./Autocomplete.module.css";

function Autocomplete({ id, value, onChange, suggestions, inputClassName, placeholder }) {
    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const wrapperRef = useRef(null);

    const query = value.toLowerCase();
    const filtered = query.length > 0
        ? suggestions.filter((s) => s.toLowerCase().includes(query))
        : suggestions;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        setActiveIndex(-1);
    }, [value]);

    const handleKeyDown = (e) => {
        if (!open) return;
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
        } else if (e.key === "Enter" && activeIndex >= 0) {
            e.preventDefault();
            onChange(filtered[activeIndex]);
            setOpen(false);
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };

    const highlightMatch = (text) => {
        if (!query) return text;
        const idx = text.toLowerCase().indexOf(query);
        if (idx === -1) return text;
        return (
            <>
                {text.slice(0, idx)}
                <span className={styles.highlight}>{text.slice(idx, idx + query.length)}</span>
                {text.slice(idx + query.length)}
            </>
        );
    };

    return (
        <div className={styles.wrapper} ref={wrapperRef}>
            <input
                id={id}
                className={inputClassName}
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                autoComplete="off"
                role="combobox"
                aria-expanded={open}
                aria-autocomplete="list"
            />
            {open && filtered.length > 0 && (
                <ul className={styles.dropdown} role="listbox">
                    {filtered.map((item, index) => (
                        <li
                            key={item}
                            className={`${styles.option} ${index === activeIndex ? styles.optionActive : ""}`}
                            role="option"
                            aria-selected={index === activeIndex}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                onChange(item);
                                setOpen(false);
                            }}
                            onMouseEnter={() => setActiveIndex(index)}
                        >
                            {highlightMatch(item)}
                        </li>
                    ))}
                </ul>
            )}
            {open && query.length > 0 && filtered.length === 0 && (
                <div className={styles.dropdown}>
                    <div className={styles.noResults}>No matches found</div>
                </div>
            )}
        </div>
    );
}

export default Autocomplete;
