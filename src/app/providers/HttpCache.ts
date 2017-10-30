
import {HttpRequest, HttpResponse} from "@angular/common/http";

abstract class HttpCache {
  /**
   * return a cached response.if any ,or null if not present
   * @param {HttpRequest<any>} req
   * @returns {HttpResponse<any>}
   */
  abstract get(req: HttpRequest<any>): HttpResponse<any> | null;

  /**
   * adds or updates the response in the cache.
   * @param {HttpRequest<any>} req
   * @param {HttpResponse<any>} resp
   */
  abstract put(req: HttpRequest<any>, resp: HttpResponse<any>): void;
}
