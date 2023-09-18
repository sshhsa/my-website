import scss from './ListItems.module.scss';
import { GoMail } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import items from '../../../data/contactItem.json';

const ListItems = () => {
  return (
    <ul className={scss.boxItems}>
      {items.map(item => {
        return (
          <li key={item.id} className={scss.item}>
            {item.id === '111' && <BsPhone />}
            {item.id === '222' && <GoMail />}
            {item.id === '333' && <FaInstagram />}
            <p className={scss.footerText}>{item.text}</p>
            <p className={scss.footerInfo}>{item.info}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItems;
