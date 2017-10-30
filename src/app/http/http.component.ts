// Exact copy except import UserService from core
import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-http',
  template: `
    <h2>Heroes of {{results | json}}</h2>
  `,
})
export class MyHttpComponent implements OnInit {
  results: string[];
  // inject HttpClient into your component or service
  constructor(private http: HttpClient) {}
  ngOnInit(): void {}
  sendHttp() {
    // make this http request:
    this.http.get<ItemResponse>('/api/items').retry(3).subscribe(data => {
      this.results = data.results;
    });
    // 请求json数据
    this.http.get<MyJsonData>('/data.json', {observe: 'response'})
      .subscribe(
        resp => {
          console.log(resp.headers.get('X-Custom-Header'));
          console.log(resp.body.someFiled);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('an Error occurred', err.error.message);
          }else {
            console.log(`Backend return code ${err.status},body was: ${err.error}`);
          }
        }
      );
    // 请求非json数据
    this.http.get('/textfile.txt', {responseType: 'text'}).subscribe(data => console.log(data));
    // 发送数据
    const body = {name: 'Brad'};
    this.http.post('/api/developers/add', body).subscribe(data => console.log(data));
    //
    const req = this.http.post('/api/items/add', body);
    // 0 request made
    req.subscribe();
    // 1 request made
    req.subscribe();
    // 配置请求中的其他部分
    this.http.post('/api/items/add', body, {headers: new HttpHeaders().set('Authorization', 'my-auth-token')}).subscribe();
    // 修改url参数
    this.http.post('/api/items/add', body, {
      params: new HttpParams().set('id', '3')
    }).subscribe();
    

  }
}
