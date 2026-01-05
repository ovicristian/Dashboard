import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DarkSidebarComponent } from '../../../components/sidebar/dark-sidebar/dark-sidebar.component';
import { TopHeaderComponent } from '../../../components/top-header/top-header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { CoinDataComponent } from '../../../components/coin-data/coin-data.component';
import { RouterLink } from '@angular/router';

declare const TradingView: any;

@Component({
  selector: 'app-index-crypto',
  standalone: true,
  imports: [DarkSidebarComponent,TopHeaderComponent,FooterComponent,CommonModule, CoinDataComponent,RouterLink],
  templateUrl: './index-crypto.component.html',
  styleUrls: ['./index-crypto.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class IndexCryptoComponent {
  activeSidebar:boolean = true

  toggleClass() {
    this.activeSidebar = !this.activeSidebar;
  }
 
  ngOnInit(): void {
    // Initialize TradingView widget
  }

  ngAfterViewInit(){
    new TradingView.widget(
      {
        "width": "100%",
        "height": 550,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "Light",
        "style": "1",
        "locale": "en",
        "toolbar_bg": "#000",
        "enable_publishing": false,
        "withdateranges": true,
        "hide_side_toolbar": false,
        "allow_symbol_change": true,
        "show_popup_button": true,
        "popup_width": "1000",
        "popup_height": "650",
        "container_id": "tradingview_123"
    }
      );
  }

  watchlistData = [
    {
      image:'assets/images/coin/bitcoin.png',
      name:'BTC',
      last:'$34587',
      change:'-$745',
      PreChange:'-2.5%',
      status:'loss'
    },
    {
      image:'assets/images/coin/litecoin.png',
      name:'LTC',
      last:'$216',
      change:'+$.264',
      PreChange:'+.264%',
      status:'profit'
    },
    {
      image:'assets/images/coin/auroracoin.png',
      name:'ARC',
      last:'$452',
      change:'-$1.9',
      PreChange:'-1.9%',
      status:'loss'
    },
    {
      image:'assets/images/coin/coinye.png',
      name:'CNY',
      last:'$154',
      change:'+$1.05',
      PreChange:'+1.05%',
      status:'profit'
    },
    {
      image:'assets/images/coin/ethereum.png',
      name:'ETH',
      last:'$854',
      change:'+$1.705',
      PreChange:'+1.705%',
      status:'profit'
    },
    {
      image:'assets/images/coin/potcoin.png',
      name:'PTC',
      last:'$548',
      change:'-$3.2',
      PreChange:'-3.2%',
      status:'loss'
    },
    {
      image:'assets/images/coin/zcash.png',
      name:'ZCC',
      last:'$965',
      change:'+$1.465',
      PreChange:'+1.465%',
      status:'profit'
    },
    {
      image:'assets/images/coin/primecoin.png',
      name:'XPM',
      last:'$4875',
      change:'-$1.08',
      PreChange:'-1.08%',
      status:'loss'
    },
    {
      image:'assets/images/coin/blocknet.png',
      name:'BLOCK',
      last:'$478',
      change:'+$2.8',
      PreChange:'+2.8%',
      status:'profit'
    },
    {
      image:'assets/images/coin/kucoin.png',
      name:'KCS',
      last:'$545',
      change:'+$1.5',
      PreChange:'+1.5%',
      status:'profit'
    },
  ]

  transections = [
    {
      type:'Buy',
      assets:'BTC',
      date:'13th Sep 2023',
      amount:'$350',
      wallet:'qhut0...hfteh45',
      status:'Progress'
    },
    {
      type:'Sell',
      assets:'BTC',
      date:'19th Nov 2023',
      amount:'1.45 BTC',
      wallet:'qhut0...hfteh45',
      status:'Pending'
    },
    {
      type:'Sell',
      assets:'LTC',
      date:'29th Dec 2023',
      amount:'1.45 LTC',
      wallet:'qhut0...hfteh45',
      status:'Success'
    },
    {
      type:'Buy',
      assets:'ARC',
      date:'13th March 2023',
      amount:'$350',
      wallet:'qhut0...hfteh45',
      status:'Pending'
    },
    {
      type:'Sell',
      assets:'CNY',
      date:'5th May 2023',
      amount:'1.45 CNY',
      wallet:'qhut0...hfteh45',
      status:'Success'
    },
    {
      type:'Buy',
      assets:'ETH',
      date:'19th June 2023',
      amount:'$350',
      wallet:'qhut0...hfteh45',
      status:'Progress'
    },
    {
      type:'Sell',
      assets:'PTC',
      date:'20th June 2023',
      amount:'1.45 ZCC',
      wallet:'qhut0...hfteh45',
      status:'Pending'
    },
    {
      type:'Sell',
      assets:'ZCC',
      date:'31st Aug 2023',
      amount:'1.45 ZCC',
      wallet:'qhut0...hfteh45',
      status:'Success'
    },
    {
      type:'Buy',
      assets:'XPM',
      date:'1st Sep 2023',
      amount:'$350',
      wallet:'qhut0...hfteh45',
      status:'Success'
    },
    {
      type:'Buy',
      assets:'BLOCK',
      date:'13th Sep 2023',
      amount:'$350',
      wallet:'qhut0...hfteh45',
      status:'Progress'
    },
  ]

  orderData = [
    {
      type:'Buy',
      name:'Bitcoin',
      spend:'$ 45,456',
      recieved:'0.00956BTC',
      status:'Success'
    },
    {
      type:'Sell',
      name:'Blocknet',
      spend:'0.00956BTC',
      recieved:'$ 45,456',
      status:'Pending'
    },
    {
      type:'Sell',
      name:'Litecoin',
      spend:'$ 45,456',
      recieved:'0.00956BTC',
      status:'Progress'
    },
    {
      type:'Buy',
      name:'Kucoin',
      spend:'$ 45,456',
      recieved:'0.00956BTC',
      status:'Success'
    },
  ]

  isSent:boolean = false;

  onSentClick(){
    this.isSent = !this.isSent;
  }

  isRequest:boolean = false;

  onRequestClick(){
    this.isRequest = !this.isRequest;
  }

  isActiveTab:number = 1

  onTabClick(index:number){
    this.isActiveTab = index
  }
}
