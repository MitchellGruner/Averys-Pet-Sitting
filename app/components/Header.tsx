type Props = {
    title: string;
    color: string;
};

const Header = (props: Props) => {
    return (
        <article id="header">
            <h1 className={`block ${props.color} text-center`}><span>{props.title}</span></h1>
        </article>
    )
}

export default Header;