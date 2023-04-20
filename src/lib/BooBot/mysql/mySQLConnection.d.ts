import * as mysql from "mysql2";
import * as mysqlp from "mysql2/promise";
export declare const mySQLConnection: mysql.Connection;
export declare const mySQLConnectionPromise: Promise<void | mysqlp.Connection>;
export declare function reconnect(): Promise<void>;
