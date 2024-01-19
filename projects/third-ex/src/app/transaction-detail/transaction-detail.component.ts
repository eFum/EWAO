import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {
  transaction: any;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.transactionService.getTransactionDetail(id).subscribe(data => {
        this.transaction = data;
      });
    }
  }
}
