import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-product',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.scss']
})
export class TopProductComponent {
  topProduct = [
    {
      product:'Techwind',
      earnings:"$4120",
      progress:'5.5%',
      status:'profit'
    },
    {
      product:'Landrick',
      earnings:"$5648",
      progress:'15.8%',
      status:'loss'
    },
    {
      product:'Hously',
      earnings:"$456",
      progress:'1.3%',
      status:'profit'
    },
    {
      product:'Jobstack',
      earnings:"$546",
      progress:'1.54%',
      status:'loss'
    },
    {
      product:'Giglink',
      earnings:"$124",
      progress:'8.5%',
      status:'loss'
    },
    {
      product:'Upwind',
      earnings:"$1545",
      progress:'6.4%',
      status:'profit'
    },
    {
      product:'Fronter',
      earnings:"$1215",
      progress:'4.8%',
      status:'loss'
    },
    {
      product:'Doctris',
      earnings:"$2321",
      progress:'4.1%',
      status:'profit'
    },
  ]
}
