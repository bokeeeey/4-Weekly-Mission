import { RefObject, useEffect, useState } from "react";

interface useIntersectionObserver {
  targetRef: RefObject<HTMLElement>;
  threshold?: number;
}

export default function useIntersectionObserver({
  targetRef,
  threshold = 0,
}: useIntersectionObserver) {
  // 주시 상태
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    // observer 생성
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry 객체가 threshold 문턱 % 만큼 보이면 isIntersecting true
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetRef, threshold]);

  return isIntersecting;
}
