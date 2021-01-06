import React from 'react';

import styled from 'styled-components';

interface Logo {
    className?: string;
}

const Logo = styled(({ className }: Logo) => (
    <svg
        viewBox="0 0 149 65"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M44.0586 12.3398C44.0078 12.5768 43.8978 12.763 43.7285 12.8984C43.5592 13.0339 43.373 13.1016 43.1699 13.1016C42.8652 13.1016 42.6198 13.0085 42.4336 12.8223C42.2474 12.6191 42.1543 12.3906 42.1543 12.1367C42.1543 11.8828 42.1797 11.6374 42.2305 11.4004C42.2812 11.1465 42.3066 10.901 42.3066 10.6641C42.3066 9.42839 41.9258 8.31966 41.1641 7.33789C40.4023 6.35612 39.319 5.53516 37.9141 4.875C36.526 4.19792 34.8333 3.68164 32.8359 3.32617C30.8385 2.9707 28.6126 2.79297 26.1582 2.79297C24.2793 2.79297 22.3835 2.91992 20.4707 3.17383C18.5749 3.41081 16.7467 3.76628 14.9863 4.24023C13.2428 4.69727 11.6094 5.28125 10.0859 5.99219C8.5625 6.6862 7.23372 7.4987 6.09961 8.42969C4.98242 9.34375 4.10221 10.3678 3.45898 11.502C2.81576 12.6191 2.49414 13.8464 2.49414 15.1836C2.49414 16.2161 2.71419 17.1302 3.1543 17.9258C3.61133 18.7044 4.22917 19.39 5.00781 19.9824C5.78646 20.5579 6.70052 21.0573 7.75 21.4805C8.81641 21.8867 9.96745 22.2337 11.2031 22.5215C12.4388 22.7923 13.7253 23.0208 15.0625 23.207C16.3997 23.3763 17.7454 23.5202 19.0996 23.6387L23.0098 23.9688C24.9564 24.138 26.6999 24.3158 28.2402 24.502C29.7806 24.6882 31.1348 24.9251 32.3027 25.2129C34.2493 25.7038 35.6882 26.4062 36.6191 27.3203C37.5501 28.2344 38.0156 29.4531 38.0156 30.9766C38.0156 32.4492 37.6094 33.7441 36.7969 34.8613C35.9844 35.9785 34.8757 36.918 33.4707 37.6797C32.0658 38.4414 30.4238 39.0169 28.5449 39.4062C26.666 39.7956 24.6517 39.9902 22.502 39.9902C20.166 39.9902 18.1094 39.8294 16.332 39.5078C14.5716 39.2031 13.0905 38.8646 11.8887 38.4922C10.7038 38.1029 9.79818 37.7474 9.17188 37.4258C8.54557 37.1042 8.20703 36.9264 8.15625 36.8926C7.85156 36.7233 7.69922 36.4525 7.69922 36.0801C7.69922 35.7923 7.80078 35.5638 8.00391 35.3945C8.20703 35.2083 8.42708 35.1152 8.66406 35.1152C8.85026 35.1152 9.01953 35.166 9.17188 35.2676C9.1888 35.2676 9.47656 35.4199 10.0352 35.7246C10.6107 36.0124 11.457 36.334 12.5742 36.6895C13.7083 37.0449 15.1048 37.3665 16.7637 37.6543C18.4225 37.9421 20.3522 38.0859 22.5527 38.0859C24.7363 38.0859 26.666 37.9082 28.3418 37.5527C30.0176 37.1973 31.4225 36.7064 32.5566 36.0801C33.7077 35.4368 34.571 34.6921 35.1465 33.8457C35.7389 32.9824 36.0352 32.0514 36.0352 31.0527C36.0352 30.4603 35.9251 29.9525 35.7051 29.5293C35.502 29.0892 35.2142 28.7168 34.8418 28.4121C34.4694 28.0905 34.0208 27.8197 33.4961 27.5996C32.9883 27.3796 32.4297 27.1934 31.8203 27.041C31.1771 26.8717 30.4831 26.7279 29.7383 26.6094C29.0104 26.4909 28.2572 26.3893 27.4785 26.3047C26.6999 26.2201 25.9128 26.1439 25.1172 26.0762C24.3385 26.0085 23.5684 25.9408 22.8066 25.873L18.8965 25.543C15.8158 25.2891 13.1243 24.8997 10.8223 24.375C8.53711 23.8333 6.63281 23.1478 5.10938 22.3184C3.58594 21.472 2.44336 20.4648 1.68164 19.2969C0.919922 18.1289 0.539062 16.7663 0.539062 15.209C0.539062 13.6178 0.894531 12.1621 1.60547 10.8418C2.33333 9.50456 3.3151 8.30273 4.55078 7.23633C5.80339 6.16992 7.25911 5.2474 8.91797 4.46875C10.5938 3.67318 12.3796 3.01302 14.2754 2.48828C16.1712 1.96354 18.1348 1.57422 20.166 1.32031C22.1973 1.04948 24.1947 0.914062 26.1582 0.914062C28.6126 0.914062 30.7454 1.06641 32.5566 1.37109C34.3848 1.65885 35.9421 2.03971 37.2285 2.51367C38.5319 2.9707 39.5983 3.49544 40.4277 4.08789C41.2572 4.68034 41.9258 5.26432 42.4336 5.83984C43.6354 7.24479 44.2363 8.8444 44.2363 10.6387C44.2363 11.2311 44.1771 11.7982 44.0586 12.3398Z"
            fill="#2D2D2D"
        />
        <path
            d="M47.0801 36.8418C47.3509 36.2663 47.6641 35.6484 48.0195 34.9883C48.375 34.3112 48.7559 33.6257 49.1621 32.9316C49.5684 32.2207 50 31.5182 50.457 30.8242C50.9141 30.1302 51.388 29.4785 51.8789 28.8691C52.3698 28.2767 52.8607 27.8535 53.3516 27.5996C53.8594 27.3288 54.3333 27.1934 54.7734 27.1934C55.2135 27.1934 55.5944 27.2865 55.916 27.4727C56.2546 27.6419 56.5254 27.8789 56.7285 28.1836C56.9486 28.4883 57.1094 28.8438 57.2109 29.25C57.3294 29.6562 57.3887 30.0964 57.3887 30.5703C57.3887 30.9596 57.3464 31.4844 57.2617 32.1445C57.194 32.7878 57.1602 33.4648 57.1602 34.1758C57.1602 34.582 57.1771 34.9883 57.2109 35.3945C57.2617 35.7839 57.3379 36.1393 57.4395 36.4609C57.5579 36.7656 57.7272 37.0195 57.9473 37.2227C58.1673 37.4089 58.4551 37.502 58.8105 37.502C59.2168 37.502 59.623 37.3919 60.0293 37.1719C60.4355 36.9349 60.8333 36.6302 61.2227 36.2578C61.612 35.8685 61.9844 35.4453 62.3398 34.9883C62.6953 34.5143 63.0169 34.0488 63.3047 33.5918C63.5924 33.1178 63.8464 32.6693 64.0664 32.2461C64.2865 31.806 64.4642 31.4421 64.5996 31.1543C64.7689 30.765 65.0651 30.5703 65.4883 30.5703C65.776 30.5703 66.0046 30.6719 66.1738 30.875C66.3431 31.0781 66.4277 31.2982 66.4277 31.5352C66.4277 31.6706 66.4023 31.7975 66.3516 31.916C66.2839 32.0514 66.1484 32.3307 65.9453 32.7539C65.7591 33.1771 65.4967 33.668 65.1582 34.2266C64.8366 34.7852 64.4557 35.3691 64.0156 35.9785C63.5755 36.5879 63.0846 37.1549 62.543 37.6797C62.0182 38.1875 61.4427 38.6107 60.8164 38.9492C60.207 39.2708 59.5638 39.4316 58.8867 39.4316C58.1081 39.4316 57.4818 39.2708 57.0078 38.9492C56.5339 38.6107 56.1615 38.1875 55.8906 37.6797C55.6367 37.1719 55.459 36.6048 55.3574 35.9785C55.2728 35.3522 55.2305 34.7428 55.2305 34.1504C55.2305 33.8457 55.2389 33.5241 55.2559 33.1855C55.2897 32.8301 55.3236 32.4831 55.3574 32.1445C55.3913 31.806 55.4167 31.4928 55.4336 31.2051C55.4674 30.9004 55.4844 30.6465 55.4844 30.4434C55.4844 29.9186 55.4082 29.5632 55.2559 29.377C55.1204 29.1908 54.9596 29.0977 54.7734 29.0977C54.5026 29.0977 54.1895 29.2585 53.834 29.5801C53.4954 29.8848 53.1315 30.291 52.7422 30.7988C52.3698 31.3066 51.9889 31.8822 51.5996 32.5254C51.2272 33.1517 50.8633 33.778 50.5078 34.4043C50.1523 35.0306 49.8307 35.6315 49.543 36.207C49.2552 36.7656 49.0182 37.2311 48.832 37.6035C48.4766 38.3145 48.1126 38.7884 47.7402 39.0254C47.3848 39.2793 47.0632 39.4062 46.7754 39.4062C46.2507 39.4062 45.8444 39.2031 45.5566 38.7969C45.2858 38.3737 45.1504 37.8659 45.1504 37.2734V35.6738C45.1504 32.4746 45.1504 29.4277 45.1504 26.5332C45.1673 23.6217 45.2096 20.9219 45.2773 18.4336C45.362 15.9284 45.4889 13.6686 45.6582 11.6543C45.8444 9.62305 46.1152 7.89648 46.4707 6.47461C46.8262 5.03581 47.2747 3.92708 47.8164 3.14844C48.375 2.36979 49.069 1.98047 49.8984 1.98047C50.6094 1.98047 51.2103 2.17513 51.7012 2.56445C52.1921 2.95378 52.5898 3.48698 52.8945 4.16406C53.1992 4.82422 53.4193 5.60286 53.5547 6.5C53.6901 7.38021 53.7578 8.3112 53.7578 9.29297C53.7578 11.2904 53.5716 13.2539 53.1992 15.1836C52.8438 17.0964 52.3613 18.9668 51.752 20.7949C51.1426 22.623 50.4316 24.4089 49.6191 26.1523C48.8066 27.8789 47.9518 29.5632 47.0547 31.2051C47.0547 31.5098 47.0547 31.8737 47.0547 32.2969C47.0547 32.7201 47.0547 33.1432 47.0547 33.5664C47.0547 33.9896 47.0547 34.3874 47.0547 34.7598C47.0547 35.1322 47.0547 35.4284 47.0547 35.6484L47.0801 36.8418ZM47.0801 27.4727C47.791 25.9154 48.4342 24.4004 49.0098 22.9277C49.6022 21.4382 50.1016 19.957 50.5078 18.4844C50.931 17.0117 51.2611 15.5221 51.498 14.0156C51.735 12.4922 51.8535 10.9095 51.8535 9.26758C51.8535 8.99674 51.8366 8.5651 51.8027 7.97266C51.7858 7.38021 51.7096 6.7793 51.5742 6.16992C51.4557 5.56055 51.2611 5.02734 50.9902 4.57031C50.7363 4.11328 50.3724 3.88477 49.8984 3.88477C49.526 3.88477 49.2044 4.13867 48.9336 4.64648C48.6628 5.13737 48.4258 5.81445 48.2227 6.67773C48.0195 7.52409 47.8503 8.51432 47.7148 9.64844C47.5794 10.7826 47.4694 11.9844 47.3848 13.2539C47.3001 14.5234 47.2324 15.8268 47.1816 17.1641C47.1478 18.5013 47.1224 19.8047 47.1055 21.0742C47.0885 22.3268 47.0801 23.5033 47.0801 24.6035C47.0801 25.7038 47.0801 26.6602 47.0801 27.4727Z"
            fill="#2D2D2D"
        />
        <path
            d="M76.3301 36.207C75.9069 36.207 75.5345 36.1732 75.2129 36.1055C74.959 36.6133 74.6543 37.0872 74.2988 37.5273C73.9434 37.9505 73.5286 38.3229 73.0547 38.6445C72.5977 38.9661 72.0814 39.2201 71.5059 39.4062C70.9303 39.5924 70.304 39.6855 69.627 39.6855C68.8314 39.6855 68.1035 39.5417 67.4434 39.2539C66.7832 38.9831 66.2077 38.6022 65.7168 38.1113C65.2259 37.6035 64.8451 37.0026 64.5742 36.3086C64.3034 35.5977 64.168 34.819 64.168 33.9727C64.168 32.8893 64.3626 31.9499 64.752 31.1543C65.1413 30.3418 65.5898 29.6732 66.0977 29.1484C66.6055 28.6068 67.1133 28.209 67.6211 27.9551C68.1289 27.6842 68.5098 27.5488 68.7637 27.5488C69.0514 27.5488 69.263 27.625 69.3984 27.7773C69.5508 27.9297 69.627 28.1328 69.627 28.3867C69.627 28.6745 69.5339 28.8945 69.3477 29.0469C69.1784 29.1823 68.9583 29.3177 68.6875 29.4531C68.4167 29.5885 68.1289 29.7832 67.8242 30.0371C67.5195 30.2741 67.2318 30.5788 66.9609 30.9512C66.707 31.3236 66.4954 31.7637 66.3262 32.2715C66.1569 32.7793 66.0723 33.3464 66.0723 33.9727C66.0723 34.5312 66.1569 35.056 66.3262 35.5469C66.4954 36.0208 66.7409 36.4355 67.0625 36.791C67.3841 37.1296 67.765 37.4004 68.2051 37.6035C68.6452 37.7897 69.1361 37.8828 69.6777 37.8828C70.6426 37.8828 71.4382 37.6628 72.0645 37.2227C72.7077 36.7656 73.1986 36.1901 73.5371 35.4961C72.5384 34.9714 71.7174 34.2266 71.0742 33.2617C70.431 32.2969 70.1094 31.2135 70.1094 30.0117C70.1094 29.0469 70.3379 28.2598 70.7949 27.6504C71.2689 27.041 71.8867 26.7363 72.6484 26.7363C73.1055 26.7363 73.5371 26.8464 73.9434 27.0664C74.3496 27.2865 74.7051 27.6335 75.0098 28.1074C75.3314 28.5814 75.5853 29.1908 75.7715 29.9355C75.9577 30.6803 76.0508 31.569 76.0508 32.6016C76.0508 33.1432 75.9831 33.7103 75.8477 34.3027C75.9492 34.3197 76.0508 34.3281 76.1523 34.3281C76.2539 34.3281 76.3639 34.3281 76.4824 34.3281C77.0579 34.3281 77.5742 34.2604 78.0312 34.125C78.4883 33.9896 78.903 33.7865 79.2754 33.5156C79.6478 33.2448 79.9779 32.8978 80.2656 32.4746C80.5703 32.0514 80.8581 31.5605 81.1289 31.002C81.1797 30.9004 81.2897 30.8073 81.459 30.7227C81.6283 30.6211 81.7975 30.5703 81.9668 30.5703C82.1868 30.5703 82.39 30.6634 82.5762 30.8496C82.7793 31.0189 82.8809 31.2474 82.8809 31.5352C82.8809 31.6706 82.847 31.8229 82.7793 31.9922C82.7116 32.1445 82.6439 32.2884 82.5762 32.4238C82.2884 32.9316 81.9499 33.4225 81.5605 33.8965C81.1882 34.3535 80.7396 34.7598 80.2148 35.1152C79.707 35.4538 79.1315 35.7246 78.4883 35.9277C77.8451 36.1309 77.1257 36.224 76.3301 36.207ZM71.9883 29.8086C71.9883 30.1302 72.0306 30.4688 72.1152 30.8242C72.1999 31.1797 72.3268 31.5352 72.4961 31.8906C72.6823 32.2292 72.9023 32.5592 73.1562 32.8809C73.4271 33.1855 73.7402 33.4479 74.0957 33.668C74.1465 33.3125 74.1719 32.9655 74.1719 32.627C74.1719 32.1699 74.138 31.7044 74.0703 31.2305C74.0026 30.7565 73.901 30.3249 73.7656 29.9355C73.6471 29.5293 73.4948 29.2077 73.3086 28.9707C73.1224 28.7168 72.9023 28.5898 72.6484 28.5898C72.5469 28.5898 72.4115 28.666 72.2422 28.8184C72.0729 28.9707 71.9883 29.3008 71.9883 29.8086Z"
            fill="#2D2D2D"
        />
        <path
            d="M94.1035 31.916C94.1035 33.4733 93.8242 34.8021 93.2656 35.9023C92.707 37.0026 92.0215 37.8405 91.209 38.416H91.3105C92.3092 38.416 93.2148 38.196 94.0273 37.7559C94.8568 37.2988 95.6016 36.7233 96.2617 36.0293C96.9219 35.3184 97.5143 34.5312 98.0391 33.668C98.5638 32.8047 99.0293 31.9668 99.4355 31.1543C99.5202 30.9681 99.6387 30.8242 99.791 30.7227C99.9603 30.6211 100.138 30.5703 100.324 30.5703C100.612 30.5703 100.84 30.6719 101.01 30.875C101.179 31.0781 101.264 31.2982 101.264 31.5352C101.264 31.6706 101.238 31.7975 101.188 31.916C100.747 32.8978 100.223 33.888 99.6133 34.8867C99.0039 35.8685 98.293 36.7572 97.4805 37.5527C96.668 38.3483 95.7539 38.9915 94.7383 39.4824C93.7227 39.9902 92.597 40.2441 91.3613 40.2441C90.4642 40.2441 89.5924 40.1003 88.7461 39.8125C87.8997 39.5417 87.1549 39.11 86.5117 38.5176C86.2747 38.3314 86.0716 38.1367 85.9023 37.9336C85.7331 37.7135 85.5977 37.5104 85.4961 37.3242C85.4622 37.2904 85.4453 37.2565 85.4453 37.2227C85.3438 37.0703 85.293 36.9095 85.293 36.7402C85.293 36.5202 85.3691 36.3171 85.5215 36.1309C85.5384 36.097 85.5553 36.0801 85.5723 36.0801C85.5892 36.0632 85.6061 36.0462 85.623 36.0293C85.7923 35.877 85.9785 35.7923 86.1816 35.7754H86.2578C86.3424 35.7754 86.4017 35.7839 86.4355 35.8008C86.4525 35.8008 86.4609 35.8092 86.4609 35.8262C86.4779 35.8262 86.4948 35.8262 86.5117 35.8262C86.5625 35.8262 86.6217 35.8431 86.6895 35.877C86.7064 35.8939 86.7233 35.9023 86.7402 35.9023C86.8926 36.0039 87.0195 36.1309 87.1211 36.2832C87.2396 36.4863 87.375 36.6725 87.5273 36.8418C87.6628 36.9772 87.8236 37.1042 88.0098 37.2227C88.196 37.3242 88.4076 37.375 88.6445 37.375C89.0677 37.375 89.4909 37.248 89.9141 36.9941C90.3372 36.7402 90.7181 36.3763 91.0566 35.9023C91.3952 35.4284 91.666 34.8529 91.8691 34.1758C92.0892 33.4987 92.1992 32.7454 92.1992 31.916C92.1992 31.3066 92.1315 30.7904 91.9961 30.3672C91.8776 29.9271 91.7168 29.5716 91.5137 29.3008C91.3275 29.0299 91.1243 28.8353 90.9043 28.7168C90.6842 28.5814 90.4727 28.5137 90.2695 28.5137C89.8125 28.5137 89.347 28.7507 88.873 29.2246C88.416 29.6986 87.959 30.2995 87.502 31.0273C87.0449 31.7552 86.5879 32.5592 86.1309 33.4395C85.6908 34.3197 85.2422 35.1745 84.7852 36.0039C84.7513 38.7461 84.7005 41.3613 84.6328 43.8496C84.582 46.3379 84.4805 48.6484 84.3281 50.7812C84.1927 52.9141 83.998 54.8438 83.7441 56.5703C83.4902 58.2969 83.1432 59.7695 82.7031 60.9883C82.263 62.224 81.7214 63.1719 81.0781 63.832C80.4349 64.4922 79.6478 64.8223 78.7168 64.8223C78.429 64.8223 78.099 64.763 77.7266 64.6445C77.3542 64.526 77.0072 64.2806 76.6855 63.9082C76.3639 63.5527 76.0931 63.0365 75.873 62.3594C75.653 61.6823 75.543 60.7767 75.543 59.6426C75.543 58.2038 75.7207 56.5365 76.0762 54.6406C76.4316 52.7448 76.9395 50.7305 77.5996 48.5977C78.2428 46.4818 79.013 44.3066 79.9102 42.0723C80.8073 39.8379 81.7975 37.6628 82.8809 35.5469C82.8809 34.9544 82.8809 34.3704 82.8809 33.7949C82.8978 33.2194 82.9062 32.6608 82.9062 32.1191C82.6862 32.373 82.4238 32.5 82.1191 32.5C81.8314 32.5 81.6029 32.3984 81.4336 32.1953C81.2643 31.9922 81.1797 31.7721 81.1797 31.5352C81.1797 31.4167 81.2051 31.2897 81.2559 31.1543C81.6621 30.2233 81.9753 29.3431 82.1953 28.5137C82.4154 27.6673 82.5762 26.931 82.6777 26.3047C82.7962 25.6615 82.8639 25.1536 82.8809 24.7812C82.8978 24.4089 82.9062 24.2142 82.9062 24.1973C82.9062 23.9434 82.9993 23.7233 83.1855 23.5371C83.3717 23.3509 83.6003 23.2578 83.8711 23.2578C84.125 23.2578 84.3451 23.3509 84.5312 23.5371C84.7174 23.7064 84.8105 23.9264 84.8105 24.1973V31.9922C85.1999 31.332 85.5892 30.6803 85.9785 30.0371C86.3678 29.3939 86.7741 28.8184 87.1973 28.3105C87.6374 27.8027 88.1029 27.3965 88.5938 27.0918C89.1016 26.7702 89.6602 26.6094 90.2695 26.6094C90.8451 26.6094 91.3698 26.7448 91.8438 27.0156C92.3177 27.2865 92.724 27.6589 93.0625 28.1328C93.401 28.6068 93.6549 29.1738 93.8242 29.834C94.0104 30.4772 94.1035 31.1712 94.1035 31.916ZM82.8301 40.0664C82.0007 41.9284 81.2474 43.7988 80.5703 45.6777C79.9102 47.5566 79.3516 49.3678 78.8945 51.1113C78.4206 52.8548 78.0566 54.4883 77.8027 56.0117C77.5488 57.5352 77.4219 58.8724 77.4219 60.0234C77.4219 60.3112 77.4388 60.6243 77.4727 60.9629C77.5065 61.3014 77.5742 61.6146 77.6758 61.9023C77.7773 62.1901 77.9212 62.4271 78.1074 62.6133C78.2936 62.8164 78.5391 62.918 78.8438 62.918C79.4023 62.918 79.8848 62.5625 80.291 61.8516C80.6973 61.1576 81.0358 60.2096 81.3066 59.0078C81.5944 57.8229 81.8314 56.4518 82.0176 54.8945C82.2038 53.3542 82.3477 51.7376 82.4492 50.0449C82.5677 48.3522 82.6523 46.6426 82.7031 44.916C82.7539 43.2064 82.7962 41.5898 82.8301 40.0664Z"
            fill="#2D2D2D"
        />
        <path
            d="M112.486 31.916C112.486 33.4733 112.207 34.8021 111.648 35.9023C111.09 37.0026 110.404 37.8405 109.592 38.416H109.693C110.692 38.416 111.598 38.196 112.41 37.7559C113.24 37.2988 113.984 36.7233 114.645 36.0293C115.305 35.3184 115.897 34.5312 116.422 33.668C116.947 32.8047 117.412 31.9668 117.818 31.1543C117.903 30.9681 118.021 30.8242 118.174 30.7227C118.343 30.6211 118.521 30.5703 118.707 30.5703C118.995 30.5703 119.223 30.6719 119.393 30.875C119.562 31.0781 119.646 31.2982 119.646 31.5352C119.646 31.6706 119.621 31.7975 119.57 31.916C119.13 32.8978 118.605 33.888 117.996 34.8867C117.387 35.8685 116.676 36.7572 115.863 37.5527C115.051 38.3483 114.137 38.9915 113.121 39.4824C112.105 39.9902 110.98 40.2441 109.744 40.2441C108.847 40.2441 107.975 40.1003 107.129 39.8125C106.283 39.5417 105.538 39.11 104.895 38.5176C104.658 38.3314 104.454 38.1367 104.285 37.9336C104.116 37.7135 103.98 37.5104 103.879 37.3242C103.845 37.2904 103.828 37.2565 103.828 37.2227C103.727 37.0703 103.676 36.9095 103.676 36.7402C103.676 36.5202 103.752 36.3171 103.904 36.1309C103.921 36.097 103.938 36.0801 103.955 36.0801C103.972 36.0632 103.989 36.0462 104.006 36.0293C104.175 35.877 104.361 35.7923 104.564 35.7754H104.641C104.725 35.7754 104.785 35.7839 104.818 35.8008C104.835 35.8008 104.844 35.8092 104.844 35.8262C104.861 35.8262 104.878 35.8262 104.895 35.8262C104.945 35.8262 105.005 35.8431 105.072 35.877C105.089 35.8939 105.106 35.9023 105.123 35.9023C105.275 36.0039 105.402 36.1309 105.504 36.2832C105.622 36.4863 105.758 36.6725 105.91 36.8418C106.046 36.9772 106.206 37.1042 106.393 37.2227C106.579 37.3242 106.79 37.375 107.027 37.375C107.451 37.375 107.874 37.248 108.297 36.9941C108.72 36.7402 109.101 36.3763 109.439 35.9023C109.778 35.4284 110.049 34.8529 110.252 34.1758C110.472 33.4987 110.582 32.7454 110.582 31.916C110.582 31.3066 110.514 30.7904 110.379 30.3672C110.26 29.9271 110.1 29.5716 109.896 29.3008C109.71 29.0299 109.507 28.8353 109.287 28.7168C109.067 28.5814 108.855 28.5137 108.652 28.5137C108.195 28.5137 107.73 28.7507 107.256 29.2246C106.799 29.6986 106.342 30.2995 105.885 31.0273C105.428 31.7552 104.971 32.5592 104.514 33.4395C104.074 34.3197 103.625 35.1745 103.168 36.0039C103.134 38.7461 103.083 41.3613 103.016 43.8496C102.965 46.3379 102.863 48.6484 102.711 50.7812C102.576 52.9141 102.381 54.8438 102.127 56.5703C101.873 58.2969 101.526 59.7695 101.086 60.9883C100.646 62.224 100.104 63.1719 99.4609 63.832C98.8177 64.4922 98.0306 64.8223 97.0996 64.8223C96.8118 64.8223 96.4818 64.763 96.1094 64.6445C95.737 64.526 95.39 64.2806 95.0684 63.9082C94.7467 63.5527 94.4759 63.0365 94.2559 62.3594C94.0358 61.6823 93.9258 60.7767 93.9258 59.6426C93.9258 58.2038 94.1035 56.5365 94.459 54.6406C94.8145 52.7448 95.3223 50.7305 95.9824 48.5977C96.6257 46.4818 97.3958 44.3066 98.293 42.0723C99.1901 39.8379 100.18 37.6628 101.264 35.5469C101.264 34.9544 101.264 34.3704 101.264 33.7949C101.281 33.2194 101.289 32.6608 101.289 32.1191C101.069 32.373 100.807 32.5 100.502 32.5C100.214 32.5 99.9857 32.3984 99.8164 32.1953C99.6471 31.9922 99.5625 31.7721 99.5625 31.5352C99.5625 31.4167 99.5879 31.2897 99.6387 31.1543C100.045 30.2233 100.358 29.3431 100.578 28.5137C100.798 27.6673 100.959 26.931 101.061 26.3047C101.179 25.6615 101.247 25.1536 101.264 24.7812C101.281 24.4089 101.289 24.2142 101.289 24.1973C101.289 23.9434 101.382 23.7233 101.568 23.5371C101.755 23.3509 101.983 23.2578 102.254 23.2578C102.508 23.2578 102.728 23.3509 102.914 23.5371C103.1 23.7064 103.193 23.9264 103.193 24.1973V31.9922C103.583 31.332 103.972 30.6803 104.361 30.0371C104.751 29.3939 105.157 28.8184 105.58 28.3105C106.02 27.8027 106.486 27.3965 106.977 27.0918C107.484 26.7702 108.043 26.6094 108.652 26.6094C109.228 26.6094 109.753 26.7448 110.227 27.0156C110.701 27.2865 111.107 27.6589 111.445 28.1328C111.784 28.6068 112.038 29.1738 112.207 29.834C112.393 30.4772 112.486 31.1712 112.486 31.916ZM101.213 40.0664C100.383 41.9284 99.6302 43.7988 98.9531 45.6777C98.293 47.5566 97.7344 49.3678 97.2773 51.1113C96.8034 52.8548 96.4395 54.4883 96.1855 56.0117C95.9316 57.5352 95.8047 58.8724 95.8047 60.0234C95.8047 60.3112 95.8216 60.6243 95.8555 60.9629C95.8893 61.3014 95.957 61.6146 96.0586 61.9023C96.1602 62.1901 96.304 62.4271 96.4902 62.6133C96.6764 62.8164 96.9219 62.918 97.2266 62.918C97.7852 62.918 98.2676 62.5625 98.6738 61.8516C99.0801 61.1576 99.4186 60.2096 99.6895 59.0078C99.9772 57.8229 100.214 56.4518 100.4 54.8945C100.587 53.3542 100.73 51.7376 100.832 50.0449C100.951 48.3522 101.035 46.6426 101.086 44.916C101.137 43.2064 101.179 41.5898 101.213 40.0664Z"
            fill="#2D2D2D"
        />
        <path
            d="M120.891 36.207C121.246 36.6979 121.703 37.0957 122.262 37.4004C122.82 37.6882 123.506 37.832 124.318 37.832C125.148 37.832 125.901 37.6374 126.578 37.248C127.255 36.8418 127.873 36.3171 128.432 35.6738C128.99 35.0306 129.49 34.3112 129.93 33.5156C130.37 32.7201 130.768 31.9245 131.123 31.1289C131.208 30.9427 131.326 30.8073 131.479 30.7227C131.631 30.6211 131.8 30.5703 131.986 30.5703C132.274 30.5703 132.503 30.6719 132.672 30.875C132.858 31.0781 132.951 31.2982 132.951 31.5352C132.951 31.6198 132.943 31.696 132.926 31.7637C132.909 31.8145 132.883 31.8737 132.85 31.9414C131.682 34.5143 130.404 36.4525 129.016 37.7559C127.645 39.0592 126.087 39.7279 124.344 39.7617C123.227 39.7617 122.262 39.5417 121.449 39.1016C120.637 38.6784 119.968 38.1283 119.443 37.4512C118.919 36.7572 118.529 35.9785 118.275 35.1152C118.021 34.252 117.895 33.3887 117.895 32.5254C117.895 31.6621 117.996 30.8665 118.199 30.1387C118.419 29.4108 118.724 28.776 119.113 28.2344C119.52 27.6927 119.993 27.2695 120.535 26.9648C121.094 26.6602 121.703 26.5078 122.363 26.5078C122.753 26.5078 123.133 26.5924 123.506 26.7617C123.895 26.9141 124.242 27.1426 124.547 27.4473C124.852 27.735 125.097 28.0905 125.283 28.5137C125.469 28.9368 125.562 29.4193 125.562 29.9609C125.562 30.6549 125.444 31.3066 125.207 31.916C124.97 32.5254 124.64 33.0924 124.217 33.6172C123.811 34.1419 123.32 34.6243 122.744 35.0645C122.169 35.5046 121.551 35.8854 120.891 36.207ZM120.129 34.5566C120.654 34.3366 121.128 34.0573 121.551 33.7188C121.991 33.3802 122.363 33.0078 122.668 32.6016C122.973 32.1953 123.21 31.7721 123.379 31.332C123.548 30.875 123.633 30.418 123.633 29.9609C123.633 29.4531 123.506 29.0723 123.252 28.8184C122.998 28.5475 122.702 28.4121 122.363 28.4121C121.906 28.4121 121.517 28.5391 121.195 28.793C120.874 29.0469 120.611 29.377 120.408 29.7832C120.205 30.1895 120.053 30.6465 119.951 31.1543C119.867 31.6452 119.824 32.1361 119.824 32.627C119.824 32.9316 119.85 33.2533 119.9 33.5918C119.968 33.9303 120.044 34.252 120.129 34.5566Z"
            fill="#2D2D2D"
        />
        <path
            d="M133.814 28.5645C133.747 29.0215 133.662 29.4531 133.561 29.8594C133.459 30.2487 133.357 30.5957 133.256 30.9004C133.171 31.1882 133.095 31.4251 133.027 31.6113C132.96 31.7975 132.917 31.8991 132.9 31.916C132.731 32.3053 132.435 32.5 132.012 32.5C131.775 32.5 131.555 32.4154 131.352 32.2461C131.148 32.0599 131.047 31.8314 131.047 31.5605C131.047 31.459 131.064 31.3828 131.098 31.332C131.132 31.2812 131.182 31.1797 131.25 31.0273C131.318 30.875 131.402 30.6211 131.504 30.2656C131.605 29.9102 131.732 29.36 131.885 28.6152C131.597 28.6152 131.301 28.6068 130.996 28.5898C130.691 28.5729 130.412 28.5137 130.158 28.4121C129.887 28.3105 129.667 28.1497 129.498 27.9297C129.329 27.7096 129.244 27.4049 129.244 27.0156C129.244 26.7279 129.329 26.3385 129.498 25.8477C129.65 25.3568 129.862 24.8743 130.133 24.4004C130.404 23.9264 130.708 23.5202 131.047 23.1816C131.385 22.8262 131.724 22.6484 132.062 22.6484C132.452 22.6484 132.765 22.7923 133.002 23.0801C133.256 23.3678 133.451 23.7233 133.586 24.1465C133.721 24.5527 133.814 24.9844 133.865 25.4414C133.933 25.8984 133.967 26.2962 133.967 26.6348C134.255 26.6348 134.534 26.6348 134.805 26.6348C135.092 26.6178 135.363 26.6094 135.617 26.6094C136.582 26.6094 137.318 26.821 137.826 27.2441C138.334 27.6673 138.588 28.3613 138.588 29.3262C138.588 29.7155 138.562 30.1217 138.512 30.5449C138.461 30.9681 138.402 31.4082 138.334 31.8652C138.266 32.3053 138.207 32.7454 138.156 33.1855C138.105 33.6257 138.08 34.0573 138.08 34.4805C138.08 35.0898 138.165 35.5977 138.334 36.0039C138.503 36.3932 138.715 36.7064 138.969 36.9434C139.223 37.1803 139.493 37.3496 139.781 37.4512C140.069 37.5358 140.331 37.5781 140.568 37.5781C141.296 37.5781 141.982 37.3411 142.625 36.8672C143.268 36.3932 143.861 35.8262 144.402 35.166C144.944 34.4889 145.426 33.778 145.85 33.0332C146.29 32.2884 146.654 31.6367 146.941 31.0781C147.026 30.9258 147.145 30.8073 147.297 30.7227C147.449 30.638 147.61 30.5957 147.779 30.5957C148.084 30.5957 148.321 30.6973 148.49 30.9004C148.66 31.0866 148.744 31.2982 148.744 31.5352C148.744 31.7044 148.71 31.8568 148.643 31.9922C148.253 32.6862 147.796 33.4733 147.271 34.3535C146.764 35.2168 146.18 36.0293 145.52 36.791C144.859 37.5527 144.115 38.196 143.285 38.7207C142.473 39.2454 141.576 39.5078 140.594 39.5078C139.984 39.5078 139.409 39.3893 138.867 39.1523C138.326 38.9323 137.852 38.6107 137.445 38.1875C137.056 37.7474 136.743 37.2142 136.506 36.5879C136.269 35.9447 136.15 35.2253 136.15 34.4297C136.15 33.5833 136.235 32.7454 136.404 31.916C136.574 31.0697 136.658 30.2656 136.658 29.5039C136.658 29.1823 136.582 28.9453 136.43 28.793C136.294 28.6237 135.981 28.5391 135.49 28.5391C135.253 28.5391 134.991 28.5391 134.703 28.5391C134.432 28.5391 134.136 28.5475 133.814 28.5645ZM132.113 26.6855C132.113 26.5671 132.105 26.4147 132.088 26.2285C132.088 26.0254 132.071 25.8307 132.037 25.6445C132.02 25.4583 131.986 25.2975 131.936 25.1621C131.902 25.0267 131.859 24.959 131.809 24.959C131.758 24.959 131.69 25.0267 131.605 25.1621C131.538 25.2806 131.462 25.4329 131.377 25.6191C131.292 25.7884 131.216 25.9746 131.148 26.1777C131.081 26.3809 131.03 26.5501 130.996 26.6855H132.113Z"
            fill="#2D2D2D"
        />
    </svg>
))``;

interface Header {
    className?: string;
    children: JSX.Element;
}

export default styled(({ className, children }: Header) => (
    <div className={className}>
        <Logo />
        {children}
    </div>
))`
    height: 60px;
    width: 1200px;
    border-bottom: 1px solid #959595;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    background: #ffffff;
    margin-top: 20px;

    ${Logo} {
        height: 80%;
        margin-right: 2em;
    }
`;
