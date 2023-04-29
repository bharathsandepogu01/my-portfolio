import React from 'react';
import GithubLogo from '@public/icons/github-logo.svg';
import LinkedInLogo from '@public/icons/linkedin-logo.svg';
import MailLogo from '@public/icons/mail-logo.svg';
import TwitterLogo from '@public/icons/twitter-logo.svg';
import classes from './styles.module.scss';

const contactInfoArr = [
  {
    id: 'github',
    icon: GithubLogo,
    url: 'https://github.com/bharathsandepogu01',
  },
  {
    id: 'linkedIn',
    icon: LinkedInLogo,
    url: 'https://www.linkedin.com/in/bharath-sandepogu-01/',
  },
  {
    id: 'twitter',
    icon: TwitterLogo,
    url: 'https://twitter.com/bharaths_01',
  },
  {
    id: 'mail',
    icon: MailLogo,
    url: 'mailto:bharathsandepogu01@gmail.com',
  },
];

function ContactLogos() {
  return (
    <div className={classes.contactLogosContainer}>
      {contactInfoArr.map(item => {
        const {icon: Icon} = item;
        return (
          <a
            href={item.url}
            target="_blank"
            key={item.id}
            aria-label={`click to connect Bharath Sandepogu's ${item.id} account`}>
            <div className={classes.iconContainer}>
              <Icon className={classes.logoIcon} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default ContactLogos;
