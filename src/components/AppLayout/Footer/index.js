import React, {useRef, useState, useEffect} from 'react';
import {CONTACT_SECTION} from '@constants/sections';
import AppText from '@components/AppText';
import ContactLogos from '@components/ContactLogos';
import MailIcon from '@public/icons/mail-icon.svg';
import LocationIcon from '@public/icons/location-icon.svg';
import PhoneIcon from '@public/icons/phone-icon.svg';
import AppButton from '@components/AppButton';
import classes from './styles.module.scss';

const web3FormAccessKey = '1ac1c359-8cfd-4db9-bf1a-ffe9794f1c96';

function Footer() {
  const contactContainerRef = useRef();
  const formRef = useRef();

  const [formStates, setFormStates] = useState({
    isSendingData: false,
    isError: false,
    success: false,
  });

  useEffect(() => {
    const obsCallback = (entries, observer) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        contactContainerRef.current.classList.add(classes.showContactContainer);
      } else {
        contactContainerRef.current.classList.remove(
          classes.showContactContainer,
        );
      }
    };

    const obsOptions = {
      root: null,
      threshold: 0,
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);
    observer.observe(contactContainerRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const onSubmit = async event => {
    event.preventDefault();

    if (formStates.isSendingData) return;

    setFormStates(prevState => ({
      ...prevState,
      isSendingData: true,
      success: false,
      isError: false,
    }));

    const formData = new FormData(event.target);

    formData.append('access_key', web3FormAccessKey);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then(res => res.json());

    if (res.success) {
      setFormStates(prevState => ({
        ...prevState,
        success: true,
      }));
      formRef.current.reset();
      setTimeout(() => {
        setFormStates(prevState => ({
          ...prevState,
          success: false,
        }));
      }, 3000);
    } else {
      setFormStates(prevState => ({
        ...prevState,
        isError: true,
      }));
    }

    setFormStates(prevState => ({...prevState, isSendingData: false}));
  };

  return (
    <footer
      className={classes.footerContainer}
      id={CONTACT_SECTION}
      aria-label={CONTACT_SECTION}>
      <div className={classes.contactContainer} ref={contactContainerRef}>
        <div className={classes.contactInfoContainer}>
          <AppText variant={'h3'} semiBold medium>
            React Out to me!
          </AppText>
          <AppText variant={'p'} small secondaryText>
            Always available for freelancing if the right project comes along,
            Feel free to contact me.
          </AppText>
          <div className={classes.iconContainer}>
            <PhoneIcon />
            <AppText variant="span" small semiBold secondaryText>
              +91 7093936212
            </AppText>
          </div>
          <div className={classes.iconContainer}>
            <LocationIcon />
            <AppText variant="span" small semiBold secondaryText>
              Hyderabad, Telangana - 500020, India
            </AppText>
          </div>
          <div className={classes.iconContainer}>
            <MailIcon />
            <AppText variant="span" small semiBold secondaryText>
              bharathsandepogu01@gmail.com
            </AppText>
          </div>
          <ContactLogos />
        </div>

        <div className={classes.formContainer}>
          <AppText variant={'h3'} semiBold medium>
            Drop Me a Message
          </AppText>

          <form
            ref={formRef}
            className={classes.form}
            aria-label={'form to send message to Bharath Sandepogu'}
            onSubmit={onSubmit}>
            <div className={classes.inputContainer}>
              <label aria-hidden>
                <AppText variant="span" small semiBold>
                  Name
                </AppText>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                aria-label={'enter your name'}
              />
            </div>
            <div className={classes.inputContainer}>
              <label aria-hidden>
                <AppText variant="span" small semiBold>
                  Email
                </AppText>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-label={'enter your email'}
              />
            </div>
            <div className={classes.inputContainer}>
              <label aria-hidden>
                <AppText variant="span" small semiBold>
                  Message
                </AppText>
              </label>
              <textarea
                name="message"
                id="message"
                required
                aria-label={'enter your message'}
                rows={3}
              />
            </div>
            <div className={classes.formBtnContainer}>
              <AppButton
                btnText="Send Message"
                type={'submit'}
                primary
                ariaLabel={'click to send message to Bharath Sandepogu'}
              />
              {formStates.isSendingData && (
                <AppText variant="span" small>
                  Your message is on the way...🚀
                </AppText>
              )}
              {formStates.success && (
                <AppText variant="span" small>
                  Got your message...😃
                </AppText>
              )}
              {formStates.isError && (
                <AppText variant="span" small>
                  Please send again...🥺
                </AppText>
              )}
            </div>
          </form>
        </div>
      </div>
      <AppText variant="p" small customClassName={classes.copyrightText}>
        © Copyright 2023 - Bharath Sandepogu
      </AppText>
    </footer>
  );
}

export default Footer;
