import '../styles/header.scss';

interface HeaderProps {
  selectedGenreTitle: string; 
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <span className="category">
        Categoria:<span>{props.selectedGenreTitle}</span>
      </span>
    </header>
  )
}

export default Header;