import React, { useState } from 'react';
import Classnames from 'classnames';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormLabel from '@mui/material/FormLabel';

import ContentSuggestionItem from './ContentSuggestionItem/ContentSuggestionItem';

import type { ContentSuggestionListProps } from './ContentSuggestionList.types';

import styles from './ContentSuggestionList.scss';

const ContentSuggestionList: React.FC<ContentSuggestionListProps> = ({ className }) => {
  const [mockItems, setMockItems] = useState([
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/ceef/55c8/f4a6238812fab276f587117545c18e4d?Expires=1696809600&Signature=nNNoQvgxUy9vDtf~i8O1QcWFTlxNhZrumrQd9ZmrEDglZFTsm2rZWb0Rq5hKBRrx0Oj3HpeXNib5uKZujmqBCaZOyD215LeS86mDu3qJLZJ2o8S66wkq2qfYb3GVF-6cgIqk2B-4m8R1byFM6euSiki2QR8tSRC9JOKh1efztlz0olXtSgKepx3L5SJQXZSKi4cvsK23ZNuw6BMgWZiDMuD~g7odtmkD-eQUQmDo3tdCOPnHtj5ceEXvy04kmFlPZo-9-o63Q1Yj~EMWBSfXZdZeuYooiS1FFRt0POCwtO1kN4VVTBw5JdsMHb4oBCc6sqTdf4tkZ9O6TQxp12iT0g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 1',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/c897/2d72/bfb28f20b17d79e09c00bcb587bf2cd9?Expires=1696809600&Signature=ZRQpSIaZ9lzdB97LdbANPdxpLaE6LsqXkZ1kcxzWPmRWM4p3Ye-HaAytjpJZyLUcHH1B-PuC1JY-XeTn2dR6MS-EOmlcejcTOTt4jMtS32x8CVJA59X~W-pRxfJFvwOPHV8IPNb0GbFu1fAk4Xre0kT1ityt5k~zWCV4xUKH9hKrAHYv7r0Stnf1bv8~Mx92NvN5Z4Wicf3ciRhdqvOv0~SwRQ0pqPbD42vX~gCaBME6x7xDwx-v5fpEQ2obT11VjbPJClrFE-kCsFhkyHLHGkNuA2PspcJdzfiXQibZLWYF-4sUxf4Z5IybPMR5aVB2FN7W3RW5sDvJfef8RZUcmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 2',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/5d4b/f6d0/ffcad19ec97ac121ec0a9208224239f8?Expires=1696809600&Signature=KcJLpxXCsASBi76eQ2nS9rkl9lvGRBErOQ262gseduMh72bqV2BtCj0pC1ts52IgLNqHpDjGLezFtL1U88m9bt4egpapemEQo636HVgI0GokRxtuG2gZrOXKReUiQrkL-j-HxC4gFf7VLrgs6rfpII-g-cg9vjVOUredFhxmQgKNYY~DvpqcG5PbCbIEo0FPGp26bNK8bsRoUleYhPlk536kLG5bhRegnMjpysJfEOLMQeAk9z2QaJRv7BxSx4SAOjlcQf2WrjpHGwiZrRrovZ1K43zbLOkqrDtMJNRtfZgE7EPp9dlL-oBOcm0LkmovN6-qrslJTYlwjANSsPMycw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 3',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/8be3/2760/616e79c1d703f859061368f2a2bb67d4?Expires=1696809600&Signature=V9Uo9BddXm9A8oX~3cT62942u~ijtaq0q5yYP4ty53ASULfKs7AFsc29FtbAF87FYc17NPXI7IifX~h-MNhkuBjGLcinc8FB7ienFymt3zY6sRuIWVRjAETygZmZI5Nmk1R2i1hZPIuvNen1l7JPx94CvAW4I9NGpEA~Z63UcT6Pb8lq58iPjRZmME4bjZp~DzaBQ5h3R-kHHdW7GDq7pJOmC5VQ2VE2JK9MxH6OE3WGqy9wVAi43tc8VN5UUbp3dgBy67ZGtETGcWRK45jSV4EBSpnUrouag9s4LBs3AOnzHBlokYd0T5vFEW3i1aUL79xSk3rRGPif6dhB6UppSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 4',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/413a/d8fe/7b2bc8e1528c852d06982d45b9d303c7?Expires=1696809600&Signature=fB5pSU12SjLFiSnstWVqK8twrEXQwC99qYUFWK~Cyq~jQigY2Hx6ijw-V7NLE7z-MYWNvUMW-~adB3WQ8uB40FlkbcDsjbEDw0Cvai7pbI~lknGQV9WyeHA4qje1AdD8rWKnL2dRTWp6VhpYVPS--na-ovpS5-NecQ49Z~P41Qxvj1e9DZqFteWS-xz4Njxe4h1btj-jBs95ssxLvjEhtM4Z5H8x3Ue2rq6ana59oQCvSVtotSbSucbKEhchB1-GEbMRRqxAV36SxMX3G9r~LABIUizqkDHSgtfwXs-yEOylE~E-frOw6YxBf136838a-pXIMBokEe19K-N1jYAQ~w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 5',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/dbda/fa2d/1557b0b2352d5e2ddfd402b1a732e47d?Expires=1696809600&Signature=b-my95Lj7nSsx3QEf1vZkOrb9dbO4EyAqBso3V4hwdQ3LihiwG1Y6jkaTW5QhSwZYCPdQ3TwQ2sluoX4R9CYIb66edAeNq-5vmCOTrlCgT~hs08vgUAujnhsXeBtG9IqSR9YH1vGRootVPvMhofYaLFh2Cfva8C-JOk7Tt7CU86RC5t5SdsHKdn7qI2f6SIxw4hhnivyD3NHsgcfPv3pJiMjDLVA4myFQMSFnoiyYNqN~rExYRciO9VJ0lGNvXUpIuSNcFK9CgSpCxezeCzygl6VEjCqdXxgXxwKrvTPvs2xFYrhY6uu7rtiHey4yZYIGZvA1foByfD-Pyw6vBMYIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 6',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/be90/0562/2ca507e4eb227fd2f5b9a2fddf484777?Expires=1696809600&Signature=JXkfukTl~dWafFlEouUElbDZY35U~Ut0iZMEefuTdhz9G1cKX31jqWQDYD0d72X1K3O0pgsnn6AKqmmHBMe3qatNO1O0vjcPPlkXHNzJsZ5UQjhdjsgzDutBwM-OqugJa0p606uQW1HKN63eSMc8W88NIFxsCaY7uQD2HcDCXQMnoqP12VCUBbylLaeroKcm1VZxUldWA6siQ1APSlNmDrt8lTys-9H29RMCyNMHvgGQRdlWAhCSmTCIThl5bNEDb9qv710VaXYWVgSDp5xxw1voYm7QbwT0X2oVEno7sL4faHm0h92jlN7mIXvuKvi5WTzKGlTmm1zCWM3CKzyZlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 7',
      rating: 3.5,
      selected: false,
    },
    {
      imgUrl:
        'https://s3-alpha-sig.figma.com/img/6237/e51a/c2610fd9fcae1865a5adc746a9cbcf16?Expires=1696809600&Signature=k41p3LSo5WzB7tqY9-SPc00P7NDRr0JNspg0eJH49lgE4MFHV5FtcX~aipBH0KrCJfcerjRTWEahRWGwDMx~UkatKANjAFTFZ4A0M0xQa5V57uQscQxavfubmkooQXXPoS3nLMZiFngyYJR-q8sfOZymZKZgQtmhEjNyrh~EGeUc7IgsSUHi4PSjokRCN9HqNj~AJyhzrka2NTfee3-RY2b8R46gkG49xDWfUz3wVnPVnahR~GBr33~heV3ph8C9jkR8tzllsBAJkmbJk5ZxIwhAJfU4SJsIR-dCgfhtgFGpaqeaex5h6HDnqb4~hDHx4py6icb6gGrEV~bzjLm6-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      title: '콘텐츠 8',
      rating: 3.5,
      selected: false,
    },
  ]);

  const onClick = (key: string, selected: boolean) => {
    const cloned = [...mockItems];
    const item = cloned.find(({ imgUrl }) => imgUrl === key);
    if (item) {
      item.selected = selected;
    }

    setMockItems(cloned);
  };

  return (
    <Box className={Classnames(styles.contentSuggestionList, className)}>
      <Box className={styles.header}>
        <FormLabel className={styles.label}>추천 콘텐츠 리스트</FormLabel>
        <Chip className={styles.headerButton} label='테마명 생성' />
      </Box>
      <Box className={styles.contentSuggestionListWrapper}>
        {mockItems.map((item: any) => (
          <ContentSuggestionItem
            key={item.imgUrl}
            imgUrl={item.imgUrl}
            title={item.title}
            rating={item.rating}
            selected={item.selected}
            onClick={onClick}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ContentSuggestionList;
