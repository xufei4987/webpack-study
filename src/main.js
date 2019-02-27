//程序的入口js
//ES6语法
import $ from 'jquery'
import './css/index.css'

$(function(){
    $('li:odd').css('backgroundColor', 'darkcyan')
    $('li:even').css('backgroundColor', 'orange')
})