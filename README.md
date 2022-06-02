# ***IKAR***

>  ## :memo: **Note:** 
>  ####  Ad Badr Eddine
>  ##### Eloued **21 years** old.
>  :email: 
> :mortar_board:GL STUDENT , :computer:FrontEnd, :sunrise:Designer.

## Project setup
```
yarn install
```

> :scroll: Yarn is a **package** manager for your code. It allows you to use and share code with other developers from around the world. Yarn does this **quickly**, **securely**, and **reliably** so you don't ever have to worry.


## :factory: framework js : Vue.js

``` terminal
yarn add vue-cli 
```

> :scroll: An **approachable**, performant and versatile **framework** for building web user interfaces.
>> ##### :arrow_forward:  ***Why Do I Use Vue Js***
>> Vue is **lightweight**, **easy to learn**, and **pleasant to write** in. Because of its familiar **templating syntax** and **use of components**, integrating or migrating existing projects to Vue is faster and smoother. ***For that reason***:+1:, ==Vue.js== is great for startups but can be just as well used in large scale applications:100:.

#### :bulb: ***Example***
```js
<template>

<div v-if="isTrue"> TRUE </div>
<div v-else> FALSE </div>
<div v-show="isShow"> SHOW </div>

<button v-on:click="tiggleIsTrue"> True/False </button>
<button v-on:click="tiggleIsTrue"> Show/Hide </button>

<template/>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Tast-',
  computed: {
    isShow() {
      return this.$store.getters.isShow;
    },
     isShow() {
      return this.$store.getters.isTrue
    },
  },
  methods: {
    ...mapMutations(['tiggleIsTrue']),
    ...mapMutations(['tiggleIsShow']),
  },
}
<script/>
```

|code|Description|
|---|---|
|v-if|The directive is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.|
|v-show|The directive is a Vue. js directive used to toggle the display CSS property of a element with our data. If the data is true it will make it visible else it will make it invisible|
|v-on:click|The directive is a Vue. js directive used to add a click event listener to an element. First, we will create a div element with id as app and let's apply the v-on:click directive to a element. Further, we can execute a function when click even occurs. Syntax: v-on:click="function"|

### :information_desk_person: What version i use
```
vue --version
> @vue/cli 5.0.4
```
#### To get better results, I used several libraries:

- vee-validate 
- vee-validate/rules
- @fontAwsome
- animate.css
- sass
- axios
- vue-chart.js
- vue-chartkick
- vuex
- vue-router

#### For better performance and more safety, I used
- bable
- eslint
- webpack

## :statue_of_liberty: framwork css : Tailwind.css
```
npm install -D tailwindcss
```
> :scroll: Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces.
>> ##### :arrow_forward:  ***Why Do I Use Tailwind css***
>>  It is a highly customizable, **low-level CSS framework** that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

#### :bulb: ***Example***
```js
<template>
<div class="w-1/2 mx-auto flex justify-between">
<div v-if="isTrue" class="text-white text-cenrt"> TRUE </div>
<div v-else> FALSE </div>
<div v-show="isShow" class="bg-[#202020] rounded px-4 py-2 text-white "> SHOW </div>
</div>
<div class="w-1/3 mx-auto flex justify-between">
<button v-on:click="tiggleIsTrue" class="bg-[#202020] rounded px-4 py-2 text-white "> True/False </button>
<button v-on:click="tiggleIsTrue" class="bg-[#202020] rounded px-4 py-2 text-white "> Show/Hide </button>
</div>
<template/>
```
|Class Name|Description|
|---|---|
|w-1/2|---|
|mx-auto|---|
|flex|---|
|text-white|---|
|bg-[#202020]|---|
|px-4|---|
|py-2|---|
|justify-between|---|

### :information_desk_person: What version i use
```
tailwind --version
> 3.0.24
```