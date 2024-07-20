import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Projects',
    paragraph: 'Below are some of the projects I am working on. Click on the images to go to the corresponding github repository'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

          <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Personal Project
                  </div>
                <h3 className="mt-0 mb-12">
                  DJ App
                  </h3>
                <p className="m-0">
                This is a project to help people DJ at parties. It uses the Spotify API to recommend songs based on the user requests and DJ input.
                To recommend songs, I used an incremental learning logistic regression function and the spotify API. 
                I created the interactive DJ interface with React.js and Flask.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a href="https://github.com/shriyamahakala/djproject">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Governor's Honors Program
                  </div>
                <h3 className="mt-0 mb-12">
                  Creeper Foil
                  </h3>
                <p className="m-0">
                  Creeper Foil is designed to prevent drink spiking. It is a lockable cap that can be placed on top of cups. 
                  When attatched, the drinking channel is opened only when an RFID chip is sensed by the sensor and the whole 
                  cap is unlocked only when the RFID is sensed and a button is pressed. The cap also detects sudden movements 
                  and based on this notifies the user of possible tamperings with a change in LED as well as a notification to
                  a compatible app connected via bluetooth. 
                  <a href="https://github.com/shriyamahakala/CreeperFoil">
                  View code here
                  </a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                {/* <a href="https://github.com/shriyamahakala/CreeperFoil"> */}
                <iframe width="528" height="396" src="https://www.youtube.com/embed/c9_oaQiL7Pw?si=otTyFocPEGbMzSF1">
                </iframe>
                {/* <Image
                  src={require('./../../assets/images/creeperfoil.PNG')}
                  alt="Features split 01"
                  width={528}
                  height={396} /> */}
                  {/* </a> */}
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Emory University
                  </div>
                <h3 className="mt-0 mb-12">
                  Prostate Cancer Grading Deep Learning Model
                  </h3>
                <p className="m-0">
                   Prostate Cancer is the second most common and deadly cancer in America. This model predicts the ISUP grade, which indicated the severity of the prostate cancer, for a prostate biopsy to improve the assessment of prostate cancer. It was trained on a dataset of over 11000 biopsies.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a href="https://github.com/shriyamahakala/prostatecancergrading">
                <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Personal Project
                  </div>
                <h3 className="mt-0 mb-12">
                  Stock Watchlist
                  </h3>
                <p className="m-0">
                   This chrome extension allows users to monitor stocks they are interested in investing. The extension provides the current price, price to book, and price to earnings growth 
                   for each stock the user adds to the watchlist thanks to the yahoo finance API. With this project, I learned how to create chrome extensions, work with APIs, and store data persistently. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a href="https://github.com/shriyamahakala/stockwatchlist">
                <Image
                  src={require('./../../assets/images/features-split-image-02.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Emory University
                  </div>
                <h3 className="mt-0 mb-12">
                  COVID-19 Assistive Treatment Application
                  </h3>
                <p className="m-0">
                  This is an application designed to assist healthcare workers in treating patients diagnosed with COVID-19. When the user inputs symptoms,
                   the application will return drugs to manage these symptoms. When the user inputs results from genomic testing, the application will return
                   information about the genes differentially expressed because of COVID-19 and drugs that can possibley upregulate/downregulate them. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a href="https://github.com/shriyamahakala/SFCovidApplication">
                <Image
                  src={require('./../../assets/images/features-split-image-03.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
                  </a>
                  
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Junior Classical League 
                  </div>
                <h3 className="mt-0 mb-12">
                  Learn Mythology Website 
                  </h3>
                <p className="m-0">
                   This website provides a library of well known Greek myths, a quiz page where users can be tested on their knowledge and a resources page with additional resources to explore greek mythology. Visit it <a href="https://shriyamahakala.github.io/LearnMythWebsite/index.html">here</a>. 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <a href="https://github.com/shriyamahakala/LearnMythWebsite">
                <Image
                  src={require('./../../assets/images/LearnMyth.PNG')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
                  </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;