import React, {useEffect, useRef, useState, useMemo} from 'react';
import AppSection from '@components/AppSection';
import AppText from '@components/AppText';
import AppButton from '@components/AppButton';
import {BLOGS_SECTION} from '@constants/sections';
import CalendarIcon from '@public/icons/calendar-icon.svg';
import classes from './styles.module.scss';

const allBlogs = [
  {
    id: 'truthyFalsyValues',
    date: '17 March, 2023',
    header: 'Javascript Truthy and Falsy Values of all Data Types 😯',
    desc: 'When a value is encountered in a boolean context, such as in an if statement or a logical operator, JavaScript automatically coerces the value into a boolean based on whether it is truthy or falsy.....',
    tags: ['Javascript'],
    link: 'https://pepper-vicuna-139.notion.site/Javascript-Truthy-and-Falsy-Values-of-all-Data-Types-d7f2d53b02e54e45a64f6fab82628de8',
  },
  {
    id: 'doubleTripleEquality',
    date: '19 March, 2023',
    header: 'Javascript Double and Triple Equality 🙃',
    desc: `It's not uncommon to wonder what goes on behind the scenes in JavaScript, and the truth is, there's a lot happening, especially when it comes to the double and triple equal operators. These operators might seem straightforward, but in reality, JavaScript goes through several steps to execute the operation correctly....`,
    tags: ['Javascript'],
    link: 'https://pepper-vicuna-139.notion.site/Javascript-Double-and-Triple-Equality-1ff8cd472ba244baa38994310c9a32b5',
  },
];

function BlogsSection() {
  const blogRefs = useRef({});
  const observerRefs = useRef({});
  const [showBlogsLength, setShowBlogsLength] = useState(4);

  const blogs = useMemo(() => {
    return allBlogs.slice(0, showBlogsLength);
  }, [showBlogsLength]);

  useEffect(() => {
    blogs.forEach(blog => {
      const blogRef = blogRefs.current[blog.id];
      const obsOptions = {root: null, threshold: 0};
      const obsCallback = function (entries, object) {
        const [entry] = entries;
        if (entry.isIntersecting) {
          blogRef.classList.add(classes.showBlog);
        } else {
          blogRef.classList.remove(classes.showBlog);
        }
      };
      const observer = new IntersectionObserver(obsCallback, obsOptions);
      observer.observe(blogRef);
      observerRefs.current[blog.id] = observer;
    });
    return () => {
      blogs.forEach(blog => {
        observerRefs.current[blog.id].disconnect();
      });
    };
  }, [blogs]);

  const handleOnClickLoadMoreBtn = () => {
    if (showMore) {
      setShowBlogsLength(prevState => {
        prevState + 3;
      });
    } else {
      setShowBlogsLength(3);
    }
  };

  const showMore = blogs.length < allBlogs.length;

  return (
    <AppSection headerTxt={BLOGS_SECTION}>
      <div className={classes.blogsMainContainer}>
        <div className={classes.sectionIntroTextContainer}>
          <AppText variant="p" secondaryText>
            I have recently begun my journey of writing blogs, and I am thrilled
            to continue learning, sharing my knowledge, and explore...🤓
          </AppText>
          <AppText variant="p" secondaryText>
            More Blogs are on the way to come...🚀
          </AppText>
        </div>
        <div className={classes.blogsContainer}>
          {blogs.map(blog => {
            return (
              <a
                href={blog.link}
                target={'_blank'}
                className={classes.blog}
                key={blog.id}
                ref={el => (blogRefs.current[blog.id] = el)}
                aria-label={`click to open ${blog.header} written by Bharath Sandepogu`}>
                <div className={classes.tags}>
                  {blog.tags.map(tag => {
                    return (
                      <AppText variant="p" extraSmall key={tag}>
                        {tag}
                      </AppText>
                    );
                  })}
                </div>
                <AppText variant="h3" semiBold>
                  {blog.header}
                </AppText>
                <AppText variant="p" small secondaryText>
                  {blog.desc}
                </AppText>
                <div className={classes.dateContainer}>
                  <CalendarIcon />
                  <AppText variant="span" extraSmall secondaryText>
                    {blog.date}
                  </AppText>
                </div>
              </a>
            );
          })}
        </div>
        {/* <div className={classes.loadMoreBtnWrapper}>
          <AppButton
            secondary
            onClick={handleOnClickLoadMoreBtn}
            ariaLabel={`click to show ${showMore ? 'more' : 'less'} blogs`}>
            <span>{showMore ? 'Show More' : 'Show Less'}</span>
          </AppButton>
        </div> */}
      </div>
    </AppSection>
  );
}

export default BlogsSection;
