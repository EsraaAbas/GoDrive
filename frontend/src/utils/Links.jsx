import React from 'react';

import { AiFillHome } from 'react-icons/ai';
import { FaCarSide } from 'react-icons/fa';
import { HiDocumentPlus } from 'react-icons/hi2';

const Links = [
  
  { text: 'اللوحه الرئيسيه', path: '.', icon: <AiFillHome /> },
  { text: 'معلومات المركبه', path: 'all', icon: <FaCarSide /> },
  { text: 'انشاء وثيقه ', path: 'one', icon: <HiDocumentPlus /> },
];

export default Links;
