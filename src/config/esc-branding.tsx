import React from 'react'
import { Text } from '@chakra-ui/react'
import { Branding, BrandPalette } from './branding'

export const escPalette: BrandPalette = {
  primary: {
    50: '#f4e7e8',
    100: '#eacfd0',
    200: '#d49fa1',
    300: '#bf7072',
    400: '#a94043',
    500: '#941014',
    600: '#760d10',
    700: '#590a0c',
    800: '#3b0608',
    900: '#1e0304',
  },
  alternate: {
    50: '#f5e9ea',
    100: '#ead4d5',
    200: '#d5a8ab',
    300: '#c07d80',
    400: '#ab5156',
    500: '#96262c',
    600: '#781e23',
    700: '#5a171a',
    800: '#3c0f12',
    900: '#1e0809',
  },
}

export const escRules = [
  {
    contents: [
      'เพื่อให้การเลือกตั้งหัวหน้านิสิตชั้นปีที่ 1 และ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2563 และประธานนิทรรศการวิชาการทางวิศวกรรม ครั้งที่ 18 เป็นไปได้ด้วยความเรียบร้อย',
      'กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2563 จึงมีประกาศให้กําหนดระเบียบการเลือกตั้งหัวหน้านิสิตชั้นปีที่ 1 และ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2563 และประธานนิทรรศการวิชาการทางวิศวกรรม ครั้งที่ 18 ไว้ดังต่อไปนี้',
    ],
  },
  {
    header:
      'ข้อ 1. การเลือกตั้งหัวหน้านิสิตชั้นปีที่ 1 และ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2563 และประธานนิทรรศการวิชาการทางวิศวกรรม ครั้งที่ 18',
    contents: [
      'เป็นการเลือกตั้งหัวหน้านิสิตชั้นปีที่ 1 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2563 ซึ่งเลือกตั้งมาจากนิสิตขั้นปริญญาบัณฑิต ชั้นปีที่ 1 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ปีการศึกษา 2563',
      'การเลือกตั้งหัวหน้านิสิตชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ประจำปีการศึกษา 2563 ซึ่งเลือกตั้งมาจากนิสิตขั้นปริญญาบัณฑิต ชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ปีการศึกษา 2563',
      'การเลือกตั้งประธานนิทรรศการวิชาการทางวิศวกรรม ครั้งที่ 18 ซึ่งเลือกตั้งมาจากนิสิตขั้นปริญญาบัณฑิต ชั้นปีที่ 3 และ 4 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ปีการศึกษา 2563 และในประกาศฉบับนี้เรียกว่า “การเลือกตั้ง”',
    ],
  },
  {
    header: 'ข้อ 2 กำหนดวัน เวลา และสถานที่เลือกตั้ง',
    contents: [
      'ให้กระทำการเลือกตั้งในวันอังคารที่ 24 พฤศจิกายน พ.ศ. 2563 ตั้งแต่เวลา 08.30 น. ถึง 17.30 น. โดยให้นิสิตผู้มีสิทธิออกเสียงเลือกตั้งลงคะแนนผ่านระบบออนไลน์ของ กวศ.',
    ],
  },
  {
    header: 'ข้อ 3 สถานที่นับคะแนน และรวมคะแนน',
    contents: [
      'การรวบรวมผลคะแนนจะทำในระบบออนไลน์ของ กวศ. หลังหมดเวลาการเลือกตั้ง คือ ตั้งแต่เวลา 17.30 น. ของวันอังคารที่ 24 พฤศจิกายน พ.ศ. 2563 เป็นต้นไป',
    ],
  },
  {
    header: 'ข้อ 4 ตำแหน่งที่กำหนดไว้สำหรับการเลือกตั้งทั่วไปตามข้อ 1',
    contents: [
      'การเลือกตั้งทั่วไปเป็นการเลือกตั้งกรรมการตำแหน่งต่าง ๆ ในกรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ซึ่งได้แก่ตำแหน่งดังต่อไปนี้',
      '4.1 ประธานนิทรรศการวิชาการทางวิศวกรรม ครั้งที่ 18',
      '4.2 หัวหน้าชั้นปีที่ 1',
      '4.3 หัวหน้าชั้นปีที่ 2',
    ],
  },
  {
    header: 'ข้อ 5 คุณสมบัติของผู้สมัครรับเลือกตั้ง',
    contents: [
      '5.1 ต้องไม่เป็นนิสิตสภาพวิทยาทัณฑ์',
      '5.2 ต้องไม่เป็นนิสิตที่เคยถูกลงโทษตัดคะแนนความประพฤติ',
      '5.3 ผู้สมัครรับเลือกตั้งในตำแหน่งในข้อ 4.1 ต้องกำลังศึกษาอยู่ในระดับชั้นปริญญาบัณฑิต ชั้นปีที่ 3 หรือ 4 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ในปีการศึกษา 2563 (รหัสประจำตัวนิสิต 613xxxxx21 หรือ 603xxxxx21)',
      '5.4 ผู้สมัครรับเลือกตั้งในตำแหน่งในข้อ 4.2 ต้องกำลังศึกษาอยู่ในระดับชั้นปริญญาบัณฑิต ชั้นปีที่ 1 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ในปีการศึกษา 2563 (รหัสประจำตัวนิสิต 633xxxxx21)',
      '5.5 ผู้สมัครรับเลือกตั้งในตำแหน่งในข้อ 4.3 ต้องกำลังศึกษาอยู่ในระดับชั้นปริญญาบัณฑิต ชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ในปีการศึกษา 2563 (รหัสประจำตัวนิสิต 623xxxxx21)',
    ],
  },
  {
    header: 'ข้อ 6 คุณสมบัติของผู้มีสิทธิออกเสียงเลือกตั้ง',
    contents: [
      '6.1 สำหรับการเลือกตั้งในตำแหน่งข้อ 4.1 ผู้มีสิทธิออกเสียงเลือกตั้งต้องกำลังศึกษาอยู่ในระดับชั้นปริญญาบัณฑิต ชั้นปีที่ 1 ถึงชั้นปีที่ 4 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ในปีการศึกษา 2563 (รหัสประจำตัวนิสิต 603xxxxx21, รหัสประจำตัวนิสิต 613xxxxx21, รหัสประจำตัวนิสิต 623xxxxx21 หรือ รหัสประจำตัวนิสิต 633xxxxx21)',
      '6.2 สำหรับการเลือกตั้งในตำแหน่งข้อ 4.2 ผู้มีสิทธิออกเสียงเลือกตั้งต้องกำลังศึกษาอยู่ในระดับชั้นปริญญาบัณฑิต ชั้นปีที่ 1 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ในปีการศึกษา 2563 (รหัสประจำตัวนิสิต 633xxxxx21)',
      '6.3 สำหรับการเลือกตั้งในตำแหน่งข้อ 4.3 ผู้มีสิทธิออกเสียงเลือกตั้งต้องกำลังศึกษาอยู่ในระดับชั้นปริญญาบัณฑิต ชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ในปีการศึกษา 2563 (รหัสประจำตัวนิสิต 623xxxxx21)',
    ],
  },
  {
    header: 'ข้อ 7 การสมัครเข้ารับเลือกตั้ง',
    contents: [
      '7.1 ให้การสมัครเข้ารับเลือกตั้งในตำแหน่งตามข้อ 4 เป็นไปตามเงื่อนไขดังนี้',
      <Text key="7.1.1" style={{ textIndent: '4rem' }}>
        7.1.1 การสมัครเข้ารับเลือกตั้งในตำแหน่งในข้อ 4.1, 4.2 และ 4.3
        ให้นิสิตผู้ประสงค์ลงสมัครรับเลือกตั้งในตำแหน่งดังกล่าว
        ลงสมัครรับเลือกตั้งในแบบเดี่ยว
      </Text>,
      '7.2 ให้นิสิตผู้ประสงค์จะสมัครรับเลือกตั้ง กระทำดังนี้',
      <Text key="7.2.1" style={{ textIndent: '4rem' }}>
        7.2.1 สำหรับการเลือกตั้งในตำแหน่งข้อ 4.1 สมัครได้ที่เว็บ
        http://bit.ly/nitad18signup ตั้งแต่วันศุกร์ที่ 16 ตุลาคม พ.ศ. 2563 เวลา
        17.00 น. ถึงวันศุกร์ที่ 26 ตุลาคม พ.ศ. 2563 เวลา 23.59 น.
      </Text>,
      <Text key="7.2.2" style={{ textIndent: '4rem' }}>
        7.2.2 สำหรับการเลือกตั้งในตำแหน่งข้อ 4.2 และ 4.3 สมัครได้ที่เว็บ
        http://bit.ly/headyear63 ตั้งแต่วันอังคารที่ 3 พฤศจิกายน พ.ศ. 2563 เวลา
        15.00 น. ถึงวันอาทิตย์ที่ 8 พฤศจิกายน พ.ศ. 2563 เวลา 23.59 น.
      </Text>,
      <Text key="7.2.3" style={{ textIndent: '4rem' }}>
        7.2.3 รายงานตัวต่อคณะกรรมการหรือคณะอนุกรรมการที่คณะกรรมการมอบหมาย
        เพื่อรับทราบข้อมูลที่เกี่ยวข้องกับการเลือกตั้ง
        และแนวปฏิบัติในการประชาสัมพันธ์การเลือกตั้ง ในวันจันทร์ที่ 16 พฤศจิกายน
        พ.ศ. 2563 เวลา 16.30 น. ณ ห้องสำนักงาน กวศ. (ชั่วคราว) ชั้น 5 อาคารวิศวฯ
        100 ปี คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย
      </Text>,
      <Text key="7.2 remark" style={{ textIndent: '4rem' }}>
        หากนิสิตผู้ประสงค์จะสมัครรับเลือกตั้งไม่สามารถปฏิบัติตามข้อ 7.2.3
        ให้นิสิตผู้ประสงค์ลงสมัครรับเลือกตั้งแจ้งต่อคณะกรรมการหรือคณะอนุกรรมการที่คณะกรรมการมอบหมาย
        ภายในวันอาทิตย์ที่ 8 พฤศจิกายน พ.ศ. 2563 เวลา 23.59 น.
      </Text>,
    ],
  },
  {
    header: 'ข้อ 8 การตรวจคุณสมบัติของผู้สมัครรับเลือกตั้ง',
    contents: [
      '8.1 ให้คณะกรรมการหรือคณะอนุกรรมการที่คณะกรรมการมอบหมาย ทําหน้าที่ตรวจสอบคุณสมบัติของผู้สมัครรับเลือกตั้งตามที่ระบุไว้ในข้อ 6 ให้เสร็จสิ้นภายใน 7 วัน นับตั้งแต่สิ้นสุดการรับสมัครเข้ารับเลือกตั้ง',
      'หากผู้สมัครรับเลือกตั้งคนใด ขาดคุณสมบัติตามข้อ 6 ให้คณะกรรมการเพิกถอนสิทธิการสมัครรับเลือกตั้งของผู้สมัครรับเลือกตั้งคนนั้น',
      '8.2 ให้คณะกรรมการหรือคณะอนุกรรมการที่คณะกรรมการมอบหมาย ทําหน้าที่พิจารณานโยบายของผู้สมัครรับเลือกตั้ง โดยเป็นไปตามดุลยพินิจของคณะกรรมการ',
    ],
  },
  {
    header: 'ข้อ 9 การประชาสัมพันธ์การเลือกตั้ง',
    contents: [
      '9.1 ให้รูปแบบสื่อการประชาสัมพันธ์การเลือกตั้งของผู้สมัครรับเลือกตั้งเป็นไปตามระเบียบที่คณะกรรมการกำหนด',
      '9.2 ห้ามผู้สมัครรับเลือกตั้งประชาสัมพันธ์การเลือกตั้ง หลังเวลา 23.59 น. ของวันจันทร์ที่ 23 พฤศจิกายน พ.ศ. 2563 ในรูปแบบใด ๆ รวมถึงการหาเสียงผ่านสื่อออนไลน์และโซเชียลเน็ตเวิร์ก',
    ],
  },
  {
    header: 'ข้อ 10 วิธีการดําเนินการเลือกตั้ง',
    contents: [
      'ให้คณะกรรมการหรือคณะอนุกรรมการที่คณะกรรมการมอบหมาย จัดเตรียมช่องทางเลือกตั้งออนไลน์และแต่งตั้งนิสิตเป็นเจ้าหน้าที่ดูแลช่องทางเลือกตั้งดังกล่าวในการควบคุมดูแลการออกเสียงเลือกตั้ง และการนับคะแนนให้เป็นไปอย่างยุติธรรมและเรียบร้อยดังนี้',
      '10.1 การออกเสียงเลือกตั้ง ให้ใช้วิธีลงคะแนนเสียงผ่านระบบเลือกตั้งออนไลน์ที่ กวศ. เป็นผู้จัดทำขึ้น โดยข้อปฏิบัติสําหรับการออกเสียงเลือกตั้งดังนี้',
      <Text key="10.1.1" style={{ textIndent: '4rem' }}>
        10.1.1
        นิสิตผู้มีสิทธิออกเสียงเลือกตั้งเข้าสู่ระบบเลือกตั้งออนไลน์ด้วยรหัสนิสิตและรหัสผ่านระบบ
        CUNET โดยต้องยอมรับนโยบายการจัดเก็บข้อมูลที่ประกาศไว้ในช่องทางดังกล่าว
      </Text>,
      <Text key="10.1.2" style={{ textIndent: '4rem' }}>
        10.1.2 ตรวจสอบข้อมูลของตน ได้แก่ ชื่อ-นามสกุล รหัสนิสิต และชั้นปี
      </Text>,
      <Text key="10.1.3" style={{ textIndent: '4rem' }}>
        10.1.3
        ให้นิสิตผู้มีสิทธิออกเสียงเลือกตั้งทําเครื่องหมายแสดงการออกเสียงเลือกตั้งลงในช่องสี่เหลี่ยมที่ต้องการลงคะแนน
      </Text>,
      <Text key="10.1.4" style={{ textIndent: '4rem' }}>
        10.1.4 เมื่อระบบการเลือกตั้งแสดงว่าบันทึกการลงคะแนนสำเร็จ
        แสดงว่าการเลือกตั้งเป็นที่สิ้นสุด
      </Text>,
      '10.2 การทําเครื่องหมายแสดงการออกเสียงเลือกตั้งตามข้อ 10.1.3 ให้เป็นไปตามระเบียบที่คณะกรรมการกำหนด โดยให้ทําเครื่องหมายกากบาท ลงในช่องหมายเลขประจําตัวผู้สมัครรับเลือกตั้งที่ต้องการลงคะแนนให้ ช่องรับรอง หรือช่องไม่รับรอง หรือช่องงดออกเสียง ช่องใดช่องหนึ่งเพียงช่องเดียว',
    ],
  },
  {
    header: 'ข้อ 11 วิธีการนับคะแนน',
    contents: ['รวมรวมผลคะแนนในฐานข้อมูลของระบบเลือกตั้งออนไลน์ของ กวศ. '],
  },
  {
    header: 'ข้อ 12 การรับรองผลการเลือกตั้ง',
    contents: [
      '12.1 เมื่อคณะกรรมการรับรองผลการเลือกตั้งอย่างไม่เป็นทางการตามข้อ 11 แล้ว ให้คณะกรรมการแจ้งผลการเลือกตั้งอย่างไม่เป็นทางการแก่ผู้สมัครรับเลือกตั้งและกรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย และให้คณะกรรมการประกาศผลการเลือกตั้งอย่างไม่เป็นทางการแก่สาธารณชนทราบ ภายใน 24 ชั่วโมงนับตั้งแต่การนับคะแนนและการรวมคะแนนสิ้นสุดลง',
      '12.2 ให้คณะกรรมการรับรองผลการเลือกตั้งอย่างเป็นทางการ และส่งรายชื่อผู้รับการเลือกตั้งในตำแหน่งต่าง ๆ ตามข้อ 4 แก่กรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย ภายใน 7 วันนับตั้งแต่พ้นกำหนดการส่งคำประท้วงคัดค้านการเลือกตั้ง หรือคณะกรรมการพิจารณาการคัดค้านการเลือกตั้ง ตามข้อ 14 แล้วเสร็จ แล้วแต่กรณี',
    ],
  },
  {
    header: 'ข้อ 13 การคัดค้านการเลือกตั้ง',
    contents: [
      'ให้ผู้ประสงค์ที่จะคัดค้านการเลือกตั้ง ยื่นคำประท้วงเป็นลายลักษณ์อักษรต่อคณะกรรมการ ณ ห้องสํานักงาน กวศ. (ชั่วคราว) ชั้น 5 อาคารวิศวฯ 100 ปี คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย พร้อมทั้งหลักฐานประกอบคำคัดค้าน (ถ้ามี) ภายในวันอังคารที่ 1 ธันวาคม พ.ศ.  2563 เวลา 17.00 น.',
    ],
  },
  {
    header: 'ข้อ 14 การวินิจฉัยและชี้ขาดในประเด็นอันเกี่ยวข้องกับการเลือกตั้ง',
    contents: [
      'ในกรณีที่มีประเด็นใด ๆ อันเกี่ยวข้องหรือมีส่วนเกี่ยวข้องกับการเลือกตั้ง ให้เป็นอำนาจของคณะกรรมการในการวินิจฉัยหรือชี้ขาดในประเด็นดังกล่าว และถือว่าคำวินิจฉัยและคำตัดสินของคณะกรรมการเป็นที่สิ้นสุด',
    ],
  },
  {
    header: 'ข้อ 15 บทลงโทษ',
    contents: [
      '15.1 ผู้สมัครรับเลือกตั้งคนใด กระทำการทุจริตในการเลือกตั้ง หรือกระทำการใด ๆ อันเป็นการฝ่าฝืนประกาศฉบับนี้หรือประกาศฉบับอื่นที่คณะกรรมการออกประกาศ หรือไม่ปฏิบัติตามคำตักเตือนของคณะกรรมการ, คณะอนุกรรมการ หรือเจ้าหน้าที่ประจําหน่วยเลือกตั้ง จะต้องได้รับโทษตามระเบียบจุฬาลงกรณ์มหาวิทยาลัย ว่าด้วยวินัยนิสิต พ.ศ. 2527 และระเบียบจุฬาลงกรณ์มหาวิทยาลัย ว่าด้วยวินัยนิสิต (ฉบับที่ 2) พ.ศ. 2547 และถูกเพิกถอนสิทธิการสมัครรับเลือกตั้ง การพิจารณาเพิกถอนสิทธิการสมัครรับเลือกตั้งของผู้สมัครรับเลือกตั้ง ให้เป็นดุลยพินิจของคณะกรรมการ',
      '15.2 นิสิตผู้ใดกระทำการทุจริตในการเลือกตั้งหรือกระทำการใด ๆ อันเป็นการฝ่าฝืนประกาศฉบับนี้หรือประกาศฉบับอื่นที่คณะกรรมการออกประกาศ หรือไม่ปฏิบัติตามคำตักเตือนของคณะกรรมการ, คณะอนุกรรมการ หรือเจ้าหน้าที่ประจําหน่วยเลือกตั้ง จะต้องได้รับโทษตามระเบียบจุฬาลงกรณ์มหาวิทยาลัย ว่าด้วยวินัยนิสิต พ.ศ. 2527 และระเบียบจุฬาลงกรณ์มหาวิทยาลัย ว่าด้วยวินัยนิสิต (ฉบับที่ 2) พ.ศ. 2547',
      '15.3 บุคคลที่ไม่ใช่นิสิตจุฬาลงกรณ์มหาวิทยาลัยผู้ใดกระทำการทุจริตในการเลือกตั้ง หรือกระทำการใด ๆ ฝ่าฝืนประกาศฉบับนี้หรือประกาศฉบับอื่นที่คณะกรรมการออกประกาศ หรือไม่ปฏิบัติตามคำตักเตือนของคณะกรรมการ, คณะอนุกรรมการ หรือเจ้าหน้าที่ประจําหน่วยเลือกตั้ง จะถูกส่งตัวไปยังภารกิจกิจการนิสิต คณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย หรือศูนย์รักษาความปลอดภัยและจัดการจราจรแห่งจุฬาลงกรณ์มหาวิทยาลัย เพื่อดำเนินการต่อไป',
    ],
  },
  {
    header: 'ข้อ 16 บทเฉพาะกาล',
    contents: [
      'ในกรณีที่คณะกรรมการสิ้นสุดลงไม่ว่าด้วยเหตุใดและยังมีประเด็นใด ๆ อันเกี่ยวข้องหรือมีส่วนเกี่ยวข้องกับการเลือกตั้งเหลืออยู่ ให้อำนาจของคณะกรรมการในประกาศฉบับนี้และประกาศฉบับอื่นที่คณะกรรมการออกประกาศ เป็นอำนาจของกรรมการนิสิตคณะวิศวกรรมศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย',
    ],
  },
]

const escBranding: Branding = {
  rules: escRules,
  palette: escPalette,
}

export { escBranding }
