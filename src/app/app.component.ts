import { Component, VERSION } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import {
  pluck
} from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  images = [
    'https://64.media.tumblr.com/17e1e7ff60eaa3282f3b89bc4b9f6c1e/tumblr_pos55boN4I1qixuo1o1_1280.png',
    'https://64.media.tumblr.com/1ba80e1864b579f2a91d02555d8204d9/tumblr_oondfmO9HC1qixuo1o2_r1_1280.png',
    'https://64.media.tumblr.com/b137da9ad18d442b45a24231d25f26b5/tumblr_m6kc2lHuS91qixuo1o2_r1_1280.png',
    'https://64.media.tumblr.com/0b514b1079edc15c8e514b6b563a8142/tumblr_m3o82idUxG1qixuo1o2_r1_1280.png',
    'https://64.media.tumblr.com/28d6d209c8344cad60f478c76a178a6e/1317d6f35801e92b-c8/s1280x1920/885a1984db86e7de1a7a199d6279d421083cc237.png',
    'https://64.media.tumblr.com/3dc029eeaf21e9d5a12db081526a5b97/96a0c06561ce85b9-19/s1280x1920/311feb080aa34f07c55f60d6892a27cb2b300e12.png',
    'https://64.media.tumblr.com/e56e39066cb2ba68af8d1620633ad5fc/d059a58b58d709de-b4/s1280x1920/ffd6d421e84961b29128436b2b050cf103ceee26.png',
    'https://64.media.tumblr.com/a8d50ad3b73f10ec596f7ae535e1f2bf/d5ad74c4302c4d77-53/s1280x1920/9bf82ebb6ea9d69d2c5791b9bef07ad1a18e7164.png',
    'https://64.media.tumblr.com/1932a22bd80e6f67e3ca308dc3af656e/21b62ef94436fc96-d5/s1280x1920/32998296cfc3bb3688d014ca6eda1be729975752.png',
    'https://64.media.tumblr.com/8a111e014aa8c01cc6b1d12f291f4e43/f38d6577b7554fba-d6/s1280x1920/c134c75a9753b65a6ec500c1800f13c16c541a32.png',
    'https://64.media.tumblr.com/cfdf7edc25d4c6b138a204b7c0b71c27/56351703341b771e-a9/s1280x1920/ae461a761049dbbbc890ba2356f6027f526fef2f.png',
    'https://64.media.tumblr.com/c36081f7a8d6215f4e1f9dac091b4c72/bbdee7c3bf00ef79-c6/s1280x1920/5a09013ec3361ce96eac011e129dc5494336e573.png',
    'https://64.media.tumblr.com/5bfb691937ff268cfc910b25958b17e3/c9a909808c9e3b96-ba/s1280x1920/2b78e53cfee65f32ee0aeef10ebe5151ff001443.png',
    'https://64.media.tumblr.com/4d5836f490a6e1c6a9eb3060ab61c894/d8f7fb9f65d7693a-ea/s1280x1920/170098a931ffbccb37c9e571ebbf2459241d2555.png',
    'https://64.media.tumblr.com/0566510f3af5b75310d33a03e3ef1cf8/2b2aabc52700b421-95/s1280x1920/36ec71fdad652c013a3fa90fa9d186dd507d8a8a.png',
    'https://64.media.tumblr.com/a4eaaa2c66604427e1d398cdc4d89684/ffeb9c2b14197dc4-e9/s1280x1920/91d017761206f85e3b5dc90a0702f1be8182e4f2.png',
    'https://64.media.tumblr.com/3b87d645cea856e7eda291944aec8a89/6050796ef733e86d-ca/s1280x1920/b27a78143cb784d2c780c5d4f982ff9951320800.png'
  ];

    
  storeNewOrder(event) {
    console.log(this.images)
    console.log(event)
  }

}
