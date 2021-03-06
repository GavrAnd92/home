import { Component, OnInit } from '@angular/core';
import { News} from './news';


let NEWS = [
  {name: "Розгадана основна причина розвитку людства", description: "Вчені назвали головну причину розвитку сучасної цивілізації. Про це повідомляється на сайті Phys.org. Міжнародна група вчених прийшла до висновку, що головну роль у розвитку людства зіграли племена мисливців-збирачів. Для цього фахівці провели експеримент у громадах сучасних мисливців-збирачів - племенах аета на Філіппінах. Для цього 53 дорослим представникам племен роздали пристрої стеження. Так вчені відстежували взаємодії між членами однієї громади і представників з інших таборів. Розроблена на основі зібраних даних комп'ютерна модель показала, що аета практично щодня контактували з іншими групами. Імовірно, саме обмін досвідом між різними стоянками давніх мисливців-збирачів стало поштовхом до розвитку цивілізації. Так, вчені підрахували, що давньому шаману для створення ефективного лікарського засобу було потрібно від 250 до 500 соціальних взаємодій, в ході яких відбувався обмін досвідом. Раніше повідомлялося, що вчені відкрили правду про створення Землі. Також писалося про те, що був розкритий секрет виникнення складних організмів.", date: "02.03.2020", author: "Вчені"},
  {name: "Вчені відкрили новий вид червоних панд", description: "Вчені з Китайської академії наук в Пекіні заявили про зроблене ними наукове відкриття. Зоологи виявили новий вид червоних чи малих панд, пише журнал Science Advances. На думку вчених, представники даного виду можуть бути найвідомішими екзотичними тваринами в світі. До цього вважалося, що така панда є єдиною в своєму роді. Фахівцями було проведено аналіз ДНК 65-ти диких червоних панд. В результаті вдалося виявити два окремі види цих тварин. Експерти зазначають, що йдеться про китайських (з рудим хутром і смугастими хвостами) і гімалайських (з більш світлими мордами) тварин. Як повідомлялося раніше, панду-альбіноса вперше зняли в дикій природі. Це сталося в заповіднику Веньчуань-Улун в китайській провінції Сичуань. Нагадаємо, що в зоопарку Тайваню панд годували місячними пряниками з нагоди свята середини осені", date: "01.03.2020", author: "Марчок В."},
  {name: "Виявлено новий тип шизофренії", description: "Американські вчені виявили новий підвид шизофренії, повідомляє Medical Xpress. Тоді як в особи при клінічній шизофренії визначною є недостатність мозкової тканини, на відміну від здорового індивіда, нова форма хвороби враховує обсяг сірої речовини як невідмінний від норми мозку стандартного функціонування. До такого висновку дослідники прийшли, провівши аналіз мозку у 300 пацієнтів із згаданим захворюванням. Зазначається, що відтепер лікарі розділятимуть при діагностуванні шизофренії захворювання на 'підтип' і 'патологічний патерн'. Це відкриття дозволить більш якісно підходити до лікування психічних розладів. Раніше повідомлялося, що американським вченим уперше вдалося виявити ген, точно пов'язаний з розвитком шизофренії. Крім того, британські вчені знайшли незвичний спосіб боротьби із шизофренією.", date: "25.02.2020", author: "Вчені"}
];


@Component({
  selector: 'app-newspage',
  templateUrl: './newspage.component.html',
  styleUrls: ['./newspage.component.css']
})
export class NewspageComponent implements OnInit {


  button: boolean = false;
  name: string = "";
  description: string = "";
  date: string = "";
  author: string = "";

  constructor() { }


  newsList: News[] = NEWS;


  show(onenews){
    this.button = true;
    this.name = onenews.name;
    this.description = onenews.description;
    this.date = onenews.date;
    this.author = onenews.author;
  }

  ngOnInit(): void {
  }

}
