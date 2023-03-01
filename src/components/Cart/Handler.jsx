import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import LanguageContext from '../../context/LanguageContext';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Handler = ({ add, remove, product, conf, removeConfig }) => {

  const { text } = useContext(LanguageContext);

  const [style, setStyle] = useState({ backgroundColor: conf.color.color });

  return (
    <div className='all-handlers__row'>
      <div className={`handler`}>
        <div className="handler__data">
          <div className="handler__data--prop">
            <p className='size'>{text.view.size}</p>
            <p className='sizeName'>{conf.sizes.size}</p>
          </div>
          <div className="handler__data--prop">
            <p className='color'>{text.view.color}</p>
            <div className='color-container' style={style}></div>
          </div>
        </div>
        <div className="handler__form">
          <div className={`handler__form--cart`}>
            <FontAwesomeIcon
              className={`minus`}
              icon={faMinus}
              onClick={remove}
            />
            <p className={`number`}>{conf.total}</p>
            <FontAwesomeIcon
              className={`plus`}
              icon={faPlus}
              onClick={add}
            />
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faTrash}
        className={`handler__remove`}
        onClick={removeConfig}
      />
    </div>

  )
}

Handler.propTypes = {
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  conf: PropTypes.object.isRequired,
  removeConfig: PropTypes.func.isRequired,
}

export default Handler