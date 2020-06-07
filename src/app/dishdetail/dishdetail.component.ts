import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
// import { Dish } from '../shared/dish'
import { DishService } from '../services/dish.service';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Comment } from '../shared/comment';
import { visibility } from '../animations/app.animation';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    visibility(),
    expand(),
    flyInOut()
  ]
})
export class DishdetailComponent implements OnInit {


  errMess: String;
  dishIds: string[];
  prev: string;
  next: string;

  ratingForm: FormGroup;
  comment: Comment;
  // dishcopy: Dish;
  // dish: Dish;
  visibility = 'shown';

  @ViewChild('fform') ratingFormDirective;

  formErrors={
    'author': '',
    'rating': '',
    'comment': ''
  };

  validationMesssages= {
    'author': {
      'required': 'First name is required.',
      'minlength': 'First name must be at least 2 characters long.',
      'maxlength': 'First name must be more than 25 characters long.'
     },
     'comment': {
      'required': 'Comment is required.',
     }
  };

  constructor(private dishService: DishService,
              private route:ActivatedRoute,
              private locationService: Location,
              private fb: FormBuilder,
              @Inject('BaseURL') public BaseURL) {
                this.createForm();
              }

  ngOnInit() {
    // this.dishService.getDishIds()
    //   .subscribe(dishIds => this.dishIds = dishIds);
    // this.route.params.pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishService.getDish(params['id']); }))
    //   .subscribe(dish => { this.dish = dish; this.dishcopy = dish; this.setPrevNext(dish.id); this.visibility = 'shown'; },
    //     errmess => this.errMess = <any>errmess);
  }

    createForm(){
      this.ratingForm=this.fb.group({
        author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
        rating: 5,
        comment: ['', Validators.required]
      });

      this.ratingForm.valueChanges.subscribe(data => this.onValueChanged(data));

      this.onValueChanged();  //reset form validation messages
    }

    onValueChanged(data?:any){
      if(!this.ratingForm){ return; }
      const form=this.ratingForm;
      for(const field in this.formErrors){
        if(this.formErrors.hasOwnProperty(field)){
          // clear previous form errors (if any)
          this.formErrors[field]='';
          const control=form.get(field);
          if(control && control.dirty && !control.valid){
            const messages=this.validationMesssages[field];
            for (const key in control.errors){
              if(control.errors.hasOwnProperty(key)){
                this.formErrors[field] += messages[key] + ' ';
              }
            }
          }
        }
      }
    }

    onSubmit(){
      // this.comment = this.ratingForm.value;
      // this.comment.date=new Date().toISOString();
      // console.log(this.comment);
      // this.dishcopy.comments.push(this.comment);
      // this.dishService.putDish(this.dishcopy)
      //     .subscribe(dish => {
      //       this.dish=dish; this.dishcopy=dish;
      //     },
      //     errmess => {this.dish=null; this.dishcopy=null; this.errMess = <any>errmess;});
      // this.ratingFormDirective.resetForm();
      // this.ratingForm.reset({
      //   authname: '',
      //   rating: 5,
      //   comment: ''
      // });
    }

    setPrevNext(dishId: string) {
      const index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

  goBack(): void{
    this.locationService.back();
  }

}
