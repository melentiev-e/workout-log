<template>
    <div class="wrapper">
      <div>{{viewMonthYear.monthName}}-{{viewMonthYear.year}}</div><button @click="onInc">+</button><button @click="onDec">-</button>
      <input number type="number" v-model.number="inc">
        <div class="week">
            <div v-for="(day, key) in days" :key="key" class="day">
                {{day}}
            </div>     
        </div>
       <div class="week" v-for="i in 6" :key="i">
            <div v-for="(day, key) in days" :key="key" class="day">
              <div @click="selectDate(getCalendarDay(i, +key))" :isselected=" getCalendarDay(i, +key).isselected" :isactive=" getCalendarDay(i, +key).isactive " class="dayWrapper">
                {{ getCalendarDay(i, +key).day}}
              </div>
            </div>     
        </div>
    </div>
</template>
<script>
const scales = ["month", "day"];
const days = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
];
const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];

// Разобрать дату на простой объект
function extractDate(date) {
  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
}

export default {
  name: "workout-calendar",
  // методы
  methods: {
    // выбрать текущую дату
    selectDate(date) {
      this.selectedDate.day = date.day;
      this.selectedDate.month = date.month;
      this.selectedDate.year = date.year;
    },
    // сместить календарь вперед
    onInc(event) {
      this.inc++;
    },
    // сместить календарь назад
    onDec(event) {
      this.inc--;
    },
    // получить день календаря по индексу и неделе
    getCalendarDay(index, week) {
      // смещение в отображаемом календаре
      var fullOffset = (index - 1) * 7 + week;
      // добавляем общее смещение календаря
      fullOffset += this.inc * 7;

      var extractedDate = extractDate(
        new Date(this.y, this.m, this.d + fullOffset)
      );

      return {
        // дата в основном месяце
        isactive: extractedDate.month == this.viewMonthYear.month,
        // дата выбрана
        isselected:
          JSON.stringify(extractedDate) == JSON.stringify(this.selectedDate),
        day: extractedDate.day,
        month: extractedDate.month,
        year: extractedDate.year
      };
    }
  },
  // вычисляемые свойства
  computed: {
    // получить основной показываемый месяц
    viewMonthYear: function() {
      // берем месяц от даты, которая в центре календаря
      let x = new Date(this.y, this.m, this.d + this.inc * 7 + 21);

      return {
        monthName: months[x.getMonth()],
        month: x.getMonth(),
        year: x.getFullYear()
      };
    },
    days: () => days
  },
  // данные
  data: function() {
    // устанавливаем дату в понедельник
    let d = new Date();
    d.setDate(1);
    var day = d.getDay(),
      diff = 1 - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    let viewDate = new Date(d.setDate(diff));

    return {
      selectedDate: extractDate(new Date()),
      inc: 0,
      y: viewDate.getFullYear(),
      m: viewDate.getMonth(),
      d: viewDate.getDate(),
      scale: 0
    };
  }
};
</script>

<style lang="scss">
.week {
  display: flex;
  justify-content: space-around;
  .day {
    border-left: 1px solid;
    border-top: 1px solid;
    flex: 1;
    flex-shrink: 0;
    min-width: 0;
    overflow: hidden;
    line-height: 50px;
    &:last-child {
      border-right: 1px solid;
    }
    .dayWrapper {
      &[isactive] {
        font-weight: bold;
        background: gray;
      }
      &[isselected] {
        background: red;
      }
    }
  }
  &:last-child .day {
    border-bottom: 1px solid;
  }
}
</style>
