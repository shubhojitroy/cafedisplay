import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DisclaimerDialogComponent } from '../../dialogs/disclaimer-dialog/disclaimer-dialog.component';
import { PrivacypolicyDialogComponent } from '../../dialogs/privacypolicy-dialog/privacypolicy-dialog.component';

@Component({
  selector: 'cd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  copyrightText = 'Copyright 2018 LINK Realty International';

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenAddDisclaimerDialog(): void {
    this.dialog.open(DisclaimerDialogComponent, {
      width: '80%',
      height: '70%'
    });
  }

  onOpenAddPrivacyPolicyDialog(): void {
    this.dialog.open(PrivacypolicyDialogComponent, {
      width: '90%',
      height: '60%'
    });
  }

}
