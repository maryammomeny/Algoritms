var ad_3_5 = [];
for (i = 200; i <= 2700; i++) {
    if ((i % 3 == 0 || i % 5 == 0) && (i % 15 != 0)) {
        ad_3_5.push(i);
    }
}
console.log(ad_3_5)