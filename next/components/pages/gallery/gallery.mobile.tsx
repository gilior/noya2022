import HomeCardMobile from 'components/home_card/home.card'
import { GetStaticProps } from 'next'
import { FC } from 'react'
import { GeneralSiteProps } from 'const'
import pace from 'public/pace.jpg'
import bal from 'public/bal.jpg'
import blue from 'public/blue.png'
import CustomImage from 'components/image/image'
import crash from 'public/crash.jpeg'
import Carousel from 'components/carousel/carousel'
import d from 'public/gallery/6ddb5b_05304bdf6f6d43babd04e0b68c107c09mv2.jpg'
import e from 'public/gallery/6ddb5b_0c345baaf5e24aca8a5f744a3ef0673amv2.jpg'
import f from 'public/gallery/6ddb5b_0c345baaf5e24aca8a5f744a3ef0673amv22.jpg'
import g from 'public/gallery/6ddb5b_0dfc89d731ee4d3088ca5328081e43c5mv2.jpg'
import h from 'public/gallery/6ddb5b_0dfc89d731ee4d3088ca5328081e43c5mv22.jpg'
import i from 'public/gallery/6ddb5b_19d3fcef531c469eb6baa98aedbc408dmv2.jpg'
import j from 'public/gallery/6ddb5b_19d3fcef531c469eb6baa98aedbc408dmv22.jpg'
import k from 'public/gallery/6ddb5b_1abafa4fd64246148b7d8c0b1569612cmv2.jpg'
import l from 'public/gallery/6ddb5b_1abafa4fd64246148b7d8c0b1569612cmv22.jpg'
import m from 'public/gallery/6ddb5b_1b7f9ddd300847f3920061a4b5de611amv2.jpg'
import n from 'public/gallery/6ddb5b_1b7f9ddd300847f3920061a4b5de611amv22.jpg'
import o from 'public/gallery/6ddb5b_1d18947a742d4de4b84f4febe2e91e18mv2.jpg'
import p from 'public/gallery/6ddb5b_245bed6cdbf74c9e94eb5ea3676874b6mv2.jpg'
import q from 'public/gallery/6ddb5b_251184cc4476424ca5d615ca8fef984cmv2.jpg'
import r from 'public/gallery/6ddb5b_251184cc4476424ca5d615ca8fef984cmv22.jpg'
import s from 'public/gallery/6ddb5b_268e7ac59c514d7fa0e921d16ad69855mv2.jpg'
import t from 'public/gallery/6ddb5b_268e7ac59c514d7fa0e921d16ad69855mv22.jpg'
import u from 'public/gallery/6ddb5b_2d3380697a42477eab0dd1c313828f57mv2.jpg'
import v from 'public/gallery/6ddb5b_2d3380697a42477eab0dd1c313828f57mv22.jpg'
import w from 'public/gallery/6ddb5b_2dd8cb5f6bb64dd49bd1a8b658d9de2amv2.jpg'
import x from 'public/gallery/6ddb5b_2dd8cb5f6bb64dd49bd1a8b658d9de2amv22.jpg'
import y from 'public/gallery/6ddb5b_2e9b75edc0f24415b9b66887e26f2c68mv2.jpg'
import z from 'public/gallery/6ddb5b_2e9b75edc0f24415b9b66887e26f2c68mv22.jpg'
import aa from 'public/gallery/6ddb5b_36552b7da3e940398695e6ab1231e1admv2.jpg'
import bb from 'public/gallery/6ddb5b_36552b7da3e940398695e6ab1231e1admv22.jpg'
import cc from 'public/gallery/6ddb5b_37494e7b64ce4a97bfd76dcbbdbc516dmv2.jpg'
import dd from 'public/gallery/6ddb5b_37494e7b64ce4a97bfd76dcbbdbc516dmv22.jpg'
import ee from 'public/gallery/6ddb5b_388d3c788d29450ba5f91500a709568fmv2.jpg'
import ff from 'public/gallery/6ddb5b_388d3c788d29450ba5f91500a709568fmv22.jpg'
import gg from 'public/gallery/6ddb5b_39d266dac73841239da159db34df6ea1mv2.jpg'
import hh from 'public/gallery/6ddb5b_39d266dac73841239da159db34df6ea1mv22.jpg'
import ii from 'public/gallery/6ddb5b_3c3b7f9f5e9c44ad87688ee8c4e1bdbdmv2.jpg'
import jj from 'public/gallery/6ddb5b_47b462aafd044f33acee758bdcd9d1c6mv2.jpg'
import kk from 'public/gallery/6ddb5b_47b462aafd044f33acee758bdcd9d1c6mv22.jpg'
import ll from 'public/gallery/6ddb5b_53e95f1788c441acb5c57b84e5fb14dcmv2.jpg'
import mm from 'public/gallery/6ddb5b_53e95f1788c441acb5c57b84e5fb14dcmv22.jpg'
import nn from 'public/gallery/6ddb5b_5446b2678f9c438d899eee490c19ec15mv2.jpg'
import oo from 'public/gallery/6ddb5b_58ae4764f7e24977ba230c874f1d7904mv2.jpg'
import pp from 'public/gallery/6ddb5b_6474414f429a4deab485a3ef24f21870mv2.jpg'
import qq from 'public/gallery/6ddb5b_6474414f429a4deab485a3ef24f21870mv22.jpg'
import rr from 'public/gallery/6ddb5b_663a365628264c298195eae708412fa9mv2.jpg'
import ss from 'public/gallery/6ddb5b_663a365628264c298195eae708412fa9mv22.jpg'
import tt from 'public/gallery/6ddb5b_782428754c6b4217b08daaacfdfd3b15mv2.jpg'
import uu from 'public/gallery/6ddb5b_782428754c6b4217b08daaacfdfd3b15mv22.jpg'
import vv from 'public/gallery/6ddb5b_783e1e24efa2405e9023dcca551b4a8dmv2.jpg'
import ww from 'public/gallery/6ddb5b_783e1e24efa2405e9023dcca551b4a8dmv22.jpg'
import xx from 'public/gallery/6ddb5b_78b0d3d0da9b44839a97c8851ac17217mv2.jpg'
import yy from 'public/gallery/6ddb5b_78b0d3d0da9b44839a97c8851ac17217mv22.jpg'
import zz from 'public/gallery/6ddb5b_7b8185ec891844d88e3c0033a60306eamv2.jpg'
import aaa from 'public/gallery/6ddb5b_7b8185ec891844d88e3c0033a60306eamv22.jpg'
import bbb from 'public/gallery/6ddb5b_81de73c545b64c8292dfbe46c4b4ee39mv2.jpg'
import ccc from 'public/gallery/6ddb5b_81de73c545b64c8292dfbe46c4b4ee39mv22.jpg'
import ddd from 'public/gallery/6ddb5b_84f80f960ff74253858a7a42947bfb45mv2.jpg'
import eee from 'public/gallery/6ddb5b_84f80f960ff74253858a7a42947bfb45mv22.jpg'
import fff from 'public/gallery/6ddb5b_8ae0ae2dcbc74bb6abd40742f293ad4dmv2.jpg'
import ggg from 'public/gallery/6ddb5b_9359f7c0f4374f12b4c49a4932399ed1mv2.jpg'
import hhh from 'public/gallery/6ddb5b_9359f7c0f4374f12b4c49a4932399ed1mv22.jpg'
import iii from 'public/gallery/6ddb5b_93c011ccffda4c36b2f57721642bcb49mv2.jpg'
import jjj from 'public/gallery/6ddb5b_93c011ccffda4c36b2f57721642bcb49mv22.jpg'
import kkk from 'public/gallery/6ddb5b_9ffe71afe88449a182918b243f54df3emv2.jpg'
import lll from 'public/gallery/6ddb5b_9ffe71afe88449a182918b243f54df3emv22.jpg'
import mmm from 'public/gallery/6ddb5b_abf4541d56c247c9add464d67507347dmv2.jpg'
import ooo from 'public/gallery/6ddb5b_abf4541d56c247c9add464d67507347dmv22.jpg'
import ppp from 'public/gallery/6ddb5b_ae81c5c3dd4f47959f98a42e9eae6a60mv2.jpg'
import qqq from 'public/gallery/6ddb5b_ae81c5c3dd4f47959f98a42e9eae6a60mv22.jpg'
import rrr from 'public/gallery/6ddb5b_b39a651d9df847ae8d7e368db9c8feedmv2.jpg'
import sss from 'public/gallery/6ddb5b_b39a651d9df847ae8d7e368db9c8feedmv22.jpg'
import ttt from 'public/gallery/6ddb5b_b5091287626545d4ae092fbbe2e1ea0cmv2.jpg'
import uuu from 'public/gallery/6ddb5b_b5091287626545d4ae092fbbe2e1ea0cmv22.jpg'
import vvv from 'public/gallery/6ddb5b_b577f028ef614b889f63009c889dfff3mv2.jpg'
import www from 'public/gallery/6ddb5b_b577f028ef614b889f63009c889dfff3mv22.jpg'
import xxx from 'public/gallery/6ddb5b_b6a93183cb054fad803aa9ca316f38e7mv2.png'
import yyy from 'public/gallery/6ddb5b_b8cbb3bd9428441da223082dbb542242mv2.jpg'
import zzz from 'public/gallery/6ddb5b_b8cbb3bd9428441da223082dbb542242mv22.jpg'
import aaaa from 'public/gallery/6ddb5b_bf1d6688973b48a88997670ee3864e6dmv2.jpg'
import bbbb from 'public/gallery/6ddb5b_bf1d6688973b48a88997670ee3864e6dmv22.jpg'
import cccc from 'public/gallery/6ddb5b_c0348fbfea124bf8b3434f11cf264e3fmv2.png'
import dddd from 'public/gallery/6ddb5b_c3cdda5bfb904e0e8e1a551462cf9e53mv2.jpg'
import eeee from 'public/gallery/6ddb5b_c3cdda5bfb904e0e8e1a551462cf9e53mv22.jpg'
import ffff from 'public/gallery/6ddb5b_c4c9ba32ddd54bcb9982298b1787ada9mv2.jpg'
import gggg from 'public/gallery/6ddb5b_c4c9ba32ddd54bcb9982298b1787ada9mv22.jpg'
import hhhh from 'public/gallery/6ddb5b_c5661d3f682e461e9522e3860ea8ff2dmv2.jpg'
import iiii from 'public/gallery/6ddb5b_c5661d3f682e461e9522e3860ea8ff2dmv22.jpg'
import jjjj from 'public/gallery/6ddb5b_c68f3b2141a74cc391fef0b678345391mv2.jpg'
import kkkk from 'public/gallery/6ddb5b_c6e2fe08426f413c9f7e4a7106a39facmv2.jpg'
import llll from 'public/gallery/6ddb5b_c6e2fe08426f413c9f7e4a7106a39facmv22.jpg'
import mmmm from 'public/gallery/6ddb5b_c8727f0ec41b4e64bb44ed92f301a31amv2.jpg'
import nnnn from 'public/gallery/6ddb5b_c8727f0ec41b4e64bb44ed92f301a31amv22.jpg'
import oooo from 'public/gallery/6ddb5b_d76eb60fb9ac4017a15945b4bcd61f4cmv2.jpg'
import pppp from 'public/gallery/6ddb5b_d76eb60fb9ac4017a15945b4bcd61f4cmv22.jpg'
import qqqq from 'public/gallery/6ddb5b_dc50e8cdfd2f4f4f826fb8bfe31b2812mv2.jpg'
import rrrr from 'public/gallery/6ddb5b_eb9803e18fd74c4b86c9814bc7196b6emv2.png'
import ssss from 'public/gallery/6ddb5b_edf4d3d68a374d399b38dbafa9edbe2dmv2.png'
import tttt from 'public/gallery/6ddb5b_f10c6c392fbb4a13886ea4e604e203a6mv2.jpg'
import uuuu from 'public/gallery/6ddb5b_f10c6c392fbb4a13886ea4e604e203a6mv22.jpg'
import vvvv from 'public/gallery/6ddb5b_f171732dd7094ec7a2a7a00ba79e8ba9mv2.jpg'
import wwww from 'public/gallery/6ddb5b_f171732dd7094ec7a2a7a00ba79e8ba9mv22.jpg'
import xxxx from 'public/gallery/6ddb5b_f3f1445462af4d04a70bacea1868881fmv2.jpg'
import yyyy from 'public/gallery/6ddb5b_f3f1445462af4d04a70bacea1868881fmv22.jpg'
import ddddd from 'public/gallery/vector.svg'


const GalleryPageMobile: FC<GeneralSiteProps> = (props) => {


  
  return (
    <Carousel generalSiteProps={props} images={[d,e,f,g,h,i,j,k,l,m,n,o,o,p,q,r,s,t,u,v,w,x,y,z,aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv,xx,yy,zz,aaa,bbb,ccc,ddd,eee,fff,ggg,hhh,iii,jjj,kkk,lll,mmm,ooo,ppp,qqq,rrr,sss,ttt,uuu,vvv,www,xxx,yyy,zzz,aaaa,bbbb,cccc,dddd,eeee,ffff,gggg,hhhh,iiii,jjjj,kkkk,llll,mmmm,nnnn,oooo,pppp,qqqq,rrrr,ssss,tttt,uuuu,vvvv,wwww,xxxx,yyyy,ddddd]}></Carousel>
  )
}
export default GalleryPageMobile;

