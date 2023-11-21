export function FooterIcons({icon}) {
    const img = `./src/assets/${icon}.png`;
    return (
        <img className="mx-auto w-fit cursor-pointer" src={img} />
    );
}
export default function Footer() {
    return (
        <aside className="mt-20">
            <ul className="flex flex-row w-screen h-fit m-auto bg-gray-900 gap-x-5">
                <FooterIcons icon='email'/>
                <FooterIcons icon='github'/>
                <FooterIcons icon='linkedin'/>
            </ul>
        </aside>
    );
}