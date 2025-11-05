const SocialLink = ({ link, itemClass }) => {
  return (
    <li>
      <a href={link.href} className={itemClass} target="_blank" rel="noreferrer">
        <i className={link.icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
