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
      url: 'http://127.0.0.1:5000/todos/',
    });
    return axiosResponse.data;
  }
}
