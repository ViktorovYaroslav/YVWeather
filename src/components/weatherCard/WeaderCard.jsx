// images imports
import locationIcon from '../../assets/images/location.svg';
import sunIcon from '../../assets/images/sun.svg';

// style imports
import './WeaderCard.scss'


export const WeaderCard = () => {
   return (
      <div className="weather__card">

         <section className="weather__main weather-main">

            <header className="weather-main__header">
               <h2 className="weather-main__title title-h2">Tuesday</h2>
               <p className="weather-main__date">20 Jun 2022</p>
               <p className="weather-main__city">
                  <span>
                     <img src={locationIcon} alt="location icon" />
                  </span>
                  New York
               </p>
            </header>

            <div className="weather-main__info weather-info">
               <span className="weather-info__image">
                  <img src={sunIcon} alt="sun icon" />
               </span>
               <h1 className="weather-info__title title-h1">29 °C</h1>
               <h3 className="weather-info__subtitle title-h3">Sunny</h3>
            </div>

         </section>

         <section className="weather__secound">

            <header className="weather-secound__header">
               <h4 className="weather-secound__title title-h4">
                  PRECIPITATION
                  <span className="weather-secound__title-info">0%</span>
               </h4>
               <h4 className="weather-secound__title title-h4">
                  HUMIDITY
                  <span className="weather-secound__title-info">42%</span>
               </h4>
               <h4 className="weather-secound__title title-h4">
                  WIND
                  <span className="weather-secound__title-info">3 km/h</span>
               </h4>
            </header>

            <div className="weather-secound__4days">
               <div className="weather-secound__day weather-day _active">
                  <span className="weather-day__image">
                     <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0048 0.545573C25.9449 0.545573 26.707 1.30134 26.707 2.23363V4.48438C26.707 5.41666 25.9449 6.17243 25.0048 6.17243C24.0647 6.17243 23.3026 5.41666 23.3026 4.48438V2.23363C23.3026 1.30134 24.0647 0.545573 25.0048 0.545573Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9544 24.7411C11.9544 17.5935 17.7973 11.7993 25.0048 11.7993C32.2123 11.7993 38.0552 17.5935 38.0552 24.7411C38.0552 31.8886 32.2123 37.6828 25.0048 37.6828C17.7973 37.6828 11.9544 31.8886 11.9544 24.7411ZM25.0048 15.1754C19.6775 15.1754 15.3589 19.4581 15.3589 24.7411C15.3589 30.024 19.6775 34.3067 25.0048 34.3067C30.3321 34.3067 34.6507 30.024 34.6507 24.7411C34.6507 19.4581 30.3321 15.1754 25.0048 15.1754Z" fill="white" />
                        <path d="M10.1598 7.63232C9.49501 6.97309 8.41722 6.97309 7.75246 7.63232C7.0877 8.29155 7.0877 9.36037 7.75246 10.0196L9.35733 11.6111C10.0221 12.2703 11.0999 12.2703 11.7646 11.6111C12.4294 10.9519 12.4294 9.88307 11.7646 9.22384L10.1598 7.63232Z" fill="white" />
                        <path d="M49.4033 24.7411C49.4033 25.6734 48.6412 26.4291 47.7011 26.4291H45.4315C44.4914 26.4291 43.7293 25.6734 43.7293 24.7411C43.7293 23.8088 44.4914 23.053 45.4315 23.053H47.7011C48.6412 23.053 49.4033 23.8088 49.4033 24.7411Z" fill="white" />
                        <path d="M42.2571 10.0196C42.9219 9.36035 42.9219 8.29153 42.2571 7.6323C41.5924 6.97307 40.5146 6.97307 39.8498 7.6323L38.2449 9.22382C37.5802 9.88305 37.5802 10.9519 38.2449 11.6111C38.9097 12.2703 39.9875 12.2703 40.6522 11.6111L42.2571 10.0196Z" fill="white" />
                        <path d="M25.0048 43.3097C25.9449 43.3097 26.707 44.0655 26.707 44.9978V47.2485C26.707 48.1808 25.9449 48.9366 25.0048 48.9366C24.0647 48.9366 23.3026 48.1808 23.3026 47.2485V44.9978C23.3026 44.0655 24.0647 43.3097 25.0048 43.3097Z" fill="white" />
                        <path d="M40.6524 37.8711C39.9876 37.2118 38.9099 37.2118 38.2451 37.8711C37.5803 38.5303 37.5803 39.5991 38.2451 40.2583L39.85 41.8498C40.5147 42.5091 41.5925 42.5091 42.2573 41.8498C42.922 41.1906 42.922 40.1218 42.2573 39.4626L40.6524 37.8711Z" fill="white" />
                        <path d="M6.28034 24.7411C6.28034 25.6734 5.51823 26.4291 4.57812 26.4291H2.30849C1.36837 26.4291 0.606262 25.6734 0.606262 24.7411C0.606262 23.8088 1.36837 23.053 2.30849 23.053H4.57812C5.51823 23.053 6.28034 23.8088 6.28034 24.7411Z" fill="white" />
                        <path d="M11.7645 40.2583C12.4292 39.5991 12.4292 38.5303 11.7645 37.871C11.0997 37.2118 10.0219 37.2118 9.35718 37.871L7.75231 39.4626C7.08755 40.1218 7.08755 41.1906 7.75231 41.8498C8.41707 42.5091 9.49486 42.5091 10.1596 41.8498L11.7645 40.2583Z" fill="white" />
                     </svg>
                  </span>
                  <p className="weather-day__day">Tue</p>
                  <p className="weather-day__temperature">30 °C</p>
               </div>
               <div className="weather-secound__day weather-day">
                  <span className="weather-day__image">
                     <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.0333 37.5844C14.2436 37.6545 14.4381 37.7654 14.6056 37.9108C14.7731 38.0562 14.9103 38.2331 15.0093 38.4315C15.1084 38.6299 15.1673 38.8459 15.1829 39.0671C15.1984 39.2883 15.1701 39.5105 15.0998 39.7208L13.4123 44.7833C13.2586 45.1918 12.9527 45.5249 12.5587 45.7126C12.1646 45.9004 11.7132 45.9282 11.2991 45.7902C10.8851 45.6521 10.5406 45.359 10.338 44.9724C10.1354 44.5858 10.0906 44.1358 10.2128 43.7167L11.9003 38.6542C12.0413 38.2295 12.3452 37.8782 12.7452 37.6776C13.1452 37.477 13.6085 37.4434 14.0333 37.5844ZM24.1583 37.5844C24.3686 37.6545 24.5631 37.7654 24.7306 37.9108C24.8981 38.0562 25.0353 38.2331 25.1343 38.4315C25.2334 38.6299 25.2923 38.8459 25.3079 39.0671C25.3234 39.2883 25.2951 39.5105 25.2248 39.7208L21.8498 49.8458C21.6961 50.2543 21.3902 50.5874 20.9962 50.7751C20.6021 50.9629 20.1507 50.9907 19.7366 50.8527C19.3226 50.7146 18.9781 50.4215 18.7755 50.0349C18.5729 49.6483 18.5281 49.1983 18.6503 48.7792L22.0253 38.6542C22.1663 38.2295 22.4702 37.8782 22.8702 37.6776C23.2702 37.477 23.7335 37.4434 24.1583 37.5844ZM34.2833 37.5844C34.4936 37.6545 34.6881 37.7654 34.8556 37.9108C35.0231 38.0562 35.1603 38.2331 35.2593 38.4315C35.3584 38.6299 35.4173 38.8459 35.4329 39.0671C35.4484 39.2883 35.4201 39.5105 35.3498 39.7208L33.6623 44.7833C33.5086 45.1918 33.2027 45.5249 32.8087 45.7126C32.4146 45.9004 31.9632 45.9282 31.5491 45.7902C31.1351 45.6521 30.7906 45.359 30.588 44.9724C30.3854 44.5858 30.3406 44.1358 30.4628 43.7167L32.1503 38.6542C32.2913 38.2295 32.5952 37.8782 32.9952 37.6776C33.3952 37.477 33.8585 37.4434 34.2833 37.5844ZM44.4083 37.5844C44.6186 37.6545 44.8131 37.7654 44.9806 37.9108C45.1481 38.0562 45.2853 38.2331 45.3843 38.4315C45.4834 38.6299 45.5423 38.8459 45.5579 39.0671C45.5734 39.2883 45.5451 39.5105 45.4748 39.7208L42.0998 49.8458C42.0362 50.0637 41.9293 50.2665 41.7855 50.4422C41.6418 50.6178 41.464 50.7627 41.2629 50.868C41.0619 50.9734 40.8416 51.0371 40.6154 51.0553C40.3891 51.0735 40.1615 51.0459 39.9461 50.9742C39.7308 50.9024 39.5321 50.7879 39.3621 50.6375C39.192 50.4872 39.054 50.3041 38.9564 50.0991C38.8587 49.8942 38.8034 49.6717 38.7938 49.4449C38.7841 49.2181 38.8204 48.9917 38.9003 48.7792L42.2753 38.6542C42.4163 38.2295 42.7202 37.8782 43.1202 37.6776C43.5202 37.477 43.9835 37.4434 44.4083 37.5844ZM45.2419 13.9661C44.541 10.433 42.7283 7.21683 40.0687 4.78774C37.4091 2.35865 34.0422 0.844078 30.4602 0.46548C26.8782 0.0868816 23.2691 0.864113 20.1604 2.68353C17.0518 4.50295 14.6068 7.26913 13.1828 10.5776C11.5858 10.3937 9.96817 10.5376 8.4288 11.0005C6.88943 11.4635 5.46075 12.2358 4.23023 13.2701C2.99971 14.3044 1.99325 15.579 1.27246 17.0159C0.551675 18.4527 0.131736 20.0215 0.0383521 21.6263C-0.0550314 23.2311 0.180107 24.838 0.72937 26.3487C1.27863 27.8595 2.13046 29.2422 3.23271 30.4123C4.33495 31.5823 5.66441 32.5151 7.13969 33.1535C8.61497 33.7919 10.205 34.1225 11.8125 34.125H43.875C46.4438 34.1279 48.9176 33.1544 50.7954 31.4016C52.6732 29.6488 53.8146 27.2478 53.9884 24.685C54.1622 22.1221 53.3553 19.589 51.7313 17.5988C50.1073 15.6085 47.7875 14.31 45.2419 13.9661ZM28.6875 3.75C32.0084 3.74931 35.213 4.97266 37.6886 7.18613C40.1642 9.3996 41.7371 12.4479 42.1065 15.7481C42.1524 16.1628 42.3502 16.5457 42.6619 16.8231C42.9735 17.1004 43.3768 17.2525 43.794 17.25H43.875C45.6652 17.25 47.3821 17.9612 48.648 19.227C49.9139 20.4929 50.625 22.2098 50.625 24C50.625 25.7902 49.9139 27.5071 48.648 28.773C47.3821 30.0388 45.6652 30.75 43.875 30.75H11.8125C10.618 30.7494 9.43725 30.4952 8.34834 30.0042C7.25942 29.5132 6.28718 28.7965 5.49591 27.9017C4.70465 27.0068 4.11241 25.9542 3.75836 24.8134C3.40431 23.6725 3.29652 22.4695 3.44213 21.284C3.58775 20.0984 3.98343 18.9572 4.60302 17.936C5.22261 16.9147 6.05198 16.0367 7.03627 15.3599C8.02055 14.6831 9.13732 14.2231 10.3127 14.0101C11.4881 13.7972 12.6952 13.8363 13.8544 14.1248C14.2679 14.2279 14.7052 14.1707 15.0783 13.9648C15.4514 13.7588 15.7328 13.4193 15.8659 13.0144C16.7578 10.3183 18.4768 7.97201 20.7786 6.30886C23.0804 4.6457 25.8478 3.75033 28.6875 3.75Z" fill="white" />
                     </svg>
                  </span>
                  <p className="weather-day__day">Wed</p>
                  <p className="weather-day__temperature">22 °C</p>
               </div>
               <div className="weather-secound__day weather-day">
                  <span className="weather-day__image">
                     <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.625 24C25.192 23.9998 26.7433 24.3114 28.1887 24.9166C29.6341 25.5218 30.9447 26.4085 32.044 27.5252C33.1434 28.6418 34.0096 29.966 34.5922 31.4206C35.1748 32.8753 35.4621 34.4313 35.4375 35.9981C35.4335 36.2575 35.4894 36.5144 35.6009 36.7487C35.7123 36.983 35.8762 37.1884 36.08 37.349C36.2837 37.5097 36.5217 37.6212 36.7756 37.6749C37.0294 37.7285 37.2922 37.723 37.5435 37.6586C38.2918 37.4669 39.0741 37.4486 39.8306 37.6052C40.5871 37.7618 41.2978 38.0891 41.9085 38.5621C42.5193 39.0352 43.0139 39.6415 43.3547 40.3347C43.6955 41.028 43.8735 41.79 43.875 42.5625C43.875 43.9052 43.3416 45.1928 42.3922 46.1422C41.4428 47.0916 40.1552 47.625 38.8125 47.625H10.125C9.22759 47.6199 8.3402 47.436 7.51474 47.0839C6.68928 46.7318 5.94232 46.2186 5.31755 45.5744C4.69278 44.9301 4.20274 44.1678 3.87611 43.3319C3.54947 42.4961 3.39279 41.6035 3.41523 40.7063C3.43767 39.8092 3.63878 38.9255 4.00679 38.107C4.37481 37.2886 4.90235 36.5517 5.55854 35.9395C6.21474 35.3273 6.98642 34.8521 7.82845 34.5417C8.67049 34.2313 9.56596 34.0919 10.4625 34.1317C10.8514 34.1518 11.2352 34.0367 11.5489 33.806C11.8626 33.5753 12.0869 33.2433 12.1837 32.8661C12.8384 30.3292 14.3174 28.0817 16.3884 26.4768C18.4594 24.8719 21.005 24.0007 23.625 24ZM38.7214 34.125C38.3417 30.7032 36.8106 27.512 34.3793 25.0745C31.948 22.637 28.7606 21.0979 25.3398 20.7095C21.919 20.3211 18.4677 21.1065 15.5518 22.937C12.636 24.7674 10.4285 27.5342 9.29137 30.7837C6.68567 30.997 4.26347 32.21 2.5318 34.1687C0.800126 36.1274 -0.10677 38.68 0.000945259 41.2922C0.10866 43.9044 1.22264 46.3736 3.10969 48.1831C4.99674 49.9926 7.51058 51.002 10.125 51H38.8125C41.0503 51 43.1964 50.1111 44.7787 48.5287C46.361 46.9464 47.25 44.8003 47.25 42.5625C47.25 40.3247 46.361 38.1786 44.7787 36.5963C43.1964 35.0139 41.0503 34.125 38.8125 34.125H38.7214V34.125Z" fill="white" />
                        <path d="M35.4375 2.0625C35.4375 1.61495 35.2597 1.18572 34.9432 0.869257C34.6268 0.55279 34.1976 0.375 33.75 0.375C33.3025 0.375 32.8732 0.55279 32.5568 0.869257C32.2403 1.18572 32.0625 1.61495 32.0625 2.0625V5.4375C32.0625 5.88505 32.2403 6.31427 32.5568 6.63074C32.8732 6.94721 33.3025 7.125 33.75 7.125C34.1976 7.125 34.6268 6.94721 34.9432 6.63074C35.2597 6.31427 35.4375 5.88505 35.4375 5.4375V2.0625ZM48.0701 8.691C48.2313 8.53533 48.3599 8.34913 48.4483 8.14325C48.5367 7.93736 48.5833 7.71593 48.5852 7.49186C48.5872 7.2678 48.5445 7.04559 48.4596 6.8382C48.3748 6.63082 48.2495 6.4424 48.091 6.28396C47.9326 6.12551 47.7442 6.00021 47.5368 5.91536C47.3294 5.83051 47.1072 5.78782 46.8831 5.78977C46.6591 5.79171 46.4376 5.83826 46.2318 5.9267C46.0259 6.01514 45.8397 6.1437 45.684 6.30487L43.2945 8.691C42.9776 9.00787 42.7996 9.43763 42.7996 9.88575C42.7996 10.3339 42.9776 10.7636 43.2945 11.0805C43.6114 11.3974 44.0411 11.5754 44.4893 11.5754C44.9374 11.5754 45.3671 11.3974 45.684 11.0805L48.0701 8.691V8.691ZM21.816 6.30487C21.4977 5.99748 21.0715 5.82739 20.629 5.83124C20.1866 5.83508 19.7633 6.01255 19.4504 6.32543C19.1376 6.63831 18.9601 7.06155 18.9562 7.50401C18.9524 7.94647 19.1225 8.37273 19.4299 8.691L21.816 11.0805C21.9729 11.2374 22.1592 11.3619 22.3642 11.4468C22.5692 11.5317 22.7889 11.5754 23.0108 11.5754C23.2326 11.5754 23.4524 11.5317 23.6573 11.4468C23.8623 11.3619 24.0486 11.2374 24.2055 11.0805C24.3624 10.9236 24.4869 10.7373 24.5718 10.5323C24.6567 10.3273 24.7004 10.1076 24.7004 9.88575C24.7004 9.66386 24.6567 9.44415 24.5718 9.23916C24.4869 9.03416 24.3624 8.8479 24.2055 8.691L21.816 6.30487V6.30487ZM27.6683 17.6921C28.0877 16.8229 28.6887 16.0537 29.4307 15.4364C30.1728 14.8192 31.0385 14.3682 31.9696 14.114C32.9007 13.8598 33.8755 13.8082 34.8282 13.9627C35.781 14.1173 36.6895 14.4743 37.4925 15.0098C38.2955 15.5453 38.9743 16.2468 39.4832 17.067C39.992 17.8871 40.3191 18.8069 40.4423 19.7642C40.5655 20.7214 40.4819 21.694 40.1973 22.6163C39.9126 23.5385 39.4335 24.389 38.7923 25.1104C39.4639 26.0588 40.0478 27.0746 40.5338 28.1411C41.6775 27.1077 42.5702 25.8268 43.1438 24.396C43.7174 22.9652 43.9567 21.4223 43.8435 19.885C43.7303 18.3476 43.2676 16.8565 42.4906 15.5251C41.7137 14.1937 40.643 13.0574 39.3602 12.2026C38.0774 11.3479 36.6164 10.7973 35.0885 10.5929C33.5606 10.3885 32.0062 10.5356 30.5439 11.0231C29.0815 11.5106 27.7497 12.3256 26.6501 13.4058C25.5505 14.4861 24.7121 15.8032 24.1988 17.2567C25.3868 17.2939 26.5478 17.4424 27.6683 17.6921ZM42.8018 31.4419C44.8268 32.1675 46.5986 33.4331 47.9385 35.0599C48.1222 34.9111 48.2727 34.7253 48.38 34.5147C48.4874 34.304 48.5493 34.0732 48.5617 33.837C48.5741 33.6009 48.5367 33.3649 48.4521 33.1441C48.3674 32.9234 48.2373 32.7229 48.0701 32.5556L45.684 30.1695C45.4434 29.9275 45.1352 29.7641 44.7998 29.7009C44.4645 29.6377 44.1179 29.6776 43.8057 29.8154C43.4936 29.9532 43.2305 30.1824 43.0513 30.4728C42.872 30.7632 42.785 31.1011 42.8018 31.4419ZM48.9375 18.9375C48.49 18.9375 48.0607 19.1153 47.7443 19.4318C47.4278 19.7482 47.25 20.1774 47.25 20.625C47.25 21.0726 47.4278 21.5018 47.7443 21.8182C48.0607 22.1347 48.49 22.3125 48.9375 22.3125H52.3125C52.7601 22.3125 53.1893 22.1347 53.5057 21.8182C53.8222 21.5018 54 21.0726 54 20.625C54 20.1774 53.8222 19.7482 53.5057 19.4318C53.1893 19.1153 52.7601 18.9375 52.3125 18.9375H48.9375Z" fill="white" />
                     </svg>
                  </span>
                  <p className="weather-day__day">Thu</p>
                  <p className="weather-day__temperature">06 °C</p>
               </div>
               <div className="weather-secound__day weather-day">
                  <span className="weather-day__image">
                     <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.0048 0.545573C25.9449 0.545573 26.707 1.30134 26.707 2.23363V4.48438C26.707 5.41666 25.9449 6.17243 25.0048 6.17243C24.0647 6.17243 23.3026 5.41666 23.3026 4.48438V2.23363C23.3026 1.30134 24.0647 0.545573 25.0048 0.545573Z" fill="white" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.9544 24.7411C11.9544 17.5935 17.7973 11.7993 25.0048 11.7993C32.2123 11.7993 38.0552 17.5935 38.0552 24.7411C38.0552 31.8886 32.2123 37.6828 25.0048 37.6828C17.7973 37.6828 11.9544 31.8886 11.9544 24.7411ZM25.0048 15.1754C19.6775 15.1754 15.3589 19.4581 15.3589 24.7411C15.3589 30.024 19.6775 34.3067 25.0048 34.3067C30.3321 34.3067 34.6507 30.024 34.6507 24.7411C34.6507 19.4581 30.3321 15.1754 25.0048 15.1754Z" fill="white" />
                        <path d="M10.1598 7.63232C9.49501 6.97309 8.41722 6.97309 7.75246 7.63232C7.0877 8.29155 7.0877 9.36037 7.75246 10.0196L9.35733 11.6111C10.0221 12.2703 11.0999 12.2703 11.7646 11.6111C12.4294 10.9519 12.4294 9.88307 11.7646 9.22384L10.1598 7.63232Z" fill="white" />
                        <path d="M49.4033 24.7411C49.4033 25.6734 48.6412 26.4291 47.7011 26.4291H45.4315C44.4914 26.4291 43.7293 25.6734 43.7293 24.7411C43.7293 23.8088 44.4914 23.053 45.4315 23.053H47.7011C48.6412 23.053 49.4033 23.8088 49.4033 24.7411Z" fill="white" />
                        <path d="M42.2571 10.0196C42.9219 9.36035 42.9219 8.29153 42.2571 7.6323C41.5924 6.97307 40.5146 6.97307 39.8498 7.6323L38.2449 9.22382C37.5802 9.88305 37.5802 10.9519 38.2449 11.6111C38.9097 12.2703 39.9875 12.2703 40.6522 11.6111L42.2571 10.0196Z" fill="white" />
                        <path d="M25.0048 43.3097C25.9449 43.3097 26.707 44.0655 26.707 44.9978V47.2485C26.707 48.1808 25.9449 48.9366 25.0048 48.9366C24.0647 48.9366 23.3026 48.1808 23.3026 47.2485V44.9978C23.3026 44.0655 24.0647 43.3097 25.0048 43.3097Z" fill="white" />
                        <path d="M40.6524 37.8711C39.9876 37.2118 38.9099 37.2118 38.2451 37.8711C37.5803 38.5303 37.5803 39.5991 38.2451 40.2583L39.85 41.8498C40.5147 42.5091 41.5925 42.5091 42.2573 41.8498C42.922 41.1906 42.922 40.1218 42.2573 39.4626L40.6524 37.8711Z" fill="white" />
                        <path d="M6.28034 24.7411C6.28034 25.6734 5.51823 26.4291 4.57812 26.4291H2.30849C1.36837 26.4291 0.606262 25.6734 0.606262 24.7411C0.606262 23.8088 1.36837 23.053 2.30849 23.053H4.57812C5.51823 23.053 6.28034 23.8088 6.28034 24.7411Z" fill="white" />
                        <path d="M11.7645 40.2583C12.4292 39.5991 12.4292 38.5303 11.7645 37.871C11.0997 37.2118 10.0219 37.2118 9.35718 37.871L7.75231 39.4626C7.08755 40.1218 7.08755 41.1906 7.75231 41.8498C8.41707 42.5091 9.49486 42.5091 10.1596 41.8498L11.7645 40.2583Z" fill="white" />
                     </svg>
                  </span>
                  <p className="weather-day__day">Fry</p>
                  <p className="weather-day__temperature">26 °C</p>
               </div>
            </div>

            <form className="weather-secound__search">
               <input type="text" placeholder='Find a city...'/>
            </form>

         </section>

      </div>
   );
}