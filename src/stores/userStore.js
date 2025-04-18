import { defineStore } from 'pinia'

export const userStore = defineStore('status', {
  state: () => ({
    career: 10,
    money: 0,
    health: 85,
    relationship: 60,
    age: 25,
    round: 1,

    choices: [],
    lastest_choices: [], // ช้อยที่เลือกล่าสุด 4 อัน
    lastest_choices_show: [], // ช้อยที่โชว์ล่าสุด 8 อัน

    salary: 0,
    late_bloomer: false,
    residence: '',
    lottery: 0,
    stock: 0,
    career_level: 'พนักงาน', // หัวหน้า (35%) > ผู้บริหาร (60%) > CEO (85%)

    events: [], // อีเว้นที่ได้ล่าสุด
    events_all: [], // อีเว้นทุกรอบ
    currentEventIndex: 0,

    result: 0,

    minus: 0, //เงินที่ถูกหัก

    guaranteedEventRound: 0, // รอบที่จะมี สูญเสียคนสำคัญ

    lastest_salary: 0,

    mode: '', //easy, normal, hard
  }),
  actions: {
    updateStat(stat, value) {
      value = Number(value)
      if (this[stat] !== undefined) {
        this[stat] += value
        if (this[stat] < 0) {
          this[stat] = 0
        } else if (this[stat] > 100) {
          this[stat] = 100 // for health career relationship
        }
      }
    },
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
      this.career_level = 'พนักงาน'

      this.events = [] // event each round
      this.events_all = [] // all events
      this.currentEventIndex = 0

      this.result = 0

      this.minus = 0

      this.guaranteedEventRound = 0

      this.lastest_salary = 0

      this.mode = ''
    },
  },
})
