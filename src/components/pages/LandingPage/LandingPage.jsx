import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ReactTypingEffect from 'react-typing-effect';
import Quote from './Quote';
import axios from 'axios';
import { mode } from '../../../utils/theme';
import { SIGNUP_ROUTE } from '../../../constants/routesNomenclature';
import qaScreenshot from '../../../images/qaScreenshot.jpg';
import BlogsScreenshot from '../../../images/BlogsScreenshot.jpg';

const initialCount = {
  blogCount: 0,
  userCount: 0,
  qaCount: 0,
};

const LandingPage = () => {
  const [counts, setCounts] = useState({ ...initialCount });

  useEffect(() => {
    (async function () {
      const a = await axios.get('http://localhost:8080/countPosts');
      const b = await axios.get('http://localhost:8080/usersCount');
      const c = await axios.get('http://localhost:8080/countqa');
      setCounts({
        blogCount: a.data.length,
        userCount: b.data.length,
        qaCount: c.data.length,
      });
    })();
  }, []);

  const { userCount, blogCount, qaCount } = counts;

  return (
    <div style={mode}>
      <div className='BigOne'>
        <div
          className='site-blocks-cover overlay'
          data-aos='fade'
          data-stellar-background-ratio='0.5'
        >
          <header id='showcase'>
            <div className='showcase-content'>
              <h1 className='l-heading lead glow p-0'>
                If you are a
                <ReactTypingEffect
                  text={[' Student', ' Teacher', ' Coder', ' Aspirant']}
                  speed={100}
                  eraseDelay={2000}
                  typingDelay={1000}
                />
                &nbsp;
                <br />
                then this is the right place <br /> to
                <ReactTypingEffect
                  text={[' discover.', ' guide.', ' share.', ' achieve.']}
                  speed={100}
                  eraseDelay={1800}
                  typingDelay={1000}
                />
              </h1>
              <hr className='p-0' />
              <p className='font19 p-0'>
                <Quote />
              </p>
            </div>
          </header>
        </div>

        <div className='bg-light' id='user-blog-qa'>
          <div className='user-blog-qa-item'>
            <img
              className='homeIcons'
              style={{ textAlign: 'left' }}
              src='https://img.pngio.com/group-icon-png-crosby-community-group-icon-png-1600_1600.png'
              alt='Users'
            />
            <div className='text'>
              <strong className='heading'>
                <span className='excerpt'>{userCount} </span> {' Users'}
              </strong>
            </div>
          </div>

          <div className='user-blog-qa-item'>
            <img
              className='homeIcons'
              src='https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/001/923/original/article.png'
              alt='Blogs'
            />
            <div className='text'>
              <strong className='heading'>
                <span className='excerpt'>{blogCount} </span> {' Blogs'}
              </strong>
            </div>
          </div>
          <div className='user-blog-qa-item'>
            <img
              className='homeIcons'
              src='https://cdn0.iconfinder.com/data/icons/customer-service-and-feedback-part-2/64/Q_A-session-512.png'
              alt='Q&A'
            />
            <div className='text'>
              <strong className='heading'>
                <span className='excerpt'>{qaCount} </span>
                {' Q&A'}
              </strong>
            </div>
          </div>
          <div className='user-blog-qa-item'>
            <div className='text'>
              <strong className='heading'>
                &nbsp; with endless stories
                <br /> to tell.&nbsp;
              </strong>
            </div>
          </div>
        </div>
      </div>

      <div
        className='d-flex flex-nowrap font15 bg-red'
        style={{ padding: '55px 20px' }}
      >
        <img
          className='img-fluid rounded previewImg'
          src={BlogsScreenshot}
          alt='BlogsScreenshot'
        />

        <p className='rounded p-4 m-2 my-auto text-center'>
          A platform for sharing your tech expertise while building a
          potentially valuable readership.
          <br />
          Got a product review or advances in latest technology to exhibit?
          <br />
          Grab some eyeballs with your writing on any thing related to tech.
        </p>
      </div>

      <div
        className='d-flex flex-nowrap bg-blue font15 text-white'
        style={{ padding: '55px 20px' }}
      >
        <span className='p-3 rounded text-center m-2 my-auto'>
          A great resource to find questions, that people in your industry are
          asking.
          <br />A question and answer site where queries are asked, answered,
          edited and organised by DeVloggers.
        </span>

        <img
          className='img-fluid rounded previewImg'
          src={qaScreenshot}
          alt='QAsScreenshot'
        />
      </div>

      <div
        className='d-flex flex-nowrap bg-gray font15 text-white'
        style={{ padding: '30px 20px' }}
      >
        <p className='p-3 rounded text-center m-2 my-auto w-75'>
          Tell a story. Make it true. Make it compelling. Make it relevant.
          <br />
          <br />
          The key to DeVlogging is to become a DeVlogger.
        </p>
        <div className='m-auto'>
          <NavLink
            to={SIGNUP_ROUTE}
            className='btn btn-light mx-2'
            style={{ width: '100%' }}
          >
            Sign Up Now >
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
