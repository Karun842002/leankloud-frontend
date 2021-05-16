import { Injectable } from '@angular/core';
import { AxiosInstance } from 'axios';
import { ErrorHandler } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root',
})


export class DataService {
  private axiosClient: AxiosInstance;
  private errorHandler: ErrorHandler;

  // I initialize the ApiClient.
  constructor(errorHandler: ErrorHandler) {
    this.errorHandler = errorHandler;

    // The ApiClient wraps calls to the underlying Axios client.
    this.axiosClient = axios.create({
      timeout: 3000,
    });
  }

  public async get<T>(): Promise<T>{
    var axiosResponse = await this.axiosClient.request<T>({
      method: 'get',
      url: 'https://leankloud-19049.herokuapp.com/todos/',
    });
    return axiosResponse.data;
  }
  public async today<T>(): Promise<T>{
    var axiosResponse = await this.axiosClient.request<T>({
      method: 'get',
      url: 'https://leankloud-19049.herokuapp.com/todos/due?due_date=2021-05-16',
    });
    return axiosResponse.data;
  }
  public async manage<T>(): Promise<T>{
    var axiosResponse = await this.axiosClient.request<T>({
      method: 'get',
      url: 'https://leankloud-19049.herokuapp.com/todos/',
    });
    return axiosResponse.data;
  }
  public async overdue<T>(): Promise<T>{
    var axiosResponse = await this.axiosClient.request<T>({
      method: 'get',
      url: 'https://leankloud-19049.herokuapp.com/todos/overdue',
    });
    return axiosResponse.data;
  }
  public async finished<T>(): Promise<T>{
    var axiosResponse = await this.axiosClient.request<T>({
      method: 'get',
      url: 'https://leankloud-19049.herokuapp.com/todos/finished',
    });
    return axiosResponse.data;
  }
}
