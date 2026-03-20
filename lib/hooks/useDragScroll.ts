import { useRef, useEffect, useCallback } from "react";

export function useDragScroll({ wheelScroll = true }: { wheelScroll?: boolean } = {}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const isBusyRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleWheel = useCallback((e: WheelEvent) => {
    if (!isHoveringRef.current) return;
    const el = scrollRef.current;
    if (!el) return;

    const atStart = el.scrollLeft <= 0;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;

    if ((e.deltaY < 0 && atStart) || (e.deltaY > 0 && atEnd)) return;

    e.preventDefault();
    if (isBusyRef.current) return;
    isBusyRef.current = true;
    el.scrollBy({ left: e.deltaY * 5, behavior: "smooth" });
    setTimeout(() => { isBusyRef.current = false; }, 80);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onMouseEnter = () => { isHoveringRef.current = true; };
    const onMouseLeave = () => {
      isHoveringRef.current = false;
      isDraggingRef.current = false;
    };
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
      el.style.userSelect = "none";
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
      el.style.userSelect = "";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    if (wheelScroll) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      el.removeEventListener("mouseenter", onMouseEnter);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);

      if (wheelScroll) {
        window.removeEventListener("wheel", handleWheel);
      }
    };
  }, [handleWheel, wheelScroll]);

  return scrollRef;
}