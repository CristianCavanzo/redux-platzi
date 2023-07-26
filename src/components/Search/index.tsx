// https://dribbble.com/shots/16833947-Mobile-Pokedex-App-Design-Exploration/attachments/11892526?mode=media
interface Props {
    placeholder: string;
}
const Search = ({ placeholder }: Props) => {
    return (
        <div className="relative">
            <input
                className="py-2 px-4 bg-gray rounded-md w-full outline-principalColor"
                type="search"
                placeholder={placeholder}
            />
        </div>
    );
};

export { Search };
