import { defineStore } from 'pinia'

export const userStore = defineStore('status', {
  state: () => ({
    career: 10,
    money: 0,
    health: 85,
    relationship: 60,
    age: 25,
    round: 1,

    choices: [], //ช้อยที่เลือกทุกรอบ
    lastest_choices: [], // ช้อยที่เลือกล่าสุด 4 อัน
    lastest_choices_show: [], // ช้อยที่โชว์ล่าสุด 8 อัน

    salary: 0,
    late_bloomer: false,
    residence: '',
    lottery: 0,
    stock: 0,
    career_level: 'สู้ต่อไปนะ!', // ระดับหัวหน้า > ระดับผู้บริหาร > ระดับ CEO

    events: [], // อีเว้นที่ได้ล่าสุด
    events_all: [], // อีเว้นทุกรอบ
    currentEventIndex: 0,

    result: 0, // 1-11

    minus: 0, //เงินที่ถูกหัก

    guaranteedEventRound: 0, // รอบที่จะมี สูญเสียคนสำคัญ
    guaranteedEventFriendRound: 0, // รอบที่จะมี เพื่อนเสียชีวิต

    lastest_salary: 0,

    mode: '', // Easy Mode, Normal Mode, Hard Mode

    buy_home_round: -10,
    buy_condo_round: -10,

    buy_insurance_round: -10,

    // condo: 0,

    achievement: [], // 'Tiny You', 'Paw-sitive Vibes', 'Forever Learner', 'Love, Actually', 'Healing Begins Here'

    eat: 0, // 8K/month

    transport: 0, // 3.5K/month

    goal: '', // ประสบความสำเร็จในหน้าที่การงาน

    pet: 0, // รอบที่เลือกเลี้ยงสัตว์

    courseCount: 0, // จำนวนคอร์สที่เคยลง

    wedding_round: -10, 
  }),
  actions: {
    resetStatus() {
      this.career = 10
      this.money = 0
      this.health = 85
      this.relationship = 60
      this.age = 25
      this.round = 1

      this.choices = []
      this.lastest_choices = []
      this.lastest_choices_show = []

      this.salary = 0
      this.late_bloomer = false
      this.residence = ''
      this.lottery = 0
      this.stock = 0
      this.career_level = 'สู้ต่อไปนะ!'

      this.events = [] // event each round
      this.events_all = [] // all events
      this.currentEventIndex = 0

      this.result = 0 // 1-11

      this.minus = 0

      this.guaranteedEventRound = 0
      this.guaranteedEventFriendRound = 0

      this.lastest_salary = 0

      this.mode = '' // Easy Mode

      this.buy_home_round = -10
      this.buy_condo_round = -10

      // this.condo = 0

      this.achievement = [] // 'Tiny You', 'Paw-sitive Vibes', 'Forever Learner', 'Love, Actually', 'Healing Begins Here'

      this.eat = 0

      this.transport = 0

      this.goal = '' // ประสบความสำเร็จในหน้าที่การงาน

      this.pet = 0
      
      this.courseCount = 0

      this.wedding_round = -10
    },
  },
})
