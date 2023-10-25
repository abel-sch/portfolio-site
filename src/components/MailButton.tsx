export default function MailButton({ email }: { email: string}) {
    return (
        <div className={`
            fixed rounded-full bg-grey
            font-bold shadow-lg
            text-[3rem] text-black leading-none
            w-12 h-12 z-50 bottom-4 right-4
            flex justify-center items-center
            scale transition hover:scale-110`
        }>
            <a className="-mt-[19%]" href={`mailto:${email}`}>@</a>
        </div>
    )
}