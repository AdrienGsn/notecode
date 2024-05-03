"use client";

export type LinkIconProps = {
    className?: string;
};

export const LinkIcon = (props: LinkIconProps) => {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <path
                d="M7.75725 13.4142L5.63593 11.2929C4.07383 9.7308 4.07383 7.19814 5.63593 5.63604V5.63604C7.19803 4.07395 9.73069 4.07395 11.2928 5.63604L13.4141 7.75736"
                stroke="#677489"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14.8282 14.8285L9.17139 9.17163"
                stroke="#677489"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.5858 16.2426L12.7071 18.3639C14.2692 19.926 16.8019 19.926 18.364 18.3639V18.3639C19.9261 16.8019 19.9261 14.2692 18.364 12.7071L16.2426 10.5858"
                stroke="#677489"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
