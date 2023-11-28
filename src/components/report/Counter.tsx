'use client'
import { CounterProps } from '@/src/types';
import React from 'react'

const Counter: React.FC<CounterProps> = ({ value }) => {

    const [count, setCount] = React.useState<number>(0);
    const [counterStatus, setCounterStatus] = React.useState<boolean>(false)
    let counterItem = React.useRef<HTMLDivElement | null>(null);

    const countFunction = React.useRef(() => {
        let startValue = 0;
        let endValue = value;
        let remainder = 0;
        let countSecond = 50;

        let counter = setInterval(() => {
            if (endValue <= 100) {
                startValue += 1;
            } else if (endValue >= 100 && endValue <= 1000) {
                startValue += 10;
                remainder = endValue % 10;
                endValue = endValue - remainder;
            } else if (endValue >= 1000) {
                startValue += 25;
                remainder = endValue % 25;
                endValue = endValue - remainder;
            } else if (endValue >= 5000) {
                startValue += 50;
                remainder = endValue % 50;
                endValue = endValue - remainder;
            }

            if (startValue === endValue) {
                clearInterval(counter);
                setCount(value);
            } else {
                setCount(startValue);
            }
        }, countSecond);
    });


    const handleScroll = () => {
        if (window.innerWidth < 768) {
            if (window.scrollY > (counterItem.current?.offsetTop || 0) + 100) {
                setCounterStatus(true);
            }
        }else{
            if (window.scrollY > (counterItem.current?.offsetTop || 0) - 500) {
                setCounterStatus(true);
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);



    React.useEffect(() => {
        if (counterStatus === true) {
            countFunction.current()
        }
    }, [counterStatus, countFunction])

    return (
        <div ref={counterItem}>
            <div className='count-value'>{count}</div>
        </div>
    )
}

export default React.memo(Counter)
