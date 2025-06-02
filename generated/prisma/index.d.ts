
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Curriculum
 * 
 */
export type Curriculum = $Result.DefaultSelection<Prisma.$CurriculumPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
/**
 * Model ContactInfoItem
 * 
 */
export type ContactInfoItem = $Result.DefaultSelection<Prisma.$ContactInfoItemPayload>
/**
 * Model AcademicInfo
 * 
 */
export type AcademicInfo = $Result.DefaultSelection<Prisma.$AcademicInfoPayload>
/**
 * Model AcademicInfoItem
 * 
 */
export type AcademicInfoItem = $Result.DefaultSelection<Prisma.$AcademicInfoItemPayload>
/**
 * Model TeachingInfo
 * 
 */
export type TeachingInfo = $Result.DefaultSelection<Prisma.$TeachingInfoPayload>
/**
 * Model TeachingInfoItem
 * 
 */
export type TeachingInfoItem = $Result.DefaultSelection<Prisma.$TeachingInfoItemPayload>
/**
 * Model ExperienceInfo
 * 
 */
export type ExperienceInfo = $Result.DefaultSelection<Prisma.$ExperienceInfoPayload>
/**
 * Model ExperienceInfoItem
 * 
 */
export type ExperienceInfoItem = $Result.DefaultSelection<Prisma.$ExperienceInfoItemPayload>
/**
 * Model InboxMessage
 * 
 */
export type InboxMessage = $Result.DefaultSelection<Prisma.$InboxMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PostCategory: {
  BLOG: 'BLOG',
  ARTIGO: 'ARTIGO'
};

export type PostCategory = (typeof PostCategory)[keyof typeof PostCategory]


export const Role: {
  MEMBRO: 'MEMBRO',
  EDITOR: 'EDITOR',
  CHEFE: 'CHEFE'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type PostCategory = $Enums.PostCategory

export const PostCategory: typeof $Enums.PostCategory

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.curriculum`: Exposes CRUD operations for the **Curriculum** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Curricula
    * const curricula = await prisma.curriculum.findMany()
    * ```
    */
  get curriculum(): Prisma.CurriculumDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfoItem`: Exposes CRUD operations for the **ContactInfoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfoItems
    * const contactInfoItems = await prisma.contactInfoItem.findMany()
    * ```
    */
  get contactInfoItem(): Prisma.ContactInfoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicInfo`: Exposes CRUD operations for the **AcademicInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicInfos
    * const academicInfos = await prisma.academicInfo.findMany()
    * ```
    */
  get academicInfo(): Prisma.AcademicInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.academicInfoItem`: Exposes CRUD operations for the **AcademicInfoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicInfoItems
    * const academicInfoItems = await prisma.academicInfoItem.findMany()
    * ```
    */
  get academicInfoItem(): Prisma.AcademicInfoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingInfo`: Exposes CRUD operations for the **TeachingInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingInfos
    * const teachingInfos = await prisma.teachingInfo.findMany()
    * ```
    */
  get teachingInfo(): Prisma.TeachingInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teachingInfoItem`: Exposes CRUD operations for the **TeachingInfoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeachingInfoItems
    * const teachingInfoItems = await prisma.teachingInfoItem.findMany()
    * ```
    */
  get teachingInfoItem(): Prisma.TeachingInfoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienceInfo`: Exposes CRUD operations for the **ExperienceInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienceInfos
    * const experienceInfos = await prisma.experienceInfo.findMany()
    * ```
    */
  get experienceInfo(): Prisma.ExperienceInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experienceInfoItem`: Exposes CRUD operations for the **ExperienceInfoItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExperienceInfoItems
    * const experienceInfoItems = await prisma.experienceInfoItem.findMany()
    * ```
    */
  get experienceInfoItem(): Prisma.ExperienceInfoItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inboxMessage`: Exposes CRUD operations for the **InboxMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InboxMessages
    * const inboxMessages = await prisma.inboxMessage.findMany()
    * ```
    */
  get inboxMessage(): Prisma.InboxMessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Curriculum: 'Curriculum',
    ContactInfo: 'ContactInfo',
    ContactInfoItem: 'ContactInfoItem',
    AcademicInfo: 'AcademicInfo',
    AcademicInfoItem: 'AcademicInfoItem',
    TeachingInfo: 'TeachingInfo',
    TeachingInfoItem: 'TeachingInfoItem',
    ExperienceInfo: 'ExperienceInfo',
    ExperienceInfoItem: 'ExperienceInfoItem',
    InboxMessage: 'InboxMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "curriculum" | "contactInfo" | "contactInfoItem" | "academicInfo" | "academicInfoItem" | "teachingInfo" | "teachingInfoItem" | "experienceInfo" | "experienceInfoItem" | "inboxMessage"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Curriculum: {
        payload: Prisma.$CurriculumPayload<ExtArgs>
        fields: Prisma.CurriculumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurriculumFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurriculumFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          findFirst: {
            args: Prisma.CurriculumFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurriculumFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          findMany: {
            args: Prisma.CurriculumFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>[]
          }
          create: {
            args: Prisma.CurriculumCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          createMany: {
            args: Prisma.CurriculumCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CurriculumCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>[]
          }
          delete: {
            args: Prisma.CurriculumDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          update: {
            args: Prisma.CurriculumUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          deleteMany: {
            args: Prisma.CurriculumDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurriculumUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CurriculumUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>[]
          }
          upsert: {
            args: Prisma.CurriculumUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurriculumPayload>
          }
          aggregate: {
            args: Prisma.CurriculumAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurriculum>
          }
          groupBy: {
            args: Prisma.CurriculumGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurriculumGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurriculumCountArgs<ExtArgs>
            result: $Utils.Optional<CurriculumCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
          }
        }
      }
      ContactInfoItem: {
        payload: Prisma.$ContactInfoItemPayload<ExtArgs>
        fields: Prisma.ContactInfoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          findMany: {
            args: Prisma.ContactInfoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>[]
          }
          create: {
            args: Prisma.ContactInfoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          createMany: {
            args: Prisma.ContactInfoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          update: {
            args: Prisma.ContactInfoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoItemPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfoItem>
          }
          groupBy: {
            args: Prisma.ContactInfoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoItemCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoItemCountAggregateOutputType> | number
          }
        }
      }
      AcademicInfo: {
        payload: Prisma.$AcademicInfoPayload<ExtArgs>
        fields: Prisma.AcademicInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>
          }
          findFirst: {
            args: Prisma.AcademicInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>
          }
          findMany: {
            args: Prisma.AcademicInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>[]
          }
          create: {
            args: Prisma.AcademicInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>
          }
          createMany: {
            args: Prisma.AcademicInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>[]
          }
          delete: {
            args: Prisma.AcademicInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>
          }
          update: {
            args: Prisma.AcademicInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>
          }
          deleteMany: {
            args: Prisma.AcademicInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademicInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>[]
          }
          upsert: {
            args: Prisma.AcademicInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoPayload>
          }
          aggregate: {
            args: Prisma.AcademicInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicInfo>
          }
          groupBy: {
            args: Prisma.AcademicInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicInfoCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicInfoCountAggregateOutputType> | number
          }
        }
      }
      AcademicInfoItem: {
        payload: Prisma.$AcademicInfoItemPayload<ExtArgs>
        fields: Prisma.AcademicInfoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicInfoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicInfoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>
          }
          findFirst: {
            args: Prisma.AcademicInfoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicInfoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>
          }
          findMany: {
            args: Prisma.AcademicInfoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>[]
          }
          create: {
            args: Prisma.AcademicInfoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>
          }
          createMany: {
            args: Prisma.AcademicInfoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicInfoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>[]
          }
          delete: {
            args: Prisma.AcademicInfoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>
          }
          update: {
            args: Prisma.AcademicInfoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>
          }
          deleteMany: {
            args: Prisma.AcademicInfoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicInfoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademicInfoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>[]
          }
          upsert: {
            args: Prisma.AcademicInfoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicInfoItemPayload>
          }
          aggregate: {
            args: Prisma.AcademicInfoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicInfoItem>
          }
          groupBy: {
            args: Prisma.AcademicInfoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicInfoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicInfoItemCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicInfoItemCountAggregateOutputType> | number
          }
        }
      }
      TeachingInfo: {
        payload: Prisma.$TeachingInfoPayload<ExtArgs>
        fields: Prisma.TeachingInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>
          }
          findFirst: {
            args: Prisma.TeachingInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>
          }
          findMany: {
            args: Prisma.TeachingInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>[]
          }
          create: {
            args: Prisma.TeachingInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>
          }
          createMany: {
            args: Prisma.TeachingInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>[]
          }
          delete: {
            args: Prisma.TeachingInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>
          }
          update: {
            args: Prisma.TeachingInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>
          }
          deleteMany: {
            args: Prisma.TeachingInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>[]
          }
          upsert: {
            args: Prisma.TeachingInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoPayload>
          }
          aggregate: {
            args: Prisma.TeachingInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingInfo>
          }
          groupBy: {
            args: Prisma.TeachingInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingInfoCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingInfoCountAggregateOutputType> | number
          }
        }
      }
      TeachingInfoItem: {
        payload: Prisma.$TeachingInfoItemPayload<ExtArgs>
        fields: Prisma.TeachingInfoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeachingInfoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeachingInfoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>
          }
          findFirst: {
            args: Prisma.TeachingInfoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeachingInfoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>
          }
          findMany: {
            args: Prisma.TeachingInfoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>[]
          }
          create: {
            args: Prisma.TeachingInfoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>
          }
          createMany: {
            args: Prisma.TeachingInfoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeachingInfoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>[]
          }
          delete: {
            args: Prisma.TeachingInfoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>
          }
          update: {
            args: Prisma.TeachingInfoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>
          }
          deleteMany: {
            args: Prisma.TeachingInfoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeachingInfoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeachingInfoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>[]
          }
          upsert: {
            args: Prisma.TeachingInfoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeachingInfoItemPayload>
          }
          aggregate: {
            args: Prisma.TeachingInfoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeachingInfoItem>
          }
          groupBy: {
            args: Prisma.TeachingInfoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeachingInfoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeachingInfoItemCountArgs<ExtArgs>
            result: $Utils.Optional<TeachingInfoItemCountAggregateOutputType> | number
          }
        }
      }
      ExperienceInfo: {
        payload: Prisma.$ExperienceInfoPayload<ExtArgs>
        fields: Prisma.ExperienceInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>
          }
          findFirst: {
            args: Prisma.ExperienceInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>
          }
          findMany: {
            args: Prisma.ExperienceInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>[]
          }
          create: {
            args: Prisma.ExperienceInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>
          }
          createMany: {
            args: Prisma.ExperienceInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>[]
          }
          delete: {
            args: Prisma.ExperienceInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>
          }
          update: {
            args: Prisma.ExperienceInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>
          }
          deleteMany: {
            args: Prisma.ExperienceInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>[]
          }
          upsert: {
            args: Prisma.ExperienceInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoPayload>
          }
          aggregate: {
            args: Prisma.ExperienceInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienceInfo>
          }
          groupBy: {
            args: Prisma.ExperienceInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceInfoCountAggregateOutputType> | number
          }
        }
      }
      ExperienceInfoItem: {
        payload: Prisma.$ExperienceInfoItemPayload<ExtArgs>
        fields: Prisma.ExperienceInfoItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceInfoItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceInfoItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>
          }
          findFirst: {
            args: Prisma.ExperienceInfoItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceInfoItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>
          }
          findMany: {
            args: Prisma.ExperienceInfoItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>[]
          }
          create: {
            args: Prisma.ExperienceInfoItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>
          }
          createMany: {
            args: Prisma.ExperienceInfoItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceInfoItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>[]
          }
          delete: {
            args: Prisma.ExperienceInfoItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>
          }
          update: {
            args: Prisma.ExperienceInfoItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>
          }
          deleteMany: {
            args: Prisma.ExperienceInfoItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceInfoItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceInfoItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>[]
          }
          upsert: {
            args: Prisma.ExperienceInfoItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperienceInfoItemPayload>
          }
          aggregate: {
            args: Prisma.ExperienceInfoItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperienceInfoItem>
          }
          groupBy: {
            args: Prisma.ExperienceInfoItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceInfoItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceInfoItemCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceInfoItemCountAggregateOutputType> | number
          }
        }
      }
      InboxMessage: {
        payload: Prisma.$InboxMessagePayload<ExtArgs>
        fields: Prisma.InboxMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InboxMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InboxMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>
          }
          findFirst: {
            args: Prisma.InboxMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InboxMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>
          }
          findMany: {
            args: Prisma.InboxMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>[]
          }
          create: {
            args: Prisma.InboxMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>
          }
          createMany: {
            args: Prisma.InboxMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InboxMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>[]
          }
          delete: {
            args: Prisma.InboxMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>
          }
          update: {
            args: Prisma.InboxMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>
          }
          deleteMany: {
            args: Prisma.InboxMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InboxMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InboxMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>[]
          }
          upsert: {
            args: Prisma.InboxMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InboxMessagePayload>
          }
          aggregate: {
            args: Prisma.InboxMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInboxMessage>
          }
          groupBy: {
            args: Prisma.InboxMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<InboxMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.InboxMessageCountArgs<ExtArgs>
            result: $Utils.Optional<InboxMessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    curriculum?: CurriculumOmit
    contactInfo?: ContactInfoOmit
    contactInfoItem?: ContactInfoItemOmit
    academicInfo?: AcademicInfoOmit
    academicInfoItem?: AcademicInfoItemOmit
    teachingInfo?: TeachingInfoOmit
    teachingInfoItem?: TeachingInfoItemOmit
    experienceInfo?: ExperienceInfoOmit
    experienceInfoItem?: ExperienceInfoItemOmit
    inboxMessage?: InboxMessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type ContactInfoCountOutputType
   */

  export type ContactInfoCountOutputType = {
    items: number
  }

  export type ContactInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ContactInfoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ContactInfoCountOutputType without action
   */
  export type ContactInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoCountOutputType
     */
    select?: ContactInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactInfoCountOutputType without action
   */
  export type ContactInfoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoItemWhereInput
  }


  /**
   * Count Type AcademicInfoCountOutputType
   */

  export type AcademicInfoCountOutputType = {
    items: number
  }

  export type AcademicInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | AcademicInfoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * AcademicInfoCountOutputType without action
   */
  export type AcademicInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoCountOutputType
     */
    select?: AcademicInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcademicInfoCountOutputType without action
   */
  export type AcademicInfoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicInfoItemWhereInput
  }


  /**
   * Count Type TeachingInfoCountOutputType
   */

  export type TeachingInfoCountOutputType = {
    items: number
  }

  export type TeachingInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TeachingInfoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * TeachingInfoCountOutputType without action
   */
  export type TeachingInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoCountOutputType
     */
    select?: TeachingInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeachingInfoCountOutputType without action
   */
  export type TeachingInfoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingInfoItemWhereInput
  }


  /**
   * Count Type ExperienceInfoCountOutputType
   */

  export type ExperienceInfoCountOutputType = {
    items: number
  }

  export type ExperienceInfoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ExperienceInfoCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * ExperienceInfoCountOutputType without action
   */
  export type ExperienceInfoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoCountOutputType
     */
    select?: ExperienceInfoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExperienceInfoCountOutputType without action
   */
  export type ExperienceInfoCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceInfoItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    profileImage: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    role: $Enums.Role | null
    password: string | null
    refreshToken: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    profileImage: string | null
    firstname: string | null
    lastname: string | null
    username: string | null
    role: $Enums.Role | null
    password: string | null
    refreshToken: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    profileImage: number
    firstname: number
    lastname: number
    username: number
    role: number
    password: number
    refreshToken: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    profileImage?: true
    firstname?: true
    lastname?: true
    username?: true
    role?: true
    password?: true
    refreshToken?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    profileImage?: true
    firstname?: true
    lastname?: true
    username?: true
    role?: true
    password?: true
    refreshToken?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    profileImage?: true
    firstname?: true
    lastname?: true
    username?: true
    role?: true
    password?: true
    refreshToken?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    profileImage: string | null
    firstname: string
    lastname: string
    username: string
    role: $Enums.Role
    password: string
    refreshToken: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileImage?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileImage?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileImage?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    profileImage?: boolean
    firstname?: boolean
    lastname?: boolean
    username?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileImage" | "firstname" | "lastname" | "username" | "role" | "password" | "refreshToken", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      profileImage: string | null
      firstname: string
      lastname: string
      username: string
      role: $Enums.Role
      password: string
      refreshToken: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    category: $Enums.PostCategory | null
    authorId: number | null
    title: string | null
    text: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    category: $Enums.PostCategory | null
    authorId: number | null
    title: string | null
    text: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    category: number
    authorId: number
    title: number
    text: number
    image: number
    references: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    category?: true
    authorId?: true
    title?: true
    text?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    category?: true
    authorId?: true
    title?: true
    text?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    category?: true
    authorId?: true
    title?: true
    text?: true
    image?: true
    references?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    category: $Enums.PostCategory
    authorId: number
    title: string
    text: string
    image: string
    references: string[]
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    authorId?: boolean
    title?: boolean
    text?: boolean
    image?: boolean
    references?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    authorId?: boolean
    title?: boolean
    text?: boolean
    image?: boolean
    references?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    authorId?: boolean
    title?: boolean
    text?: boolean
    image?: boolean
    references?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    category?: boolean
    authorId?: boolean
    title?: boolean
    text?: boolean
    image?: boolean
    references?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "authorId" | "title" | "text" | "image" | "references" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category: $Enums.PostCategory
      authorId: number
      title: string
      text: string
      image: string
      references: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly category: FieldRef<"Post", 'PostCategory'>
    readonly authorId: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly text: FieldRef<"Post", 'String'>
    readonly image: FieldRef<"Post", 'String'>
    readonly references: FieldRef<"Post", 'String[]'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Curriculum
   */

  export type AggregateCurriculum = {
    _count: CurriculumCountAggregateOutputType | null
    _avg: CurriculumAvgAggregateOutputType | null
    _sum: CurriculumSumAggregateOutputType | null
    _min: CurriculumMinAggregateOutputType | null
    _max: CurriculumMaxAggregateOutputType | null
  }

  export type CurriculumAvgAggregateOutputType = {
    id: number | null
    contactInfoId: number | null
    academicInfoId: number | null
    teachingInfoId: number | null
    experienceInfoId: number | null
  }

  export type CurriculumSumAggregateOutputType = {
    id: number | null
    contactInfoId: number | null
    academicInfoId: number | null
    teachingInfoId: number | null
    experienceInfoId: number | null
  }

  export type CurriculumMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    jobTitle: string | null
    credential: string | null
    profileImage: string | null
    contactInfoId: number | null
    academicInfoId: number | null
    teachingInfoId: number | null
    experienceInfoId: number | null
    singleton: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurriculumMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    jobTitle: string | null
    credential: string | null
    profileImage: string | null
    contactInfoId: number | null
    academicInfoId: number | null
    teachingInfoId: number | null
    experienceInfoId: number | null
    singleton: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CurriculumCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    jobTitle: number
    credential: number
    profileImage: number
    contactInfoId: number
    academicInfoId: number
    teachingInfoId: number
    experienceInfoId: number
    singleton: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CurriculumAvgAggregateInputType = {
    id?: true
    contactInfoId?: true
    academicInfoId?: true
    teachingInfoId?: true
    experienceInfoId?: true
  }

  export type CurriculumSumAggregateInputType = {
    id?: true
    contactInfoId?: true
    academicInfoId?: true
    teachingInfoId?: true
    experienceInfoId?: true
  }

  export type CurriculumMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    jobTitle?: true
    credential?: true
    profileImage?: true
    contactInfoId?: true
    academicInfoId?: true
    teachingInfoId?: true
    experienceInfoId?: true
    singleton?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurriculumMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    jobTitle?: true
    credential?: true
    profileImage?: true
    contactInfoId?: true
    academicInfoId?: true
    teachingInfoId?: true
    experienceInfoId?: true
    singleton?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CurriculumCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    jobTitle?: true
    credential?: true
    profileImage?: true
    contactInfoId?: true
    academicInfoId?: true
    teachingInfoId?: true
    experienceInfoId?: true
    singleton?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CurriculumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curriculum to aggregate.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Curricula
    **/
    _count?: true | CurriculumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurriculumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurriculumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurriculumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurriculumMaxAggregateInputType
  }

  export type GetCurriculumAggregateType<T extends CurriculumAggregateArgs> = {
        [P in keyof T & keyof AggregateCurriculum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurriculum[P]>
      : GetScalarType<T[P], AggregateCurriculum[P]>
  }




  export type CurriculumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurriculumWhereInput
    orderBy?: CurriculumOrderByWithAggregationInput | CurriculumOrderByWithAggregationInput[]
    by: CurriculumScalarFieldEnum[] | CurriculumScalarFieldEnum
    having?: CurriculumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurriculumCountAggregateInputType | true
    _avg?: CurriculumAvgAggregateInputType
    _sum?: CurriculumSumAggregateInputType
    _min?: CurriculumMinAggregateInputType
    _max?: CurriculumMaxAggregateInputType
  }

  export type CurriculumGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    contactInfoId: number | null
    academicInfoId: number | null
    teachingInfoId: number | null
    experienceInfoId: number | null
    singleton: boolean
    createdAt: Date
    updatedAt: Date
    _count: CurriculumCountAggregateOutputType | null
    _avg: CurriculumAvgAggregateOutputType | null
    _sum: CurriculumSumAggregateOutputType | null
    _min: CurriculumMinAggregateOutputType | null
    _max: CurriculumMaxAggregateOutputType | null
  }

  type GetCurriculumGroupByPayload<T extends CurriculumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurriculumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurriculumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurriculumGroupByOutputType[P]>
            : GetScalarType<T[P], CurriculumGroupByOutputType[P]>
        }
      >
    >


  export type CurriculumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    jobTitle?: boolean
    credential?: boolean
    profileImage?: boolean
    contactInfoId?: boolean
    academicInfoId?: boolean
    teachingInfoId?: boolean
    experienceInfoId?: boolean
    singleton?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactInfo?: boolean | Curriculum$contactInfoArgs<ExtArgs>
    academicInfo?: boolean | Curriculum$academicInfoArgs<ExtArgs>
    teachingInfo?: boolean | Curriculum$teachingInfoArgs<ExtArgs>
    experienceInfo?: boolean | Curriculum$experienceInfoArgs<ExtArgs>
  }, ExtArgs["result"]["curriculum"]>

  export type CurriculumSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    jobTitle?: boolean
    credential?: boolean
    profileImage?: boolean
    contactInfoId?: boolean
    academicInfoId?: boolean
    teachingInfoId?: boolean
    experienceInfoId?: boolean
    singleton?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactInfo?: boolean | Curriculum$contactInfoArgs<ExtArgs>
    academicInfo?: boolean | Curriculum$academicInfoArgs<ExtArgs>
    teachingInfo?: boolean | Curriculum$teachingInfoArgs<ExtArgs>
    experienceInfo?: boolean | Curriculum$experienceInfoArgs<ExtArgs>
  }, ExtArgs["result"]["curriculum"]>

  export type CurriculumSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    jobTitle?: boolean
    credential?: boolean
    profileImage?: boolean
    contactInfoId?: boolean
    academicInfoId?: boolean
    teachingInfoId?: boolean
    experienceInfoId?: boolean
    singleton?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    contactInfo?: boolean | Curriculum$contactInfoArgs<ExtArgs>
    academicInfo?: boolean | Curriculum$academicInfoArgs<ExtArgs>
    teachingInfo?: boolean | Curriculum$teachingInfoArgs<ExtArgs>
    experienceInfo?: boolean | Curriculum$experienceInfoArgs<ExtArgs>
  }, ExtArgs["result"]["curriculum"]>

  export type CurriculumSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    jobTitle?: boolean
    credential?: boolean
    profileImage?: boolean
    contactInfoId?: boolean
    academicInfoId?: boolean
    teachingInfoId?: boolean
    experienceInfoId?: boolean
    singleton?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CurriculumOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "jobTitle" | "credential" | "profileImage" | "contactInfoId" | "academicInfoId" | "teachingInfoId" | "experienceInfoId" | "singleton" | "createdAt" | "updatedAt", ExtArgs["result"]["curriculum"]>
  export type CurriculumInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactInfo?: boolean | Curriculum$contactInfoArgs<ExtArgs>
    academicInfo?: boolean | Curriculum$academicInfoArgs<ExtArgs>
    teachingInfo?: boolean | Curriculum$teachingInfoArgs<ExtArgs>
    experienceInfo?: boolean | Curriculum$experienceInfoArgs<ExtArgs>
  }
  export type CurriculumIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactInfo?: boolean | Curriculum$contactInfoArgs<ExtArgs>
    academicInfo?: boolean | Curriculum$academicInfoArgs<ExtArgs>
    teachingInfo?: boolean | Curriculum$teachingInfoArgs<ExtArgs>
    experienceInfo?: boolean | Curriculum$experienceInfoArgs<ExtArgs>
  }
  export type CurriculumIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactInfo?: boolean | Curriculum$contactInfoArgs<ExtArgs>
    academicInfo?: boolean | Curriculum$academicInfoArgs<ExtArgs>
    teachingInfo?: boolean | Curriculum$teachingInfoArgs<ExtArgs>
    experienceInfo?: boolean | Curriculum$experienceInfoArgs<ExtArgs>
  }

  export type $CurriculumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Curriculum"
    objects: {
      contactInfo: Prisma.$ContactInfoPayload<ExtArgs> | null
      academicInfo: Prisma.$AcademicInfoPayload<ExtArgs> | null
      teachingInfo: Prisma.$TeachingInfoPayload<ExtArgs> | null
      experienceInfo: Prisma.$ExperienceInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      jobTitle: string
      credential: string
      profileImage: string
      contactInfoId: number | null
      academicInfoId: number | null
      teachingInfoId: number | null
      experienceInfoId: number | null
      singleton: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["curriculum"]>
    composites: {}
  }

  type CurriculumGetPayload<S extends boolean | null | undefined | CurriculumDefaultArgs> = $Result.GetResult<Prisma.$CurriculumPayload, S>

  type CurriculumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurriculumFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurriculumCountAggregateInputType | true
    }

  export interface CurriculumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Curriculum'], meta: { name: 'Curriculum' } }
    /**
     * Find zero or one Curriculum that matches the filter.
     * @param {CurriculumFindUniqueArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurriculumFindUniqueArgs>(args: SelectSubset<T, CurriculumFindUniqueArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Curriculum that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurriculumFindUniqueOrThrowArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurriculumFindUniqueOrThrowArgs>(args: SelectSubset<T, CurriculumFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curriculum that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumFindFirstArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurriculumFindFirstArgs>(args?: SelectSubset<T, CurriculumFindFirstArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Curriculum that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumFindFirstOrThrowArgs} args - Arguments to find a Curriculum
     * @example
     * // Get one Curriculum
     * const curriculum = await prisma.curriculum.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurriculumFindFirstOrThrowArgs>(args?: SelectSubset<T, CurriculumFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Curricula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Curricula
     * const curricula = await prisma.curriculum.findMany()
     * 
     * // Get first 10 Curricula
     * const curricula = await prisma.curriculum.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurriculumFindManyArgs>(args?: SelectSubset<T, CurriculumFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Curriculum.
     * @param {CurriculumCreateArgs} args - Arguments to create a Curriculum.
     * @example
     * // Create one Curriculum
     * const Curriculum = await prisma.curriculum.create({
     *   data: {
     *     // ... data to create a Curriculum
     *   }
     * })
     * 
     */
    create<T extends CurriculumCreateArgs>(args: SelectSubset<T, CurriculumCreateArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Curricula.
     * @param {CurriculumCreateManyArgs} args - Arguments to create many Curricula.
     * @example
     * // Create many Curricula
     * const curriculum = await prisma.curriculum.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurriculumCreateManyArgs>(args?: SelectSubset<T, CurriculumCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Curricula and returns the data saved in the database.
     * @param {CurriculumCreateManyAndReturnArgs} args - Arguments to create many Curricula.
     * @example
     * // Create many Curricula
     * const curriculum = await prisma.curriculum.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Curricula and only return the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CurriculumCreateManyAndReturnArgs>(args?: SelectSubset<T, CurriculumCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Curriculum.
     * @param {CurriculumDeleteArgs} args - Arguments to delete one Curriculum.
     * @example
     * // Delete one Curriculum
     * const Curriculum = await prisma.curriculum.delete({
     *   where: {
     *     // ... filter to delete one Curriculum
     *   }
     * })
     * 
     */
    delete<T extends CurriculumDeleteArgs>(args: SelectSubset<T, CurriculumDeleteArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Curriculum.
     * @param {CurriculumUpdateArgs} args - Arguments to update one Curriculum.
     * @example
     * // Update one Curriculum
     * const curriculum = await prisma.curriculum.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurriculumUpdateArgs>(args: SelectSubset<T, CurriculumUpdateArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Curricula.
     * @param {CurriculumDeleteManyArgs} args - Arguments to filter Curricula to delete.
     * @example
     * // Delete a few Curricula
     * const { count } = await prisma.curriculum.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurriculumDeleteManyArgs>(args?: SelectSubset<T, CurriculumDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Curricula
     * const curriculum = await prisma.curriculum.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurriculumUpdateManyArgs>(args: SelectSubset<T, CurriculumUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Curricula and returns the data updated in the database.
     * @param {CurriculumUpdateManyAndReturnArgs} args - Arguments to update many Curricula.
     * @example
     * // Update many Curricula
     * const curriculum = await prisma.curriculum.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Curricula and only return the `id`
     * const curriculumWithIdOnly = await prisma.curriculum.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CurriculumUpdateManyAndReturnArgs>(args: SelectSubset<T, CurriculumUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Curriculum.
     * @param {CurriculumUpsertArgs} args - Arguments to update or create a Curriculum.
     * @example
     * // Update or create a Curriculum
     * const curriculum = await prisma.curriculum.upsert({
     *   create: {
     *     // ... data to create a Curriculum
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Curriculum we want to update
     *   }
     * })
     */
    upsert<T extends CurriculumUpsertArgs>(args: SelectSubset<T, CurriculumUpsertArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Curricula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumCountArgs} args - Arguments to filter Curricula to count.
     * @example
     * // Count the number of Curricula
     * const count = await prisma.curriculum.count({
     *   where: {
     *     // ... the filter for the Curricula we want to count
     *   }
     * })
    **/
    count<T extends CurriculumCountArgs>(
      args?: Subset<T, CurriculumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurriculumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Curriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CurriculumAggregateArgs>(args: Subset<T, CurriculumAggregateArgs>): Prisma.PrismaPromise<GetCurriculumAggregateType<T>>

    /**
     * Group by Curriculum.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurriculumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CurriculumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurriculumGroupByArgs['orderBy'] }
        : { orderBy?: CurriculumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CurriculumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurriculumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Curriculum model
   */
  readonly fields: CurriculumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Curriculum.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurriculumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactInfo<T extends Curriculum$contactInfoArgs<ExtArgs> = {}>(args?: Subset<T, Curriculum$contactInfoArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    academicInfo<T extends Curriculum$academicInfoArgs<ExtArgs> = {}>(args?: Subset<T, Curriculum$academicInfoArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teachingInfo<T extends Curriculum$teachingInfoArgs<ExtArgs> = {}>(args?: Subset<T, Curriculum$teachingInfoArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    experienceInfo<T extends Curriculum$experienceInfoArgs<ExtArgs> = {}>(args?: Subset<T, Curriculum$experienceInfoArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Curriculum model
   */
  interface CurriculumFieldRefs {
    readonly id: FieldRef<"Curriculum", 'Int'>
    readonly firstname: FieldRef<"Curriculum", 'String'>
    readonly lastname: FieldRef<"Curriculum", 'String'>
    readonly jobTitle: FieldRef<"Curriculum", 'String'>
    readonly credential: FieldRef<"Curriculum", 'String'>
    readonly profileImage: FieldRef<"Curriculum", 'String'>
    readonly contactInfoId: FieldRef<"Curriculum", 'Int'>
    readonly academicInfoId: FieldRef<"Curriculum", 'Int'>
    readonly teachingInfoId: FieldRef<"Curriculum", 'Int'>
    readonly experienceInfoId: FieldRef<"Curriculum", 'Int'>
    readonly singleton: FieldRef<"Curriculum", 'Boolean'>
    readonly createdAt: FieldRef<"Curriculum", 'DateTime'>
    readonly updatedAt: FieldRef<"Curriculum", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Curriculum findUnique
   */
  export type CurriculumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum findUniqueOrThrow
   */
  export type CurriculumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum findFirst
   */
  export type CurriculumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curricula.
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curricula.
     */
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * Curriculum findFirstOrThrow
   */
  export type CurriculumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curriculum to fetch.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Curricula.
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Curricula.
     */
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * Curriculum findMany
   */
  export type CurriculumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter, which Curricula to fetch.
     */
    where?: CurriculumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Curricula to fetch.
     */
    orderBy?: CurriculumOrderByWithRelationInput | CurriculumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Curricula.
     */
    cursor?: CurriculumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Curricula from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Curricula.
     */
    skip?: number
    distinct?: CurriculumScalarFieldEnum | CurriculumScalarFieldEnum[]
  }

  /**
   * Curriculum create
   */
  export type CurriculumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * The data needed to create a Curriculum.
     */
    data: XOR<CurriculumCreateInput, CurriculumUncheckedCreateInput>
  }

  /**
   * Curriculum createMany
   */
  export type CurriculumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Curricula.
     */
    data: CurriculumCreateManyInput | CurriculumCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Curriculum createManyAndReturn
   */
  export type CurriculumCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * The data used to create many Curricula.
     */
    data: CurriculumCreateManyInput | CurriculumCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curriculum update
   */
  export type CurriculumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * The data needed to update a Curriculum.
     */
    data: XOR<CurriculumUpdateInput, CurriculumUncheckedUpdateInput>
    /**
     * Choose, which Curriculum to update.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum updateMany
   */
  export type CurriculumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Curricula.
     */
    data: XOR<CurriculumUpdateManyMutationInput, CurriculumUncheckedUpdateManyInput>
    /**
     * Filter which Curricula to update
     */
    where?: CurriculumWhereInput
    /**
     * Limit how many Curricula to update.
     */
    limit?: number
  }

  /**
   * Curriculum updateManyAndReturn
   */
  export type CurriculumUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * The data used to update Curricula.
     */
    data: XOR<CurriculumUpdateManyMutationInput, CurriculumUncheckedUpdateManyInput>
    /**
     * Filter which Curricula to update
     */
    where?: CurriculumWhereInput
    /**
     * Limit how many Curricula to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Curriculum upsert
   */
  export type CurriculumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * The filter to search for the Curriculum to update in case it exists.
     */
    where: CurriculumWhereUniqueInput
    /**
     * In case the Curriculum found by the `where` argument doesn't exist, create a new Curriculum with this data.
     */
    create: XOR<CurriculumCreateInput, CurriculumUncheckedCreateInput>
    /**
     * In case the Curriculum was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurriculumUpdateInput, CurriculumUncheckedUpdateInput>
  }

  /**
   * Curriculum delete
   */
  export type CurriculumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    /**
     * Filter which Curriculum to delete.
     */
    where: CurriculumWhereUniqueInput
  }

  /**
   * Curriculum deleteMany
   */
  export type CurriculumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Curricula to delete
     */
    where?: CurriculumWhereInput
    /**
     * Limit how many Curricula to delete.
     */
    limit?: number
  }

  /**
   * Curriculum.contactInfo
   */
  export type Curriculum$contactInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    where?: ContactInfoWhereInput
  }

  /**
   * Curriculum.academicInfo
   */
  export type Curriculum$academicInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    where?: AcademicInfoWhereInput
  }

  /**
   * Curriculum.teachingInfo
   */
  export type Curriculum$teachingInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    where?: TeachingInfoWhereInput
  }

  /**
   * Curriculum.experienceInfo
   */
  export type Curriculum$experienceInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    where?: ExperienceInfoWhereInput
  }

  /**
   * Curriculum without action
   */
  export type CurriculumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type ContactInfoSumAggregateOutputType = {
    id: number | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    title: number
    singleton: number
    _all: number
  }


  export type ContactInfoAvgAggregateInputType = {
    id?: true
  }

  export type ContactInfoSumAggregateInputType = {
    id?: true
  }

  export type ContactInfoMinAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _avg?: ContactInfoAvgAggregateInputType
    _sum?: ContactInfoSumAggregateInputType
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: number
    title: string
    singleton: boolean
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
    items?: boolean | ContactInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | ContactInfo$curriculumArgs<ExtArgs>
    _count?: boolean | ContactInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    title?: boolean
    singleton?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "singleton", ExtArgs["result"]["contactInfo"]>
  export type ContactInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ContactInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | ContactInfo$curriculumArgs<ExtArgs>
    _count?: boolean | ContactInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ContactInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {
      items: Prisma.$ContactInfoItemPayload<ExtArgs>[]
      curriculum: Prisma.$CurriculumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      singleton: boolean
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ContactInfo$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ContactInfo$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curriculum<T extends ContactInfo$curriculumArgs<ExtArgs> = {}>(args?: Subset<T, ContactInfo$curriculumArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'Int'>
    readonly title: FieldRef<"ContactInfo", 'String'>
    readonly singleton: FieldRef<"ContactInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo.items
   */
  export type ContactInfo$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    where?: ContactInfoItemWhereInput
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    cursor?: ContactInfoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfo.curriculum
   */
  export type ContactInfo$curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    where?: CurriculumWhereInput
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
  }


  /**
   * Model ContactInfoItem
   */

  export type AggregateContactInfoItem = {
    _count: ContactInfoItemCountAggregateOutputType | null
    _avg: ContactInfoItemAvgAggregateOutputType | null
    _sum: ContactInfoItemSumAggregateOutputType | null
    _min: ContactInfoItemMinAggregateOutputType | null
    _max: ContactInfoItemMaxAggregateOutputType | null
  }

  export type ContactInfoItemAvgAggregateOutputType = {
    id: number | null
    contactInfoId: number | null
  }

  export type ContactInfoItemSumAggregateOutputType = {
    id: number | null
    contactInfoId: number | null
  }

  export type ContactInfoItemMinAggregateOutputType = {
    id: number | null
    label: string | null
    link: string | null
    platform: string | null
    contactInfoId: number | null
  }

  export type ContactInfoItemMaxAggregateOutputType = {
    id: number | null
    label: string | null
    link: string | null
    platform: string | null
    contactInfoId: number | null
  }

  export type ContactInfoItemCountAggregateOutputType = {
    id: number
    label: number
    link: number
    platform: number
    contactInfoId: number
    _all: number
  }


  export type ContactInfoItemAvgAggregateInputType = {
    id?: true
    contactInfoId?: true
  }

  export type ContactInfoItemSumAggregateInputType = {
    id?: true
    contactInfoId?: true
  }

  export type ContactInfoItemMinAggregateInputType = {
    id?: true
    label?: true
    link?: true
    platform?: true
    contactInfoId?: true
  }

  export type ContactInfoItemMaxAggregateInputType = {
    id?: true
    label?: true
    link?: true
    platform?: true
    contactInfoId?: true
  }

  export type ContactInfoItemCountAggregateInputType = {
    id?: true
    label?: true
    link?: true
    platform?: true
    contactInfoId?: true
    _all?: true
  }

  export type ContactInfoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfoItem to aggregate.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfoItems
    **/
    _count?: true | ContactInfoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoItemMaxAggregateInputType
  }

  export type GetContactInfoItemAggregateType<T extends ContactInfoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfoItem[P]>
      : GetScalarType<T[P], AggregateContactInfoItem[P]>
  }




  export type ContactInfoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoItemWhereInput
    orderBy?: ContactInfoItemOrderByWithAggregationInput | ContactInfoItemOrderByWithAggregationInput[]
    by: ContactInfoItemScalarFieldEnum[] | ContactInfoItemScalarFieldEnum
    having?: ContactInfoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoItemCountAggregateInputType | true
    _avg?: ContactInfoItemAvgAggregateInputType
    _sum?: ContactInfoItemSumAggregateInputType
    _min?: ContactInfoItemMinAggregateInputType
    _max?: ContactInfoItemMaxAggregateInputType
  }

  export type ContactInfoItemGroupByOutputType = {
    id: number
    label: string
    link: string
    platform: string | null
    contactInfoId: number
    _count: ContactInfoItemCountAggregateOutputType | null
    _avg: ContactInfoItemAvgAggregateOutputType | null
    _sum: ContactInfoItemSumAggregateOutputType | null
    _min: ContactInfoItemMinAggregateOutputType | null
    _max: ContactInfoItemMaxAggregateOutputType | null
  }

  type GetContactInfoItemGroupByPayload<T extends ContactInfoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoItemGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoItemGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    link?: boolean
    platform?: boolean
    contactInfoId?: boolean
    contactInfo?: boolean | ContactInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfoItem"]>

  export type ContactInfoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    link?: boolean
    platform?: boolean
    contactInfoId?: boolean
    contactInfo?: boolean | ContactInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfoItem"]>

  export type ContactInfoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    link?: boolean
    platform?: boolean
    contactInfoId?: boolean
    contactInfo?: boolean | ContactInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfoItem"]>

  export type ContactInfoItemSelectScalar = {
    id?: boolean
    label?: boolean
    link?: boolean
    platform?: boolean
    contactInfoId?: boolean
  }

  export type ContactInfoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label" | "link" | "platform" | "contactInfoId", ExtArgs["result"]["contactInfoItem"]>
  export type ContactInfoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactInfo?: boolean | ContactInfoDefaultArgs<ExtArgs>
  }
  export type ContactInfoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactInfo?: boolean | ContactInfoDefaultArgs<ExtArgs>
  }
  export type ContactInfoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contactInfo?: boolean | ContactInfoDefaultArgs<ExtArgs>
  }

  export type $ContactInfoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfoItem"
    objects: {
      contactInfo: Prisma.$ContactInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
      link: string
      platform: string | null
      contactInfoId: number
    }, ExtArgs["result"]["contactInfoItem"]>
    composites: {}
  }

  type ContactInfoItemGetPayload<S extends boolean | null | undefined | ContactInfoItemDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoItemPayload, S>

  type ContactInfoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoItemCountAggregateInputType | true
    }

  export interface ContactInfoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfoItem'], meta: { name: 'ContactInfoItem' } }
    /**
     * Find zero or one ContactInfoItem that matches the filter.
     * @param {ContactInfoItemFindUniqueArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoItemFindUniqueArgs>(args: SelectSubset<T, ContactInfoItemFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoItemFindUniqueOrThrowArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemFindFirstArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoItemFindFirstArgs>(args?: SelectSubset<T, ContactInfoItemFindFirstArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemFindFirstOrThrowArgs} args - Arguments to find a ContactInfoItem
     * @example
     * // Get one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfoItems
     * const contactInfoItems = await prisma.contactInfoItem.findMany()
     * 
     * // Get first 10 ContactInfoItems
     * const contactInfoItems = await prisma.contactInfoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoItemWithIdOnly = await prisma.contactInfoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoItemFindManyArgs>(args?: SelectSubset<T, ContactInfoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfoItem.
     * @param {ContactInfoItemCreateArgs} args - Arguments to create a ContactInfoItem.
     * @example
     * // Create one ContactInfoItem
     * const ContactInfoItem = await prisma.contactInfoItem.create({
     *   data: {
     *     // ... data to create a ContactInfoItem
     *   }
     * })
     * 
     */
    create<T extends ContactInfoItemCreateArgs>(args: SelectSubset<T, ContactInfoItemCreateArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfoItems.
     * @param {ContactInfoItemCreateManyArgs} args - Arguments to create many ContactInfoItems.
     * @example
     * // Create many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoItemCreateManyArgs>(args?: SelectSubset<T, ContactInfoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfoItems and returns the data saved in the database.
     * @param {ContactInfoItemCreateManyAndReturnArgs} args - Arguments to create many ContactInfoItems.
     * @example
     * // Create many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfoItems and only return the `id`
     * const contactInfoItemWithIdOnly = await prisma.contactInfoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfoItem.
     * @param {ContactInfoItemDeleteArgs} args - Arguments to delete one ContactInfoItem.
     * @example
     * // Delete one ContactInfoItem
     * const ContactInfoItem = await prisma.contactInfoItem.delete({
     *   where: {
     *     // ... filter to delete one ContactInfoItem
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoItemDeleteArgs>(args: SelectSubset<T, ContactInfoItemDeleteArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfoItem.
     * @param {ContactInfoItemUpdateArgs} args - Arguments to update one ContactInfoItem.
     * @example
     * // Update one ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoItemUpdateArgs>(args: SelectSubset<T, ContactInfoItemUpdateArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfoItems.
     * @param {ContactInfoItemDeleteManyArgs} args - Arguments to filter ContactInfoItems to delete.
     * @example
     * // Delete a few ContactInfoItems
     * const { count } = await prisma.contactInfoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoItemDeleteManyArgs>(args?: SelectSubset<T, ContactInfoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoItemUpdateManyArgs>(args: SelectSubset<T, ContactInfoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfoItems and returns the data updated in the database.
     * @param {ContactInfoItemUpdateManyAndReturnArgs} args - Arguments to update many ContactInfoItems.
     * @example
     * // Update many ContactInfoItems
     * const contactInfoItem = await prisma.contactInfoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfoItems and only return the `id`
     * const contactInfoItemWithIdOnly = await prisma.contactInfoItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactInfoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfoItem.
     * @param {ContactInfoItemUpsertArgs} args - Arguments to update or create a ContactInfoItem.
     * @example
     * // Update or create a ContactInfoItem
     * const contactInfoItem = await prisma.contactInfoItem.upsert({
     *   create: {
     *     // ... data to create a ContactInfoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfoItem we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoItemUpsertArgs>(args: SelectSubset<T, ContactInfoItemUpsertArgs<ExtArgs>>): Prisma__ContactInfoItemClient<$Result.GetResult<Prisma.$ContactInfoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemCountArgs} args - Arguments to filter ContactInfoItems to count.
     * @example
     * // Count the number of ContactInfoItems
     * const count = await prisma.contactInfoItem.count({
     *   where: {
     *     // ... the filter for the ContactInfoItems we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoItemCountArgs>(
      args?: Subset<T, ContactInfoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactInfoItemAggregateArgs>(args: Subset<T, ContactInfoItemAggregateArgs>): Prisma.PrismaPromise<GetContactInfoItemAggregateType<T>>

    /**
     * Group by ContactInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactInfoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoItemGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactInfoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfoItem model
   */
  readonly fields: ContactInfoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contactInfo<T extends ContactInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactInfoDefaultArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactInfoItem model
   */
  interface ContactInfoItemFieldRefs {
    readonly id: FieldRef<"ContactInfoItem", 'Int'>
    readonly label: FieldRef<"ContactInfoItem", 'String'>
    readonly link: FieldRef<"ContactInfoItem", 'String'>
    readonly platform: FieldRef<"ContactInfoItem", 'String'>
    readonly contactInfoId: FieldRef<"ContactInfoItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfoItem findUnique
   */
  export type ContactInfoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem findUniqueOrThrow
   */
  export type ContactInfoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem findFirst
   */
  export type ContactInfoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfoItems.
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfoItems.
     */
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfoItem findFirstOrThrow
   */
  export type ContactInfoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfoItem to fetch.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfoItems.
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfoItems.
     */
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfoItem findMany
   */
  export type ContactInfoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfoItems to fetch.
     */
    where?: ContactInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfoItems to fetch.
     */
    orderBy?: ContactInfoItemOrderByWithRelationInput | ContactInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfoItems.
     */
    cursor?: ContactInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfoItems.
     */
    skip?: number
    distinct?: ContactInfoItemScalarFieldEnum | ContactInfoItemScalarFieldEnum[]
  }

  /**
   * ContactInfoItem create
   */
  export type ContactInfoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactInfoItem.
     */
    data: XOR<ContactInfoItemCreateInput, ContactInfoItemUncheckedCreateInput>
  }

  /**
   * ContactInfoItem createMany
   */
  export type ContactInfoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfoItems.
     */
    data: ContactInfoItemCreateManyInput | ContactInfoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfoItem createManyAndReturn
   */
  export type ContactInfoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfoItems.
     */
    data: ContactInfoItemCreateManyInput | ContactInfoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactInfoItem update
   */
  export type ContactInfoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactInfoItem.
     */
    data: XOR<ContactInfoItemUpdateInput, ContactInfoItemUncheckedUpdateInput>
    /**
     * Choose, which ContactInfoItem to update.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem updateMany
   */
  export type ContactInfoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfoItems.
     */
    data: XOR<ContactInfoItemUpdateManyMutationInput, ContactInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfoItems to update
     */
    where?: ContactInfoItemWhereInput
    /**
     * Limit how many ContactInfoItems to update.
     */
    limit?: number
  }

  /**
   * ContactInfoItem updateManyAndReturn
   */
  export type ContactInfoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfoItems.
     */
    data: XOR<ContactInfoItemUpdateManyMutationInput, ContactInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfoItems to update
     */
    where?: ContactInfoItemWhereInput
    /**
     * Limit how many ContactInfoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactInfoItem upsert
   */
  export type ContactInfoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactInfoItem to update in case it exists.
     */
    where: ContactInfoItemWhereUniqueInput
    /**
     * In case the ContactInfoItem found by the `where` argument doesn't exist, create a new ContactInfoItem with this data.
     */
    create: XOR<ContactInfoItemCreateInput, ContactInfoItemUncheckedCreateInput>
    /**
     * In case the ContactInfoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoItemUpdateInput, ContactInfoItemUncheckedUpdateInput>
  }

  /**
   * ContactInfoItem delete
   */
  export type ContactInfoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
    /**
     * Filter which ContactInfoItem to delete.
     */
    where: ContactInfoItemWhereUniqueInput
  }

  /**
   * ContactInfoItem deleteMany
   */
  export type ContactInfoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfoItems to delete
     */
    where?: ContactInfoItemWhereInput
    /**
     * Limit how many ContactInfoItems to delete.
     */
    limit?: number
  }

  /**
   * ContactInfoItem without action
   */
  export type ContactInfoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfoItem
     */
    select?: ContactInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfoItem
     */
    omit?: ContactInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoItemInclude<ExtArgs> | null
  }


  /**
   * Model AcademicInfo
   */

  export type AggregateAcademicInfo = {
    _count: AcademicInfoCountAggregateOutputType | null
    _avg: AcademicInfoAvgAggregateOutputType | null
    _sum: AcademicInfoSumAggregateOutputType | null
    _min: AcademicInfoMinAggregateOutputType | null
    _max: AcademicInfoMaxAggregateOutputType | null
  }

  export type AcademicInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type AcademicInfoSumAggregateOutputType = {
    id: number | null
  }

  export type AcademicInfoMinAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type AcademicInfoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type AcademicInfoCountAggregateOutputType = {
    id: number
    title: number
    singleton: number
    _all: number
  }


  export type AcademicInfoAvgAggregateInputType = {
    id?: true
  }

  export type AcademicInfoSumAggregateInputType = {
    id?: true
  }

  export type AcademicInfoMinAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type AcademicInfoMaxAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type AcademicInfoCountAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
    _all?: true
  }

  export type AcademicInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicInfo to aggregate.
     */
    where?: AcademicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfos to fetch.
     */
    orderBy?: AcademicInfoOrderByWithRelationInput | AcademicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicInfos
    **/
    _count?: true | AcademicInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicInfoMaxAggregateInputType
  }

  export type GetAcademicInfoAggregateType<T extends AcademicInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicInfo[P]>
      : GetScalarType<T[P], AggregateAcademicInfo[P]>
  }




  export type AcademicInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicInfoWhereInput
    orderBy?: AcademicInfoOrderByWithAggregationInput | AcademicInfoOrderByWithAggregationInput[]
    by: AcademicInfoScalarFieldEnum[] | AcademicInfoScalarFieldEnum
    having?: AcademicInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicInfoCountAggregateInputType | true
    _avg?: AcademicInfoAvgAggregateInputType
    _sum?: AcademicInfoSumAggregateInputType
    _min?: AcademicInfoMinAggregateInputType
    _max?: AcademicInfoMaxAggregateInputType
  }

  export type AcademicInfoGroupByOutputType = {
    id: number
    title: string
    singleton: boolean
    _count: AcademicInfoCountAggregateOutputType | null
    _avg: AcademicInfoAvgAggregateOutputType | null
    _sum: AcademicInfoSumAggregateOutputType | null
    _min: AcademicInfoMinAggregateOutputType | null
    _max: AcademicInfoMaxAggregateOutputType | null
  }

  type GetAcademicInfoGroupByPayload<T extends AcademicInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicInfoGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicInfoGroupByOutputType[P]>
        }
      >
    >


  export type AcademicInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
    items?: boolean | AcademicInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | AcademicInfo$curriculumArgs<ExtArgs>
    _count?: boolean | AcademicInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicInfo"]>

  export type AcademicInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["academicInfo"]>

  export type AcademicInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["academicInfo"]>

  export type AcademicInfoSelectScalar = {
    id?: boolean
    title?: boolean
    singleton?: boolean
  }

  export type AcademicInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "singleton", ExtArgs["result"]["academicInfo"]>
  export type AcademicInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | AcademicInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | AcademicInfo$curriculumArgs<ExtArgs>
    _count?: boolean | AcademicInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcademicInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcademicInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcademicInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicInfo"
    objects: {
      items: Prisma.$AcademicInfoItemPayload<ExtArgs>[]
      curriculum: Prisma.$CurriculumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      singleton: boolean
    }, ExtArgs["result"]["academicInfo"]>
    composites: {}
  }

  type AcademicInfoGetPayload<S extends boolean | null | undefined | AcademicInfoDefaultArgs> = $Result.GetResult<Prisma.$AcademicInfoPayload, S>

  type AcademicInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicInfoCountAggregateInputType | true
    }

  export interface AcademicInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicInfo'], meta: { name: 'AcademicInfo' } }
    /**
     * Find zero or one AcademicInfo that matches the filter.
     * @param {AcademicInfoFindUniqueArgs} args - Arguments to find a AcademicInfo
     * @example
     * // Get one AcademicInfo
     * const academicInfo = await prisma.academicInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicInfoFindUniqueArgs>(args: SelectSubset<T, AcademicInfoFindUniqueArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicInfoFindUniqueOrThrowArgs} args - Arguments to find a AcademicInfo
     * @example
     * // Get one AcademicInfo
     * const academicInfo = await prisma.academicInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoFindFirstArgs} args - Arguments to find a AcademicInfo
     * @example
     * // Get one AcademicInfo
     * const academicInfo = await prisma.academicInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicInfoFindFirstArgs>(args?: SelectSubset<T, AcademicInfoFindFirstArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoFindFirstOrThrowArgs} args - Arguments to find a AcademicInfo
     * @example
     * // Get one AcademicInfo
     * const academicInfo = await prisma.academicInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicInfos
     * const academicInfos = await prisma.academicInfo.findMany()
     * 
     * // Get first 10 AcademicInfos
     * const academicInfos = await prisma.academicInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicInfoWithIdOnly = await prisma.academicInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicInfoFindManyArgs>(args?: SelectSubset<T, AcademicInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicInfo.
     * @param {AcademicInfoCreateArgs} args - Arguments to create a AcademicInfo.
     * @example
     * // Create one AcademicInfo
     * const AcademicInfo = await prisma.academicInfo.create({
     *   data: {
     *     // ... data to create a AcademicInfo
     *   }
     * })
     * 
     */
    create<T extends AcademicInfoCreateArgs>(args: SelectSubset<T, AcademicInfoCreateArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicInfos.
     * @param {AcademicInfoCreateManyArgs} args - Arguments to create many AcademicInfos.
     * @example
     * // Create many AcademicInfos
     * const academicInfo = await prisma.academicInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicInfoCreateManyArgs>(args?: SelectSubset<T, AcademicInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicInfos and returns the data saved in the database.
     * @param {AcademicInfoCreateManyAndReturnArgs} args - Arguments to create many AcademicInfos.
     * @example
     * // Create many AcademicInfos
     * const academicInfo = await prisma.academicInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicInfos and only return the `id`
     * const academicInfoWithIdOnly = await prisma.academicInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcademicInfo.
     * @param {AcademicInfoDeleteArgs} args - Arguments to delete one AcademicInfo.
     * @example
     * // Delete one AcademicInfo
     * const AcademicInfo = await prisma.academicInfo.delete({
     *   where: {
     *     // ... filter to delete one AcademicInfo
     *   }
     * })
     * 
     */
    delete<T extends AcademicInfoDeleteArgs>(args: SelectSubset<T, AcademicInfoDeleteArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicInfo.
     * @param {AcademicInfoUpdateArgs} args - Arguments to update one AcademicInfo.
     * @example
     * // Update one AcademicInfo
     * const academicInfo = await prisma.academicInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicInfoUpdateArgs>(args: SelectSubset<T, AcademicInfoUpdateArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicInfos.
     * @param {AcademicInfoDeleteManyArgs} args - Arguments to filter AcademicInfos to delete.
     * @example
     * // Delete a few AcademicInfos
     * const { count } = await prisma.academicInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicInfoDeleteManyArgs>(args?: SelectSubset<T, AcademicInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicInfos
     * const academicInfo = await prisma.academicInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicInfoUpdateManyArgs>(args: SelectSubset<T, AcademicInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicInfos and returns the data updated in the database.
     * @param {AcademicInfoUpdateManyAndReturnArgs} args - Arguments to update many AcademicInfos.
     * @example
     * // Update many AcademicInfos
     * const academicInfo = await prisma.academicInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcademicInfos and only return the `id`
     * const academicInfoWithIdOnly = await prisma.academicInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcademicInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademicInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcademicInfo.
     * @param {AcademicInfoUpsertArgs} args - Arguments to update or create a AcademicInfo.
     * @example
     * // Update or create a AcademicInfo
     * const academicInfo = await prisma.academicInfo.upsert({
     *   create: {
     *     // ... data to create a AcademicInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicInfo we want to update
     *   }
     * })
     */
    upsert<T extends AcademicInfoUpsertArgs>(args: SelectSubset<T, AcademicInfoUpsertArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoCountArgs} args - Arguments to filter AcademicInfos to count.
     * @example
     * // Count the number of AcademicInfos
     * const count = await prisma.academicInfo.count({
     *   where: {
     *     // ... the filter for the AcademicInfos we want to count
     *   }
     * })
    **/
    count<T extends AcademicInfoCountArgs>(
      args?: Subset<T, AcademicInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicInfoAggregateArgs>(args: Subset<T, AcademicInfoAggregateArgs>): Prisma.PrismaPromise<GetAcademicInfoAggregateType<T>>

    /**
     * Group by AcademicInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcademicInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicInfoGroupByArgs['orderBy'] }
        : { orderBy?: AcademicInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcademicInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicInfo model
   */
  readonly fields: AcademicInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends AcademicInfo$itemsArgs<ExtArgs> = {}>(args?: Subset<T, AcademicInfo$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curriculum<T extends AcademicInfo$curriculumArgs<ExtArgs> = {}>(args?: Subset<T, AcademicInfo$curriculumArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcademicInfo model
   */
  interface AcademicInfoFieldRefs {
    readonly id: FieldRef<"AcademicInfo", 'Int'>
    readonly title: FieldRef<"AcademicInfo", 'String'>
    readonly singleton: FieldRef<"AcademicInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * AcademicInfo findUnique
   */
  export type AcademicInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfo to fetch.
     */
    where: AcademicInfoWhereUniqueInput
  }

  /**
   * AcademicInfo findUniqueOrThrow
   */
  export type AcademicInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfo to fetch.
     */
    where: AcademicInfoWhereUniqueInput
  }

  /**
   * AcademicInfo findFirst
   */
  export type AcademicInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfo to fetch.
     */
    where?: AcademicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfos to fetch.
     */
    orderBy?: AcademicInfoOrderByWithRelationInput | AcademicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicInfos.
     */
    cursor?: AcademicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicInfos.
     */
    distinct?: AcademicInfoScalarFieldEnum | AcademicInfoScalarFieldEnum[]
  }

  /**
   * AcademicInfo findFirstOrThrow
   */
  export type AcademicInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfo to fetch.
     */
    where?: AcademicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfos to fetch.
     */
    orderBy?: AcademicInfoOrderByWithRelationInput | AcademicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicInfos.
     */
    cursor?: AcademicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicInfos.
     */
    distinct?: AcademicInfoScalarFieldEnum | AcademicInfoScalarFieldEnum[]
  }

  /**
   * AcademicInfo findMany
   */
  export type AcademicInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfos to fetch.
     */
    where?: AcademicInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfos to fetch.
     */
    orderBy?: AcademicInfoOrderByWithRelationInput | AcademicInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicInfos.
     */
    cursor?: AcademicInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfos.
     */
    skip?: number
    distinct?: AcademicInfoScalarFieldEnum | AcademicInfoScalarFieldEnum[]
  }

  /**
   * AcademicInfo create
   */
  export type AcademicInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicInfo.
     */
    data: XOR<AcademicInfoCreateInput, AcademicInfoUncheckedCreateInput>
  }

  /**
   * AcademicInfo createMany
   */
  export type AcademicInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicInfos.
     */
    data: AcademicInfoCreateManyInput | AcademicInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicInfo createManyAndReturn
   */
  export type AcademicInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * The data used to create many AcademicInfos.
     */
    data: AcademicInfoCreateManyInput | AcademicInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicInfo update
   */
  export type AcademicInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicInfo.
     */
    data: XOR<AcademicInfoUpdateInput, AcademicInfoUncheckedUpdateInput>
    /**
     * Choose, which AcademicInfo to update.
     */
    where: AcademicInfoWhereUniqueInput
  }

  /**
   * AcademicInfo updateMany
   */
  export type AcademicInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicInfos.
     */
    data: XOR<AcademicInfoUpdateManyMutationInput, AcademicInfoUncheckedUpdateManyInput>
    /**
     * Filter which AcademicInfos to update
     */
    where?: AcademicInfoWhereInput
    /**
     * Limit how many AcademicInfos to update.
     */
    limit?: number
  }

  /**
   * AcademicInfo updateManyAndReturn
   */
  export type AcademicInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * The data used to update AcademicInfos.
     */
    data: XOR<AcademicInfoUpdateManyMutationInput, AcademicInfoUncheckedUpdateManyInput>
    /**
     * Filter which AcademicInfos to update
     */
    where?: AcademicInfoWhereInput
    /**
     * Limit how many AcademicInfos to update.
     */
    limit?: number
  }

  /**
   * AcademicInfo upsert
   */
  export type AcademicInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicInfo to update in case it exists.
     */
    where: AcademicInfoWhereUniqueInput
    /**
     * In case the AcademicInfo found by the `where` argument doesn't exist, create a new AcademicInfo with this data.
     */
    create: XOR<AcademicInfoCreateInput, AcademicInfoUncheckedCreateInput>
    /**
     * In case the AcademicInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicInfoUpdateInput, AcademicInfoUncheckedUpdateInput>
  }

  /**
   * AcademicInfo delete
   */
  export type AcademicInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
    /**
     * Filter which AcademicInfo to delete.
     */
    where: AcademicInfoWhereUniqueInput
  }

  /**
   * AcademicInfo deleteMany
   */
  export type AcademicInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicInfos to delete
     */
    where?: AcademicInfoWhereInput
    /**
     * Limit how many AcademicInfos to delete.
     */
    limit?: number
  }

  /**
   * AcademicInfo.items
   */
  export type AcademicInfo$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    where?: AcademicInfoItemWhereInput
    orderBy?: AcademicInfoItemOrderByWithRelationInput | AcademicInfoItemOrderByWithRelationInput[]
    cursor?: AcademicInfoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademicInfoItemScalarFieldEnum | AcademicInfoItemScalarFieldEnum[]
  }

  /**
   * AcademicInfo.curriculum
   */
  export type AcademicInfo$curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    where?: CurriculumWhereInput
  }

  /**
   * AcademicInfo without action
   */
  export type AcademicInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfo
     */
    select?: AcademicInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfo
     */
    omit?: AcademicInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoInclude<ExtArgs> | null
  }


  /**
   * Model AcademicInfoItem
   */

  export type AggregateAcademicInfoItem = {
    _count: AcademicInfoItemCountAggregateOutputType | null
    _avg: AcademicInfoItemAvgAggregateOutputType | null
    _sum: AcademicInfoItemSumAggregateOutputType | null
    _min: AcademicInfoItemMinAggregateOutputType | null
    _max: AcademicInfoItemMaxAggregateOutputType | null
  }

  export type AcademicInfoItemAvgAggregateOutputType = {
    id: number | null
    academicInfoId: number | null
  }

  export type AcademicInfoItemSumAggregateOutputType = {
    id: number | null
    academicInfoId: number | null
  }

  export type AcademicInfoItemMinAggregateOutputType = {
    id: number | null
    description: string | null
    academicInfoId: number | null
  }

  export type AcademicInfoItemMaxAggregateOutputType = {
    id: number | null
    description: string | null
    academicInfoId: number | null
  }

  export type AcademicInfoItemCountAggregateOutputType = {
    id: number
    description: number
    academicInfoId: number
    _all: number
  }


  export type AcademicInfoItemAvgAggregateInputType = {
    id?: true
    academicInfoId?: true
  }

  export type AcademicInfoItemSumAggregateInputType = {
    id?: true
    academicInfoId?: true
  }

  export type AcademicInfoItemMinAggregateInputType = {
    id?: true
    description?: true
    academicInfoId?: true
  }

  export type AcademicInfoItemMaxAggregateInputType = {
    id?: true
    description?: true
    academicInfoId?: true
  }

  export type AcademicInfoItemCountAggregateInputType = {
    id?: true
    description?: true
    academicInfoId?: true
    _all?: true
  }

  export type AcademicInfoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicInfoItem to aggregate.
     */
    where?: AcademicInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfoItems to fetch.
     */
    orderBy?: AcademicInfoItemOrderByWithRelationInput | AcademicInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicInfoItems
    **/
    _count?: true | AcademicInfoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcademicInfoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcademicInfoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicInfoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicInfoItemMaxAggregateInputType
  }

  export type GetAcademicInfoItemAggregateType<T extends AcademicInfoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicInfoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicInfoItem[P]>
      : GetScalarType<T[P], AggregateAcademicInfoItem[P]>
  }




  export type AcademicInfoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicInfoItemWhereInput
    orderBy?: AcademicInfoItemOrderByWithAggregationInput | AcademicInfoItemOrderByWithAggregationInput[]
    by: AcademicInfoItemScalarFieldEnum[] | AcademicInfoItemScalarFieldEnum
    having?: AcademicInfoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicInfoItemCountAggregateInputType | true
    _avg?: AcademicInfoItemAvgAggregateInputType
    _sum?: AcademicInfoItemSumAggregateInputType
    _min?: AcademicInfoItemMinAggregateInputType
    _max?: AcademicInfoItemMaxAggregateInputType
  }

  export type AcademicInfoItemGroupByOutputType = {
    id: number
    description: string
    academicInfoId: number
    _count: AcademicInfoItemCountAggregateOutputType | null
    _avg: AcademicInfoItemAvgAggregateOutputType | null
    _sum: AcademicInfoItemSumAggregateOutputType | null
    _min: AcademicInfoItemMinAggregateOutputType | null
    _max: AcademicInfoItemMaxAggregateOutputType | null
  }

  type GetAcademicInfoItemGroupByPayload<T extends AcademicInfoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicInfoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicInfoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicInfoItemGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicInfoItemGroupByOutputType[P]>
        }
      >
    >


  export type AcademicInfoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    academicInfoId?: boolean
    academicInfo?: boolean | AcademicInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicInfoItem"]>

  export type AcademicInfoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    academicInfoId?: boolean
    academicInfo?: boolean | AcademicInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicInfoItem"]>

  export type AcademicInfoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    academicInfoId?: boolean
    academicInfo?: boolean | AcademicInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academicInfoItem"]>

  export type AcademicInfoItemSelectScalar = {
    id?: boolean
    description?: boolean
    academicInfoId?: boolean
  }

  export type AcademicInfoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "academicInfoId", ExtArgs["result"]["academicInfoItem"]>
  export type AcademicInfoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academicInfo?: boolean | AcademicInfoDefaultArgs<ExtArgs>
  }
  export type AcademicInfoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academicInfo?: boolean | AcademicInfoDefaultArgs<ExtArgs>
  }
  export type AcademicInfoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academicInfo?: boolean | AcademicInfoDefaultArgs<ExtArgs>
  }

  export type $AcademicInfoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicInfoItem"
    objects: {
      academicInfo: Prisma.$AcademicInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      academicInfoId: number
    }, ExtArgs["result"]["academicInfoItem"]>
    composites: {}
  }

  type AcademicInfoItemGetPayload<S extends boolean | null | undefined | AcademicInfoItemDefaultArgs> = $Result.GetResult<Prisma.$AcademicInfoItemPayload, S>

  type AcademicInfoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademicInfoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademicInfoItemCountAggregateInputType | true
    }

  export interface AcademicInfoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicInfoItem'], meta: { name: 'AcademicInfoItem' } }
    /**
     * Find zero or one AcademicInfoItem that matches the filter.
     * @param {AcademicInfoItemFindUniqueArgs} args - Arguments to find a AcademicInfoItem
     * @example
     * // Get one AcademicInfoItem
     * const academicInfoItem = await prisma.academicInfoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicInfoItemFindUniqueArgs>(args: SelectSubset<T, AcademicInfoItemFindUniqueArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AcademicInfoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademicInfoItemFindUniqueOrThrowArgs} args - Arguments to find a AcademicInfoItem
     * @example
     * // Get one AcademicInfoItem
     * const academicInfoItem = await prisma.academicInfoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicInfoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicInfoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicInfoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemFindFirstArgs} args - Arguments to find a AcademicInfoItem
     * @example
     * // Get one AcademicInfoItem
     * const academicInfoItem = await prisma.academicInfoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicInfoItemFindFirstArgs>(args?: SelectSubset<T, AcademicInfoItemFindFirstArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AcademicInfoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemFindFirstOrThrowArgs} args - Arguments to find a AcademicInfoItem
     * @example
     * // Get one AcademicInfoItem
     * const academicInfoItem = await prisma.academicInfoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicInfoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicInfoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AcademicInfoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicInfoItems
     * const academicInfoItems = await prisma.academicInfoItem.findMany()
     * 
     * // Get first 10 AcademicInfoItems
     * const academicInfoItems = await prisma.academicInfoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicInfoItemWithIdOnly = await prisma.academicInfoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicInfoItemFindManyArgs>(args?: SelectSubset<T, AcademicInfoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AcademicInfoItem.
     * @param {AcademicInfoItemCreateArgs} args - Arguments to create a AcademicInfoItem.
     * @example
     * // Create one AcademicInfoItem
     * const AcademicInfoItem = await prisma.academicInfoItem.create({
     *   data: {
     *     // ... data to create a AcademicInfoItem
     *   }
     * })
     * 
     */
    create<T extends AcademicInfoItemCreateArgs>(args: SelectSubset<T, AcademicInfoItemCreateArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AcademicInfoItems.
     * @param {AcademicInfoItemCreateManyArgs} args - Arguments to create many AcademicInfoItems.
     * @example
     * // Create many AcademicInfoItems
     * const academicInfoItem = await prisma.academicInfoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicInfoItemCreateManyArgs>(args?: SelectSubset<T, AcademicInfoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicInfoItems and returns the data saved in the database.
     * @param {AcademicInfoItemCreateManyAndReturnArgs} args - Arguments to create many AcademicInfoItems.
     * @example
     * // Create many AcademicInfoItems
     * const academicInfoItem = await prisma.academicInfoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicInfoItems and only return the `id`
     * const academicInfoItemWithIdOnly = await prisma.academicInfoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicInfoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicInfoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AcademicInfoItem.
     * @param {AcademicInfoItemDeleteArgs} args - Arguments to delete one AcademicInfoItem.
     * @example
     * // Delete one AcademicInfoItem
     * const AcademicInfoItem = await prisma.academicInfoItem.delete({
     *   where: {
     *     // ... filter to delete one AcademicInfoItem
     *   }
     * })
     * 
     */
    delete<T extends AcademicInfoItemDeleteArgs>(args: SelectSubset<T, AcademicInfoItemDeleteArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AcademicInfoItem.
     * @param {AcademicInfoItemUpdateArgs} args - Arguments to update one AcademicInfoItem.
     * @example
     * // Update one AcademicInfoItem
     * const academicInfoItem = await prisma.academicInfoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicInfoItemUpdateArgs>(args: SelectSubset<T, AcademicInfoItemUpdateArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AcademicInfoItems.
     * @param {AcademicInfoItemDeleteManyArgs} args - Arguments to filter AcademicInfoItems to delete.
     * @example
     * // Delete a few AcademicInfoItems
     * const { count } = await prisma.academicInfoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicInfoItemDeleteManyArgs>(args?: SelectSubset<T, AcademicInfoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicInfoItems
     * const academicInfoItem = await prisma.academicInfoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicInfoItemUpdateManyArgs>(args: SelectSubset<T, AcademicInfoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicInfoItems and returns the data updated in the database.
     * @param {AcademicInfoItemUpdateManyAndReturnArgs} args - Arguments to update many AcademicInfoItems.
     * @example
     * // Update many AcademicInfoItems
     * const academicInfoItem = await prisma.academicInfoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AcademicInfoItems and only return the `id`
     * const academicInfoItemWithIdOnly = await prisma.academicInfoItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AcademicInfoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademicInfoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AcademicInfoItem.
     * @param {AcademicInfoItemUpsertArgs} args - Arguments to update or create a AcademicInfoItem.
     * @example
     * // Update or create a AcademicInfoItem
     * const academicInfoItem = await prisma.academicInfoItem.upsert({
     *   create: {
     *     // ... data to create a AcademicInfoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicInfoItem we want to update
     *   }
     * })
     */
    upsert<T extends AcademicInfoItemUpsertArgs>(args: SelectSubset<T, AcademicInfoItemUpsertArgs<ExtArgs>>): Prisma__AcademicInfoItemClient<$Result.GetResult<Prisma.$AcademicInfoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AcademicInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemCountArgs} args - Arguments to filter AcademicInfoItems to count.
     * @example
     * // Count the number of AcademicInfoItems
     * const count = await prisma.academicInfoItem.count({
     *   where: {
     *     // ... the filter for the AcademicInfoItems we want to count
     *   }
     * })
    **/
    count<T extends AcademicInfoItemCountArgs>(
      args?: Subset<T, AcademicInfoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicInfoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcademicInfoItemAggregateArgs>(args: Subset<T, AcademicInfoItemAggregateArgs>): Prisma.PrismaPromise<GetAcademicInfoItemAggregateType<T>>

    /**
     * Group by AcademicInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicInfoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcademicInfoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicInfoItemGroupByArgs['orderBy'] }
        : { orderBy?: AcademicInfoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcademicInfoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicInfoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicInfoItem model
   */
  readonly fields: AcademicInfoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicInfoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicInfoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    academicInfo<T extends AcademicInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademicInfoDefaultArgs<ExtArgs>>): Prisma__AcademicInfoClient<$Result.GetResult<Prisma.$AcademicInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AcademicInfoItem model
   */
  interface AcademicInfoItemFieldRefs {
    readonly id: FieldRef<"AcademicInfoItem", 'Int'>
    readonly description: FieldRef<"AcademicInfoItem", 'String'>
    readonly academicInfoId: FieldRef<"AcademicInfoItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AcademicInfoItem findUnique
   */
  export type AcademicInfoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfoItem to fetch.
     */
    where: AcademicInfoItemWhereUniqueInput
  }

  /**
   * AcademicInfoItem findUniqueOrThrow
   */
  export type AcademicInfoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfoItem to fetch.
     */
    where: AcademicInfoItemWhereUniqueInput
  }

  /**
   * AcademicInfoItem findFirst
   */
  export type AcademicInfoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfoItem to fetch.
     */
    where?: AcademicInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfoItems to fetch.
     */
    orderBy?: AcademicInfoItemOrderByWithRelationInput | AcademicInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicInfoItems.
     */
    cursor?: AcademicInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicInfoItems.
     */
    distinct?: AcademicInfoItemScalarFieldEnum | AcademicInfoItemScalarFieldEnum[]
  }

  /**
   * AcademicInfoItem findFirstOrThrow
   */
  export type AcademicInfoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfoItem to fetch.
     */
    where?: AcademicInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfoItems to fetch.
     */
    orderBy?: AcademicInfoItemOrderByWithRelationInput | AcademicInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicInfoItems.
     */
    cursor?: AcademicInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicInfoItems.
     */
    distinct?: AcademicInfoItemScalarFieldEnum | AcademicInfoItemScalarFieldEnum[]
  }

  /**
   * AcademicInfoItem findMany
   */
  export type AcademicInfoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which AcademicInfoItems to fetch.
     */
    where?: AcademicInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicInfoItems to fetch.
     */
    orderBy?: AcademicInfoItemOrderByWithRelationInput | AcademicInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicInfoItems.
     */
    cursor?: AcademicInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicInfoItems.
     */
    skip?: number
    distinct?: AcademicInfoItemScalarFieldEnum | AcademicInfoItemScalarFieldEnum[]
  }

  /**
   * AcademicInfoItem create
   */
  export type AcademicInfoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a AcademicInfoItem.
     */
    data: XOR<AcademicInfoItemCreateInput, AcademicInfoItemUncheckedCreateInput>
  }

  /**
   * AcademicInfoItem createMany
   */
  export type AcademicInfoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicInfoItems.
     */
    data: AcademicInfoItemCreateManyInput | AcademicInfoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicInfoItem createManyAndReturn
   */
  export type AcademicInfoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * The data used to create many AcademicInfoItems.
     */
    data: AcademicInfoItemCreateManyInput | AcademicInfoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcademicInfoItem update
   */
  export type AcademicInfoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a AcademicInfoItem.
     */
    data: XOR<AcademicInfoItemUpdateInput, AcademicInfoItemUncheckedUpdateInput>
    /**
     * Choose, which AcademicInfoItem to update.
     */
    where: AcademicInfoItemWhereUniqueInput
  }

  /**
   * AcademicInfoItem updateMany
   */
  export type AcademicInfoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicInfoItems.
     */
    data: XOR<AcademicInfoItemUpdateManyMutationInput, AcademicInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which AcademicInfoItems to update
     */
    where?: AcademicInfoItemWhereInput
    /**
     * Limit how many AcademicInfoItems to update.
     */
    limit?: number
  }

  /**
   * AcademicInfoItem updateManyAndReturn
   */
  export type AcademicInfoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * The data used to update AcademicInfoItems.
     */
    data: XOR<AcademicInfoItemUpdateManyMutationInput, AcademicInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which AcademicInfoItems to update
     */
    where?: AcademicInfoItemWhereInput
    /**
     * Limit how many AcademicInfoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AcademicInfoItem upsert
   */
  export type AcademicInfoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the AcademicInfoItem to update in case it exists.
     */
    where: AcademicInfoItemWhereUniqueInput
    /**
     * In case the AcademicInfoItem found by the `where` argument doesn't exist, create a new AcademicInfoItem with this data.
     */
    create: XOR<AcademicInfoItemCreateInput, AcademicInfoItemUncheckedCreateInput>
    /**
     * In case the AcademicInfoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicInfoItemUpdateInput, AcademicInfoItemUncheckedUpdateInput>
  }

  /**
   * AcademicInfoItem delete
   */
  export type AcademicInfoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
    /**
     * Filter which AcademicInfoItem to delete.
     */
    where: AcademicInfoItemWhereUniqueInput
  }

  /**
   * AcademicInfoItem deleteMany
   */
  export type AcademicInfoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicInfoItems to delete
     */
    where?: AcademicInfoItemWhereInput
    /**
     * Limit how many AcademicInfoItems to delete.
     */
    limit?: number
  }

  /**
   * AcademicInfoItem without action
   */
  export type AcademicInfoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicInfoItem
     */
    select?: AcademicInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AcademicInfoItem
     */
    omit?: AcademicInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademicInfoItemInclude<ExtArgs> | null
  }


  /**
   * Model TeachingInfo
   */

  export type AggregateTeachingInfo = {
    _count: TeachingInfoCountAggregateOutputType | null
    _avg: TeachingInfoAvgAggregateOutputType | null
    _sum: TeachingInfoSumAggregateOutputType | null
    _min: TeachingInfoMinAggregateOutputType | null
    _max: TeachingInfoMaxAggregateOutputType | null
  }

  export type TeachingInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type TeachingInfoSumAggregateOutputType = {
    id: number | null
  }

  export type TeachingInfoMinAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type TeachingInfoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type TeachingInfoCountAggregateOutputType = {
    id: number
    title: number
    singleton: number
    _all: number
  }


  export type TeachingInfoAvgAggregateInputType = {
    id?: true
  }

  export type TeachingInfoSumAggregateInputType = {
    id?: true
  }

  export type TeachingInfoMinAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type TeachingInfoMaxAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type TeachingInfoCountAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
    _all?: true
  }

  export type TeachingInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingInfo to aggregate.
     */
    where?: TeachingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfos to fetch.
     */
    orderBy?: TeachingInfoOrderByWithRelationInput | TeachingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingInfos
    **/
    _count?: true | TeachingInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeachingInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeachingInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingInfoMaxAggregateInputType
  }

  export type GetTeachingInfoAggregateType<T extends TeachingInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingInfo[P]>
      : GetScalarType<T[P], AggregateTeachingInfo[P]>
  }




  export type TeachingInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingInfoWhereInput
    orderBy?: TeachingInfoOrderByWithAggregationInput | TeachingInfoOrderByWithAggregationInput[]
    by: TeachingInfoScalarFieldEnum[] | TeachingInfoScalarFieldEnum
    having?: TeachingInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingInfoCountAggregateInputType | true
    _avg?: TeachingInfoAvgAggregateInputType
    _sum?: TeachingInfoSumAggregateInputType
    _min?: TeachingInfoMinAggregateInputType
    _max?: TeachingInfoMaxAggregateInputType
  }

  export type TeachingInfoGroupByOutputType = {
    id: number
    title: string
    singleton: boolean
    _count: TeachingInfoCountAggregateOutputType | null
    _avg: TeachingInfoAvgAggregateOutputType | null
    _sum: TeachingInfoSumAggregateOutputType | null
    _min: TeachingInfoMinAggregateOutputType | null
    _max: TeachingInfoMaxAggregateOutputType | null
  }

  type GetTeachingInfoGroupByPayload<T extends TeachingInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingInfoGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingInfoGroupByOutputType[P]>
        }
      >
    >


  export type TeachingInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
    items?: boolean | TeachingInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | TeachingInfo$curriculumArgs<ExtArgs>
    _count?: boolean | TeachingInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingInfo"]>

  export type TeachingInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["teachingInfo"]>

  export type TeachingInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["teachingInfo"]>

  export type TeachingInfoSelectScalar = {
    id?: boolean
    title?: boolean
    singleton?: boolean
  }

  export type TeachingInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "singleton", ExtArgs["result"]["teachingInfo"]>
  export type TeachingInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | TeachingInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | TeachingInfo$curriculumArgs<ExtArgs>
    _count?: boolean | TeachingInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeachingInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeachingInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeachingInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingInfo"
    objects: {
      items: Prisma.$TeachingInfoItemPayload<ExtArgs>[]
      curriculum: Prisma.$CurriculumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      singleton: boolean
    }, ExtArgs["result"]["teachingInfo"]>
    composites: {}
  }

  type TeachingInfoGetPayload<S extends boolean | null | undefined | TeachingInfoDefaultArgs> = $Result.GetResult<Prisma.$TeachingInfoPayload, S>

  type TeachingInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingInfoCountAggregateInputType | true
    }

  export interface TeachingInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingInfo'], meta: { name: 'TeachingInfo' } }
    /**
     * Find zero or one TeachingInfo that matches the filter.
     * @param {TeachingInfoFindUniqueArgs} args - Arguments to find a TeachingInfo
     * @example
     * // Get one TeachingInfo
     * const teachingInfo = await prisma.teachingInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingInfoFindUniqueArgs>(args: SelectSubset<T, TeachingInfoFindUniqueArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingInfoFindUniqueOrThrowArgs} args - Arguments to find a TeachingInfo
     * @example
     * // Get one TeachingInfo
     * const teachingInfo = await prisma.teachingInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoFindFirstArgs} args - Arguments to find a TeachingInfo
     * @example
     * // Get one TeachingInfo
     * const teachingInfo = await prisma.teachingInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingInfoFindFirstArgs>(args?: SelectSubset<T, TeachingInfoFindFirstArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoFindFirstOrThrowArgs} args - Arguments to find a TeachingInfo
     * @example
     * // Get one TeachingInfo
     * const teachingInfo = await prisma.teachingInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingInfos
     * const teachingInfos = await prisma.teachingInfo.findMany()
     * 
     * // Get first 10 TeachingInfos
     * const teachingInfos = await prisma.teachingInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingInfoWithIdOnly = await prisma.teachingInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingInfoFindManyArgs>(args?: SelectSubset<T, TeachingInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingInfo.
     * @param {TeachingInfoCreateArgs} args - Arguments to create a TeachingInfo.
     * @example
     * // Create one TeachingInfo
     * const TeachingInfo = await prisma.teachingInfo.create({
     *   data: {
     *     // ... data to create a TeachingInfo
     *   }
     * })
     * 
     */
    create<T extends TeachingInfoCreateArgs>(args: SelectSubset<T, TeachingInfoCreateArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingInfos.
     * @param {TeachingInfoCreateManyArgs} args - Arguments to create many TeachingInfos.
     * @example
     * // Create many TeachingInfos
     * const teachingInfo = await prisma.teachingInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingInfoCreateManyArgs>(args?: SelectSubset<T, TeachingInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingInfos and returns the data saved in the database.
     * @param {TeachingInfoCreateManyAndReturnArgs} args - Arguments to create many TeachingInfos.
     * @example
     * // Create many TeachingInfos
     * const teachingInfo = await prisma.teachingInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingInfos and only return the `id`
     * const teachingInfoWithIdOnly = await prisma.teachingInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingInfo.
     * @param {TeachingInfoDeleteArgs} args - Arguments to delete one TeachingInfo.
     * @example
     * // Delete one TeachingInfo
     * const TeachingInfo = await prisma.teachingInfo.delete({
     *   where: {
     *     // ... filter to delete one TeachingInfo
     *   }
     * })
     * 
     */
    delete<T extends TeachingInfoDeleteArgs>(args: SelectSubset<T, TeachingInfoDeleteArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingInfo.
     * @param {TeachingInfoUpdateArgs} args - Arguments to update one TeachingInfo.
     * @example
     * // Update one TeachingInfo
     * const teachingInfo = await prisma.teachingInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingInfoUpdateArgs>(args: SelectSubset<T, TeachingInfoUpdateArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingInfos.
     * @param {TeachingInfoDeleteManyArgs} args - Arguments to filter TeachingInfos to delete.
     * @example
     * // Delete a few TeachingInfos
     * const { count } = await prisma.teachingInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingInfoDeleteManyArgs>(args?: SelectSubset<T, TeachingInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingInfos
     * const teachingInfo = await prisma.teachingInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingInfoUpdateManyArgs>(args: SelectSubset<T, TeachingInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingInfos and returns the data updated in the database.
     * @param {TeachingInfoUpdateManyAndReturnArgs} args - Arguments to update many TeachingInfos.
     * @example
     * // Update many TeachingInfos
     * const teachingInfo = await prisma.teachingInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingInfos and only return the `id`
     * const teachingInfoWithIdOnly = await prisma.teachingInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeachingInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingInfo.
     * @param {TeachingInfoUpsertArgs} args - Arguments to update or create a TeachingInfo.
     * @example
     * // Update or create a TeachingInfo
     * const teachingInfo = await prisma.teachingInfo.upsert({
     *   create: {
     *     // ... data to create a TeachingInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingInfo we want to update
     *   }
     * })
     */
    upsert<T extends TeachingInfoUpsertArgs>(args: SelectSubset<T, TeachingInfoUpsertArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoCountArgs} args - Arguments to filter TeachingInfos to count.
     * @example
     * // Count the number of TeachingInfos
     * const count = await prisma.teachingInfo.count({
     *   where: {
     *     // ... the filter for the TeachingInfos we want to count
     *   }
     * })
    **/
    count<T extends TeachingInfoCountArgs>(
      args?: Subset<T, TeachingInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachingInfoAggregateArgs>(args: Subset<T, TeachingInfoAggregateArgs>): Prisma.PrismaPromise<GetTeachingInfoAggregateType<T>>

    /**
     * Group by TeachingInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeachingInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingInfoGroupByArgs['orderBy'] }
        : { orderBy?: TeachingInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeachingInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingInfo model
   */
  readonly fields: TeachingInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends TeachingInfo$itemsArgs<ExtArgs> = {}>(args?: Subset<T, TeachingInfo$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curriculum<T extends TeachingInfo$curriculumArgs<ExtArgs> = {}>(args?: Subset<T, TeachingInfo$curriculumArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeachingInfo model
   */
  interface TeachingInfoFieldRefs {
    readonly id: FieldRef<"TeachingInfo", 'Int'>
    readonly title: FieldRef<"TeachingInfo", 'String'>
    readonly singleton: FieldRef<"TeachingInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TeachingInfo findUnique
   */
  export type TeachingInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfo to fetch.
     */
    where: TeachingInfoWhereUniqueInput
  }

  /**
   * TeachingInfo findUniqueOrThrow
   */
  export type TeachingInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfo to fetch.
     */
    where: TeachingInfoWhereUniqueInput
  }

  /**
   * TeachingInfo findFirst
   */
  export type TeachingInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfo to fetch.
     */
    where?: TeachingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfos to fetch.
     */
    orderBy?: TeachingInfoOrderByWithRelationInput | TeachingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingInfos.
     */
    cursor?: TeachingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingInfos.
     */
    distinct?: TeachingInfoScalarFieldEnum | TeachingInfoScalarFieldEnum[]
  }

  /**
   * TeachingInfo findFirstOrThrow
   */
  export type TeachingInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfo to fetch.
     */
    where?: TeachingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfos to fetch.
     */
    orderBy?: TeachingInfoOrderByWithRelationInput | TeachingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingInfos.
     */
    cursor?: TeachingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingInfos.
     */
    distinct?: TeachingInfoScalarFieldEnum | TeachingInfoScalarFieldEnum[]
  }

  /**
   * TeachingInfo findMany
   */
  export type TeachingInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfos to fetch.
     */
    where?: TeachingInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfos to fetch.
     */
    orderBy?: TeachingInfoOrderByWithRelationInput | TeachingInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingInfos.
     */
    cursor?: TeachingInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfos.
     */
    skip?: number
    distinct?: TeachingInfoScalarFieldEnum | TeachingInfoScalarFieldEnum[]
  }

  /**
   * TeachingInfo create
   */
  export type TeachingInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingInfo.
     */
    data: XOR<TeachingInfoCreateInput, TeachingInfoUncheckedCreateInput>
  }

  /**
   * TeachingInfo createMany
   */
  export type TeachingInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingInfos.
     */
    data: TeachingInfoCreateManyInput | TeachingInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingInfo createManyAndReturn
   */
  export type TeachingInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingInfos.
     */
    data: TeachingInfoCreateManyInput | TeachingInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingInfo update
   */
  export type TeachingInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingInfo.
     */
    data: XOR<TeachingInfoUpdateInput, TeachingInfoUncheckedUpdateInput>
    /**
     * Choose, which TeachingInfo to update.
     */
    where: TeachingInfoWhereUniqueInput
  }

  /**
   * TeachingInfo updateMany
   */
  export type TeachingInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingInfos.
     */
    data: XOR<TeachingInfoUpdateManyMutationInput, TeachingInfoUncheckedUpdateManyInput>
    /**
     * Filter which TeachingInfos to update
     */
    where?: TeachingInfoWhereInput
    /**
     * Limit how many TeachingInfos to update.
     */
    limit?: number
  }

  /**
   * TeachingInfo updateManyAndReturn
   */
  export type TeachingInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * The data used to update TeachingInfos.
     */
    data: XOR<TeachingInfoUpdateManyMutationInput, TeachingInfoUncheckedUpdateManyInput>
    /**
     * Filter which TeachingInfos to update
     */
    where?: TeachingInfoWhereInput
    /**
     * Limit how many TeachingInfos to update.
     */
    limit?: number
  }

  /**
   * TeachingInfo upsert
   */
  export type TeachingInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingInfo to update in case it exists.
     */
    where: TeachingInfoWhereUniqueInput
    /**
     * In case the TeachingInfo found by the `where` argument doesn't exist, create a new TeachingInfo with this data.
     */
    create: XOR<TeachingInfoCreateInput, TeachingInfoUncheckedCreateInput>
    /**
     * In case the TeachingInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingInfoUpdateInput, TeachingInfoUncheckedUpdateInput>
  }

  /**
   * TeachingInfo delete
   */
  export type TeachingInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
    /**
     * Filter which TeachingInfo to delete.
     */
    where: TeachingInfoWhereUniqueInput
  }

  /**
   * TeachingInfo deleteMany
   */
  export type TeachingInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingInfos to delete
     */
    where?: TeachingInfoWhereInput
    /**
     * Limit how many TeachingInfos to delete.
     */
    limit?: number
  }

  /**
   * TeachingInfo.items
   */
  export type TeachingInfo$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    where?: TeachingInfoItemWhereInput
    orderBy?: TeachingInfoItemOrderByWithRelationInput | TeachingInfoItemOrderByWithRelationInput[]
    cursor?: TeachingInfoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeachingInfoItemScalarFieldEnum | TeachingInfoItemScalarFieldEnum[]
  }

  /**
   * TeachingInfo.curriculum
   */
  export type TeachingInfo$curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    where?: CurriculumWhereInput
  }

  /**
   * TeachingInfo without action
   */
  export type TeachingInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfo
     */
    select?: TeachingInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfo
     */
    omit?: TeachingInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoInclude<ExtArgs> | null
  }


  /**
   * Model TeachingInfoItem
   */

  export type AggregateTeachingInfoItem = {
    _count: TeachingInfoItemCountAggregateOutputType | null
    _avg: TeachingInfoItemAvgAggregateOutputType | null
    _sum: TeachingInfoItemSumAggregateOutputType | null
    _min: TeachingInfoItemMinAggregateOutputType | null
    _max: TeachingInfoItemMaxAggregateOutputType | null
  }

  export type TeachingInfoItemAvgAggregateOutputType = {
    id: number | null
    teachingInfoId: number | null
  }

  export type TeachingInfoItemSumAggregateOutputType = {
    id: number | null
    teachingInfoId: number | null
  }

  export type TeachingInfoItemMinAggregateOutputType = {
    id: number | null
    description: string | null
    teachingInfoId: number | null
  }

  export type TeachingInfoItemMaxAggregateOutputType = {
    id: number | null
    description: string | null
    teachingInfoId: number | null
  }

  export type TeachingInfoItemCountAggregateOutputType = {
    id: number
    description: number
    teachingInfoId: number
    _all: number
  }


  export type TeachingInfoItemAvgAggregateInputType = {
    id?: true
    teachingInfoId?: true
  }

  export type TeachingInfoItemSumAggregateInputType = {
    id?: true
    teachingInfoId?: true
  }

  export type TeachingInfoItemMinAggregateInputType = {
    id?: true
    description?: true
    teachingInfoId?: true
  }

  export type TeachingInfoItemMaxAggregateInputType = {
    id?: true
    description?: true
    teachingInfoId?: true
  }

  export type TeachingInfoItemCountAggregateInputType = {
    id?: true
    description?: true
    teachingInfoId?: true
    _all?: true
  }

  export type TeachingInfoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingInfoItem to aggregate.
     */
    where?: TeachingInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfoItems to fetch.
     */
    orderBy?: TeachingInfoItemOrderByWithRelationInput | TeachingInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeachingInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeachingInfoItems
    **/
    _count?: true | TeachingInfoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeachingInfoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeachingInfoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeachingInfoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeachingInfoItemMaxAggregateInputType
  }

  export type GetTeachingInfoItemAggregateType<T extends TeachingInfoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTeachingInfoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeachingInfoItem[P]>
      : GetScalarType<T[P], AggregateTeachingInfoItem[P]>
  }




  export type TeachingInfoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeachingInfoItemWhereInput
    orderBy?: TeachingInfoItemOrderByWithAggregationInput | TeachingInfoItemOrderByWithAggregationInput[]
    by: TeachingInfoItemScalarFieldEnum[] | TeachingInfoItemScalarFieldEnum
    having?: TeachingInfoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeachingInfoItemCountAggregateInputType | true
    _avg?: TeachingInfoItemAvgAggregateInputType
    _sum?: TeachingInfoItemSumAggregateInputType
    _min?: TeachingInfoItemMinAggregateInputType
    _max?: TeachingInfoItemMaxAggregateInputType
  }

  export type TeachingInfoItemGroupByOutputType = {
    id: number
    description: string
    teachingInfoId: number
    _count: TeachingInfoItemCountAggregateOutputType | null
    _avg: TeachingInfoItemAvgAggregateOutputType | null
    _sum: TeachingInfoItemSumAggregateOutputType | null
    _min: TeachingInfoItemMinAggregateOutputType | null
    _max: TeachingInfoItemMaxAggregateOutputType | null
  }

  type GetTeachingInfoItemGroupByPayload<T extends TeachingInfoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeachingInfoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeachingInfoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeachingInfoItemGroupByOutputType[P]>
            : GetScalarType<T[P], TeachingInfoItemGroupByOutputType[P]>
        }
      >
    >


  export type TeachingInfoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    teachingInfoId?: boolean
    teachingInfo?: boolean | TeachingInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingInfoItem"]>

  export type TeachingInfoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    teachingInfoId?: boolean
    teachingInfo?: boolean | TeachingInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingInfoItem"]>

  export type TeachingInfoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    teachingInfoId?: boolean
    teachingInfo?: boolean | TeachingInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teachingInfoItem"]>

  export type TeachingInfoItemSelectScalar = {
    id?: boolean
    description?: boolean
    teachingInfoId?: boolean
  }

  export type TeachingInfoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "teachingInfoId", ExtArgs["result"]["teachingInfoItem"]>
  export type TeachingInfoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingInfo?: boolean | TeachingInfoDefaultArgs<ExtArgs>
  }
  export type TeachingInfoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingInfo?: boolean | TeachingInfoDefaultArgs<ExtArgs>
  }
  export type TeachingInfoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teachingInfo?: boolean | TeachingInfoDefaultArgs<ExtArgs>
  }

  export type $TeachingInfoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeachingInfoItem"
    objects: {
      teachingInfo: Prisma.$TeachingInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      teachingInfoId: number
    }, ExtArgs["result"]["teachingInfoItem"]>
    composites: {}
  }

  type TeachingInfoItemGetPayload<S extends boolean | null | undefined | TeachingInfoItemDefaultArgs> = $Result.GetResult<Prisma.$TeachingInfoItemPayload, S>

  type TeachingInfoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeachingInfoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeachingInfoItemCountAggregateInputType | true
    }

  export interface TeachingInfoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeachingInfoItem'], meta: { name: 'TeachingInfoItem' } }
    /**
     * Find zero or one TeachingInfoItem that matches the filter.
     * @param {TeachingInfoItemFindUniqueArgs} args - Arguments to find a TeachingInfoItem
     * @example
     * // Get one TeachingInfoItem
     * const teachingInfoItem = await prisma.teachingInfoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeachingInfoItemFindUniqueArgs>(args: SelectSubset<T, TeachingInfoItemFindUniqueArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeachingInfoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeachingInfoItemFindUniqueOrThrowArgs} args - Arguments to find a TeachingInfoItem
     * @example
     * // Get one TeachingInfoItem
     * const teachingInfoItem = await prisma.teachingInfoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeachingInfoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TeachingInfoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingInfoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemFindFirstArgs} args - Arguments to find a TeachingInfoItem
     * @example
     * // Get one TeachingInfoItem
     * const teachingInfoItem = await prisma.teachingInfoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeachingInfoItemFindFirstArgs>(args?: SelectSubset<T, TeachingInfoItemFindFirstArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeachingInfoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemFindFirstOrThrowArgs} args - Arguments to find a TeachingInfoItem
     * @example
     * // Get one TeachingInfoItem
     * const teachingInfoItem = await prisma.teachingInfoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeachingInfoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TeachingInfoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeachingInfoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeachingInfoItems
     * const teachingInfoItems = await prisma.teachingInfoItem.findMany()
     * 
     * // Get first 10 TeachingInfoItems
     * const teachingInfoItems = await prisma.teachingInfoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teachingInfoItemWithIdOnly = await prisma.teachingInfoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeachingInfoItemFindManyArgs>(args?: SelectSubset<T, TeachingInfoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeachingInfoItem.
     * @param {TeachingInfoItemCreateArgs} args - Arguments to create a TeachingInfoItem.
     * @example
     * // Create one TeachingInfoItem
     * const TeachingInfoItem = await prisma.teachingInfoItem.create({
     *   data: {
     *     // ... data to create a TeachingInfoItem
     *   }
     * })
     * 
     */
    create<T extends TeachingInfoItemCreateArgs>(args: SelectSubset<T, TeachingInfoItemCreateArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeachingInfoItems.
     * @param {TeachingInfoItemCreateManyArgs} args - Arguments to create many TeachingInfoItems.
     * @example
     * // Create many TeachingInfoItems
     * const teachingInfoItem = await prisma.teachingInfoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeachingInfoItemCreateManyArgs>(args?: SelectSubset<T, TeachingInfoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeachingInfoItems and returns the data saved in the database.
     * @param {TeachingInfoItemCreateManyAndReturnArgs} args - Arguments to create many TeachingInfoItems.
     * @example
     * // Create many TeachingInfoItems
     * const teachingInfoItem = await prisma.teachingInfoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeachingInfoItems and only return the `id`
     * const teachingInfoItemWithIdOnly = await prisma.teachingInfoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeachingInfoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TeachingInfoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeachingInfoItem.
     * @param {TeachingInfoItemDeleteArgs} args - Arguments to delete one TeachingInfoItem.
     * @example
     * // Delete one TeachingInfoItem
     * const TeachingInfoItem = await prisma.teachingInfoItem.delete({
     *   where: {
     *     // ... filter to delete one TeachingInfoItem
     *   }
     * })
     * 
     */
    delete<T extends TeachingInfoItemDeleteArgs>(args: SelectSubset<T, TeachingInfoItemDeleteArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeachingInfoItem.
     * @param {TeachingInfoItemUpdateArgs} args - Arguments to update one TeachingInfoItem.
     * @example
     * // Update one TeachingInfoItem
     * const teachingInfoItem = await prisma.teachingInfoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeachingInfoItemUpdateArgs>(args: SelectSubset<T, TeachingInfoItemUpdateArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeachingInfoItems.
     * @param {TeachingInfoItemDeleteManyArgs} args - Arguments to filter TeachingInfoItems to delete.
     * @example
     * // Delete a few TeachingInfoItems
     * const { count } = await prisma.teachingInfoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeachingInfoItemDeleteManyArgs>(args?: SelectSubset<T, TeachingInfoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeachingInfoItems
     * const teachingInfoItem = await prisma.teachingInfoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeachingInfoItemUpdateManyArgs>(args: SelectSubset<T, TeachingInfoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeachingInfoItems and returns the data updated in the database.
     * @param {TeachingInfoItemUpdateManyAndReturnArgs} args - Arguments to update many TeachingInfoItems.
     * @example
     * // Update many TeachingInfoItems
     * const teachingInfoItem = await prisma.teachingInfoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeachingInfoItems and only return the `id`
     * const teachingInfoItemWithIdOnly = await prisma.teachingInfoItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeachingInfoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TeachingInfoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeachingInfoItem.
     * @param {TeachingInfoItemUpsertArgs} args - Arguments to update or create a TeachingInfoItem.
     * @example
     * // Update or create a TeachingInfoItem
     * const teachingInfoItem = await prisma.teachingInfoItem.upsert({
     *   create: {
     *     // ... data to create a TeachingInfoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeachingInfoItem we want to update
     *   }
     * })
     */
    upsert<T extends TeachingInfoItemUpsertArgs>(args: SelectSubset<T, TeachingInfoItemUpsertArgs<ExtArgs>>): Prisma__TeachingInfoItemClient<$Result.GetResult<Prisma.$TeachingInfoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeachingInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemCountArgs} args - Arguments to filter TeachingInfoItems to count.
     * @example
     * // Count the number of TeachingInfoItems
     * const count = await prisma.teachingInfoItem.count({
     *   where: {
     *     // ... the filter for the TeachingInfoItems we want to count
     *   }
     * })
    **/
    count<T extends TeachingInfoItemCountArgs>(
      args?: Subset<T, TeachingInfoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeachingInfoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeachingInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeachingInfoItemAggregateArgs>(args: Subset<T, TeachingInfoItemAggregateArgs>): Prisma.PrismaPromise<GetTeachingInfoItemAggregateType<T>>

    /**
     * Group by TeachingInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeachingInfoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeachingInfoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeachingInfoItemGroupByArgs['orderBy'] }
        : { orderBy?: TeachingInfoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeachingInfoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeachingInfoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeachingInfoItem model
   */
  readonly fields: TeachingInfoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeachingInfoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeachingInfoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teachingInfo<T extends TeachingInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeachingInfoDefaultArgs<ExtArgs>>): Prisma__TeachingInfoClient<$Result.GetResult<Prisma.$TeachingInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeachingInfoItem model
   */
  interface TeachingInfoItemFieldRefs {
    readonly id: FieldRef<"TeachingInfoItem", 'Int'>
    readonly description: FieldRef<"TeachingInfoItem", 'String'>
    readonly teachingInfoId: FieldRef<"TeachingInfoItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeachingInfoItem findUnique
   */
  export type TeachingInfoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfoItem to fetch.
     */
    where: TeachingInfoItemWhereUniqueInput
  }

  /**
   * TeachingInfoItem findUniqueOrThrow
   */
  export type TeachingInfoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfoItem to fetch.
     */
    where: TeachingInfoItemWhereUniqueInput
  }

  /**
   * TeachingInfoItem findFirst
   */
  export type TeachingInfoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfoItem to fetch.
     */
    where?: TeachingInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfoItems to fetch.
     */
    orderBy?: TeachingInfoItemOrderByWithRelationInput | TeachingInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingInfoItems.
     */
    cursor?: TeachingInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingInfoItems.
     */
    distinct?: TeachingInfoItemScalarFieldEnum | TeachingInfoItemScalarFieldEnum[]
  }

  /**
   * TeachingInfoItem findFirstOrThrow
   */
  export type TeachingInfoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfoItem to fetch.
     */
    where?: TeachingInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfoItems to fetch.
     */
    orderBy?: TeachingInfoItemOrderByWithRelationInput | TeachingInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeachingInfoItems.
     */
    cursor?: TeachingInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeachingInfoItems.
     */
    distinct?: TeachingInfoItemScalarFieldEnum | TeachingInfoItemScalarFieldEnum[]
  }

  /**
   * TeachingInfoItem findMany
   */
  export type TeachingInfoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which TeachingInfoItems to fetch.
     */
    where?: TeachingInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeachingInfoItems to fetch.
     */
    orderBy?: TeachingInfoItemOrderByWithRelationInput | TeachingInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeachingInfoItems.
     */
    cursor?: TeachingInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeachingInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeachingInfoItems.
     */
    skip?: number
    distinct?: TeachingInfoItemScalarFieldEnum | TeachingInfoItemScalarFieldEnum[]
  }

  /**
   * TeachingInfoItem create
   */
  export type TeachingInfoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TeachingInfoItem.
     */
    data: XOR<TeachingInfoItemCreateInput, TeachingInfoItemUncheckedCreateInput>
  }

  /**
   * TeachingInfoItem createMany
   */
  export type TeachingInfoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeachingInfoItems.
     */
    data: TeachingInfoItemCreateManyInput | TeachingInfoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeachingInfoItem createManyAndReturn
   */
  export type TeachingInfoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * The data used to create many TeachingInfoItems.
     */
    data: TeachingInfoItemCreateManyInput | TeachingInfoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingInfoItem update
   */
  export type TeachingInfoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TeachingInfoItem.
     */
    data: XOR<TeachingInfoItemUpdateInput, TeachingInfoItemUncheckedUpdateInput>
    /**
     * Choose, which TeachingInfoItem to update.
     */
    where: TeachingInfoItemWhereUniqueInput
  }

  /**
   * TeachingInfoItem updateMany
   */
  export type TeachingInfoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeachingInfoItems.
     */
    data: XOR<TeachingInfoItemUpdateManyMutationInput, TeachingInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which TeachingInfoItems to update
     */
    where?: TeachingInfoItemWhereInput
    /**
     * Limit how many TeachingInfoItems to update.
     */
    limit?: number
  }

  /**
   * TeachingInfoItem updateManyAndReturn
   */
  export type TeachingInfoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * The data used to update TeachingInfoItems.
     */
    data: XOR<TeachingInfoItemUpdateManyMutationInput, TeachingInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which TeachingInfoItems to update
     */
    where?: TeachingInfoItemWhereInput
    /**
     * Limit how many TeachingInfoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeachingInfoItem upsert
   */
  export type TeachingInfoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TeachingInfoItem to update in case it exists.
     */
    where: TeachingInfoItemWhereUniqueInput
    /**
     * In case the TeachingInfoItem found by the `where` argument doesn't exist, create a new TeachingInfoItem with this data.
     */
    create: XOR<TeachingInfoItemCreateInput, TeachingInfoItemUncheckedCreateInput>
    /**
     * In case the TeachingInfoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeachingInfoItemUpdateInput, TeachingInfoItemUncheckedUpdateInput>
  }

  /**
   * TeachingInfoItem delete
   */
  export type TeachingInfoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
    /**
     * Filter which TeachingInfoItem to delete.
     */
    where: TeachingInfoItemWhereUniqueInput
  }

  /**
   * TeachingInfoItem deleteMany
   */
  export type TeachingInfoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeachingInfoItems to delete
     */
    where?: TeachingInfoItemWhereInput
    /**
     * Limit how many TeachingInfoItems to delete.
     */
    limit?: number
  }

  /**
   * TeachingInfoItem without action
   */
  export type TeachingInfoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeachingInfoItem
     */
    select?: TeachingInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeachingInfoItem
     */
    omit?: TeachingInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeachingInfoItemInclude<ExtArgs> | null
  }


  /**
   * Model ExperienceInfo
   */

  export type AggregateExperienceInfo = {
    _count: ExperienceInfoCountAggregateOutputType | null
    _avg: ExperienceInfoAvgAggregateOutputType | null
    _sum: ExperienceInfoSumAggregateOutputType | null
    _min: ExperienceInfoMinAggregateOutputType | null
    _max: ExperienceInfoMaxAggregateOutputType | null
  }

  export type ExperienceInfoAvgAggregateOutputType = {
    id: number | null
  }

  export type ExperienceInfoSumAggregateOutputType = {
    id: number | null
  }

  export type ExperienceInfoMinAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type ExperienceInfoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    singleton: boolean | null
  }

  export type ExperienceInfoCountAggregateOutputType = {
    id: number
    title: number
    singleton: number
    _all: number
  }


  export type ExperienceInfoAvgAggregateInputType = {
    id?: true
  }

  export type ExperienceInfoSumAggregateInputType = {
    id?: true
  }

  export type ExperienceInfoMinAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type ExperienceInfoMaxAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
  }

  export type ExperienceInfoCountAggregateInputType = {
    id?: true
    title?: true
    singleton?: true
    _all?: true
  }

  export type ExperienceInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceInfo to aggregate.
     */
    where?: ExperienceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfos to fetch.
     */
    orderBy?: ExperienceInfoOrderByWithRelationInput | ExperienceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienceInfos
    **/
    _count?: true | ExperienceInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceInfoMaxAggregateInputType
  }

  export type GetExperienceInfoAggregateType<T extends ExperienceInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienceInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienceInfo[P]>
      : GetScalarType<T[P], AggregateExperienceInfo[P]>
  }




  export type ExperienceInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceInfoWhereInput
    orderBy?: ExperienceInfoOrderByWithAggregationInput | ExperienceInfoOrderByWithAggregationInput[]
    by: ExperienceInfoScalarFieldEnum[] | ExperienceInfoScalarFieldEnum
    having?: ExperienceInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceInfoCountAggregateInputType | true
    _avg?: ExperienceInfoAvgAggregateInputType
    _sum?: ExperienceInfoSumAggregateInputType
    _min?: ExperienceInfoMinAggregateInputType
    _max?: ExperienceInfoMaxAggregateInputType
  }

  export type ExperienceInfoGroupByOutputType = {
    id: number
    title: string
    singleton: boolean
    _count: ExperienceInfoCountAggregateOutputType | null
    _avg: ExperienceInfoAvgAggregateOutputType | null
    _sum: ExperienceInfoSumAggregateOutputType | null
    _min: ExperienceInfoMinAggregateOutputType | null
    _max: ExperienceInfoMaxAggregateOutputType | null
  }

  type GetExperienceInfoGroupByPayload<T extends ExperienceInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceInfoGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
    items?: boolean | ExperienceInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | ExperienceInfo$curriculumArgs<ExtArgs>
    _count?: boolean | ExperienceInfoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceInfo"]>

  export type ExperienceInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["experienceInfo"]>

  export type ExperienceInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    singleton?: boolean
  }, ExtArgs["result"]["experienceInfo"]>

  export type ExperienceInfoSelectScalar = {
    id?: boolean
    title?: boolean
    singleton?: boolean
  }

  export type ExperienceInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "singleton", ExtArgs["result"]["experienceInfo"]>
  export type ExperienceInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | ExperienceInfo$itemsArgs<ExtArgs>
    curriculum?: boolean | ExperienceInfo$curriculumArgs<ExtArgs>
    _count?: boolean | ExperienceInfoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExperienceInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ExperienceInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExperienceInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienceInfo"
    objects: {
      items: Prisma.$ExperienceInfoItemPayload<ExtArgs>[]
      curriculum: Prisma.$CurriculumPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      singleton: boolean
    }, ExtArgs["result"]["experienceInfo"]>
    composites: {}
  }

  type ExperienceInfoGetPayload<S extends boolean | null | undefined | ExperienceInfoDefaultArgs> = $Result.GetResult<Prisma.$ExperienceInfoPayload, S>

  type ExperienceInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceInfoCountAggregateInputType | true
    }

  export interface ExperienceInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienceInfo'], meta: { name: 'ExperienceInfo' } }
    /**
     * Find zero or one ExperienceInfo that matches the filter.
     * @param {ExperienceInfoFindUniqueArgs} args - Arguments to find a ExperienceInfo
     * @example
     * // Get one ExperienceInfo
     * const experienceInfo = await prisma.experienceInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceInfoFindUniqueArgs>(args: SelectSubset<T, ExperienceInfoFindUniqueArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienceInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceInfoFindUniqueOrThrowArgs} args - Arguments to find a ExperienceInfo
     * @example
     * // Get one ExperienceInfo
     * const experienceInfo = await prisma.experienceInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoFindFirstArgs} args - Arguments to find a ExperienceInfo
     * @example
     * // Get one ExperienceInfo
     * const experienceInfo = await prisma.experienceInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceInfoFindFirstArgs>(args?: SelectSubset<T, ExperienceInfoFindFirstArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoFindFirstOrThrowArgs} args - Arguments to find a ExperienceInfo
     * @example
     * // Get one ExperienceInfo
     * const experienceInfo = await prisma.experienceInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienceInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienceInfos
     * const experienceInfos = await prisma.experienceInfo.findMany()
     * 
     * // Get first 10 ExperienceInfos
     * const experienceInfos = await prisma.experienceInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceInfoWithIdOnly = await prisma.experienceInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceInfoFindManyArgs>(args?: SelectSubset<T, ExperienceInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienceInfo.
     * @param {ExperienceInfoCreateArgs} args - Arguments to create a ExperienceInfo.
     * @example
     * // Create one ExperienceInfo
     * const ExperienceInfo = await prisma.experienceInfo.create({
     *   data: {
     *     // ... data to create a ExperienceInfo
     *   }
     * })
     * 
     */
    create<T extends ExperienceInfoCreateArgs>(args: SelectSubset<T, ExperienceInfoCreateArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienceInfos.
     * @param {ExperienceInfoCreateManyArgs} args - Arguments to create many ExperienceInfos.
     * @example
     * // Create many ExperienceInfos
     * const experienceInfo = await prisma.experienceInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceInfoCreateManyArgs>(args?: SelectSubset<T, ExperienceInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienceInfos and returns the data saved in the database.
     * @param {ExperienceInfoCreateManyAndReturnArgs} args - Arguments to create many ExperienceInfos.
     * @example
     * // Create many ExperienceInfos
     * const experienceInfo = await prisma.experienceInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienceInfos and only return the `id`
     * const experienceInfoWithIdOnly = await prisma.experienceInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExperienceInfo.
     * @param {ExperienceInfoDeleteArgs} args - Arguments to delete one ExperienceInfo.
     * @example
     * // Delete one ExperienceInfo
     * const ExperienceInfo = await prisma.experienceInfo.delete({
     *   where: {
     *     // ... filter to delete one ExperienceInfo
     *   }
     * })
     * 
     */
    delete<T extends ExperienceInfoDeleteArgs>(args: SelectSubset<T, ExperienceInfoDeleteArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienceInfo.
     * @param {ExperienceInfoUpdateArgs} args - Arguments to update one ExperienceInfo.
     * @example
     * // Update one ExperienceInfo
     * const experienceInfo = await prisma.experienceInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceInfoUpdateArgs>(args: SelectSubset<T, ExperienceInfoUpdateArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienceInfos.
     * @param {ExperienceInfoDeleteManyArgs} args - Arguments to filter ExperienceInfos to delete.
     * @example
     * // Delete a few ExperienceInfos
     * const { count } = await prisma.experienceInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceInfoDeleteManyArgs>(args?: SelectSubset<T, ExperienceInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienceInfos
     * const experienceInfo = await prisma.experienceInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceInfoUpdateManyArgs>(args: SelectSubset<T, ExperienceInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceInfos and returns the data updated in the database.
     * @param {ExperienceInfoUpdateManyAndReturnArgs} args - Arguments to update many ExperienceInfos.
     * @example
     * // Update many ExperienceInfos
     * const experienceInfo = await prisma.experienceInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExperienceInfos and only return the `id`
     * const experienceInfoWithIdOnly = await prisma.experienceInfo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExperienceInfo.
     * @param {ExperienceInfoUpsertArgs} args - Arguments to update or create a ExperienceInfo.
     * @example
     * // Update or create a ExperienceInfo
     * const experienceInfo = await prisma.experienceInfo.upsert({
     *   create: {
     *     // ... data to create a ExperienceInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienceInfo we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceInfoUpsertArgs>(args: SelectSubset<T, ExperienceInfoUpsertArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienceInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoCountArgs} args - Arguments to filter ExperienceInfos to count.
     * @example
     * // Count the number of ExperienceInfos
     * const count = await prisma.experienceInfo.count({
     *   where: {
     *     // ... the filter for the ExperienceInfos we want to count
     *   }
     * })
    **/
    count<T extends ExperienceInfoCountArgs>(
      args?: Subset<T, ExperienceInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienceInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceInfoAggregateArgs>(args: Subset<T, ExperienceInfoAggregateArgs>): Prisma.PrismaPromise<GetExperienceInfoAggregateType<T>>

    /**
     * Group by ExperienceInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceInfoGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceInfoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienceInfo model
   */
  readonly fields: ExperienceInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienceInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends ExperienceInfo$itemsArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceInfo$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    curriculum<T extends ExperienceInfo$curriculumArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceInfo$curriculumArgs<ExtArgs>>): Prisma__CurriculumClient<$Result.GetResult<Prisma.$CurriculumPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExperienceInfo model
   */
  interface ExperienceInfoFieldRefs {
    readonly id: FieldRef<"ExperienceInfo", 'Int'>
    readonly title: FieldRef<"ExperienceInfo", 'String'>
    readonly singleton: FieldRef<"ExperienceInfo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ExperienceInfo findUnique
   */
  export type ExperienceInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfo to fetch.
     */
    where: ExperienceInfoWhereUniqueInput
  }

  /**
   * ExperienceInfo findUniqueOrThrow
   */
  export type ExperienceInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfo to fetch.
     */
    where: ExperienceInfoWhereUniqueInput
  }

  /**
   * ExperienceInfo findFirst
   */
  export type ExperienceInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfo to fetch.
     */
    where?: ExperienceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfos to fetch.
     */
    orderBy?: ExperienceInfoOrderByWithRelationInput | ExperienceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceInfos.
     */
    cursor?: ExperienceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceInfos.
     */
    distinct?: ExperienceInfoScalarFieldEnum | ExperienceInfoScalarFieldEnum[]
  }

  /**
   * ExperienceInfo findFirstOrThrow
   */
  export type ExperienceInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfo to fetch.
     */
    where?: ExperienceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfos to fetch.
     */
    orderBy?: ExperienceInfoOrderByWithRelationInput | ExperienceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceInfos.
     */
    cursor?: ExperienceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceInfos.
     */
    distinct?: ExperienceInfoScalarFieldEnum | ExperienceInfoScalarFieldEnum[]
  }

  /**
   * ExperienceInfo findMany
   */
  export type ExperienceInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfos to fetch.
     */
    where?: ExperienceInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfos to fetch.
     */
    orderBy?: ExperienceInfoOrderByWithRelationInput | ExperienceInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienceInfos.
     */
    cursor?: ExperienceInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfos.
     */
    skip?: number
    distinct?: ExperienceInfoScalarFieldEnum | ExperienceInfoScalarFieldEnum[]
  }

  /**
   * ExperienceInfo create
   */
  export type ExperienceInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienceInfo.
     */
    data: XOR<ExperienceInfoCreateInput, ExperienceInfoUncheckedCreateInput>
  }

  /**
   * ExperienceInfo createMany
   */
  export type ExperienceInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienceInfos.
     */
    data: ExperienceInfoCreateManyInput | ExperienceInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienceInfo createManyAndReturn
   */
  export type ExperienceInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ExperienceInfos.
     */
    data: ExperienceInfoCreateManyInput | ExperienceInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienceInfo update
   */
  export type ExperienceInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienceInfo.
     */
    data: XOR<ExperienceInfoUpdateInput, ExperienceInfoUncheckedUpdateInput>
    /**
     * Choose, which ExperienceInfo to update.
     */
    where: ExperienceInfoWhereUniqueInput
  }

  /**
   * ExperienceInfo updateMany
   */
  export type ExperienceInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienceInfos.
     */
    data: XOR<ExperienceInfoUpdateManyMutationInput, ExperienceInfoUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceInfos to update
     */
    where?: ExperienceInfoWhereInput
    /**
     * Limit how many ExperienceInfos to update.
     */
    limit?: number
  }

  /**
   * ExperienceInfo updateManyAndReturn
   */
  export type ExperienceInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * The data used to update ExperienceInfos.
     */
    data: XOR<ExperienceInfoUpdateManyMutationInput, ExperienceInfoUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceInfos to update
     */
    where?: ExperienceInfoWhereInput
    /**
     * Limit how many ExperienceInfos to update.
     */
    limit?: number
  }

  /**
   * ExperienceInfo upsert
   */
  export type ExperienceInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienceInfo to update in case it exists.
     */
    where: ExperienceInfoWhereUniqueInput
    /**
     * In case the ExperienceInfo found by the `where` argument doesn't exist, create a new ExperienceInfo with this data.
     */
    create: XOR<ExperienceInfoCreateInput, ExperienceInfoUncheckedCreateInput>
    /**
     * In case the ExperienceInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceInfoUpdateInput, ExperienceInfoUncheckedUpdateInput>
  }

  /**
   * ExperienceInfo delete
   */
  export type ExperienceInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
    /**
     * Filter which ExperienceInfo to delete.
     */
    where: ExperienceInfoWhereUniqueInput
  }

  /**
   * ExperienceInfo deleteMany
   */
  export type ExperienceInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceInfos to delete
     */
    where?: ExperienceInfoWhereInput
    /**
     * Limit how many ExperienceInfos to delete.
     */
    limit?: number
  }

  /**
   * ExperienceInfo.items
   */
  export type ExperienceInfo$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    where?: ExperienceInfoItemWhereInput
    orderBy?: ExperienceInfoItemOrderByWithRelationInput | ExperienceInfoItemOrderByWithRelationInput[]
    cursor?: ExperienceInfoItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceInfoItemScalarFieldEnum | ExperienceInfoItemScalarFieldEnum[]
  }

  /**
   * ExperienceInfo.curriculum
   */
  export type ExperienceInfo$curriculumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Curriculum
     */
    select?: CurriculumSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Curriculum
     */
    omit?: CurriculumOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CurriculumInclude<ExtArgs> | null
    where?: CurriculumWhereInput
  }

  /**
   * ExperienceInfo without action
   */
  export type ExperienceInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfo
     */
    select?: ExperienceInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfo
     */
    omit?: ExperienceInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoInclude<ExtArgs> | null
  }


  /**
   * Model ExperienceInfoItem
   */

  export type AggregateExperienceInfoItem = {
    _count: ExperienceInfoItemCountAggregateOutputType | null
    _avg: ExperienceInfoItemAvgAggregateOutputType | null
    _sum: ExperienceInfoItemSumAggregateOutputType | null
    _min: ExperienceInfoItemMinAggregateOutputType | null
    _max: ExperienceInfoItemMaxAggregateOutputType | null
  }

  export type ExperienceInfoItemAvgAggregateOutputType = {
    id: number | null
    experienceInfoId: number | null
  }

  export type ExperienceInfoItemSumAggregateOutputType = {
    id: number | null
    experienceInfoId: number | null
  }

  export type ExperienceInfoItemMinAggregateOutputType = {
    id: number | null
    description: string | null
    experienceInfoId: number | null
  }

  export type ExperienceInfoItemMaxAggregateOutputType = {
    id: number | null
    description: string | null
    experienceInfoId: number | null
  }

  export type ExperienceInfoItemCountAggregateOutputType = {
    id: number
    description: number
    experienceInfoId: number
    _all: number
  }


  export type ExperienceInfoItemAvgAggregateInputType = {
    id?: true
    experienceInfoId?: true
  }

  export type ExperienceInfoItemSumAggregateInputType = {
    id?: true
    experienceInfoId?: true
  }

  export type ExperienceInfoItemMinAggregateInputType = {
    id?: true
    description?: true
    experienceInfoId?: true
  }

  export type ExperienceInfoItemMaxAggregateInputType = {
    id?: true
    description?: true
    experienceInfoId?: true
  }

  export type ExperienceInfoItemCountAggregateInputType = {
    id?: true
    description?: true
    experienceInfoId?: true
    _all?: true
  }

  export type ExperienceInfoItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceInfoItem to aggregate.
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfoItems to fetch.
     */
    orderBy?: ExperienceInfoItemOrderByWithRelationInput | ExperienceInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExperienceInfoItems
    **/
    _count?: true | ExperienceInfoItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceInfoItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceInfoItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceInfoItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceInfoItemMaxAggregateInputType
  }

  export type GetExperienceInfoItemAggregateType<T extends ExperienceInfoItemAggregateArgs> = {
        [P in keyof T & keyof AggregateExperienceInfoItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperienceInfoItem[P]>
      : GetScalarType<T[P], AggregateExperienceInfoItem[P]>
  }




  export type ExperienceInfoItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceInfoItemWhereInput
    orderBy?: ExperienceInfoItemOrderByWithAggregationInput | ExperienceInfoItemOrderByWithAggregationInput[]
    by: ExperienceInfoItemScalarFieldEnum[] | ExperienceInfoItemScalarFieldEnum
    having?: ExperienceInfoItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceInfoItemCountAggregateInputType | true
    _avg?: ExperienceInfoItemAvgAggregateInputType
    _sum?: ExperienceInfoItemSumAggregateInputType
    _min?: ExperienceInfoItemMinAggregateInputType
    _max?: ExperienceInfoItemMaxAggregateInputType
  }

  export type ExperienceInfoItemGroupByOutputType = {
    id: number
    description: string
    experienceInfoId: number
    _count: ExperienceInfoItemCountAggregateOutputType | null
    _avg: ExperienceInfoItemAvgAggregateOutputType | null
    _sum: ExperienceInfoItemSumAggregateOutputType | null
    _min: ExperienceInfoItemMinAggregateOutputType | null
    _max: ExperienceInfoItemMaxAggregateOutputType | null
  }

  type GetExperienceInfoItemGroupByPayload<T extends ExperienceInfoItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceInfoItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceInfoItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceInfoItemGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceInfoItemGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceInfoItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    experienceInfoId?: boolean
    experienceInfo?: boolean | ExperienceInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceInfoItem"]>

  export type ExperienceInfoItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    experienceInfoId?: boolean
    experienceInfo?: boolean | ExperienceInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceInfoItem"]>

  export type ExperienceInfoItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    experienceInfoId?: boolean
    experienceInfo?: boolean | ExperienceInfoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experienceInfoItem"]>

  export type ExperienceInfoItemSelectScalar = {
    id?: boolean
    description?: boolean
    experienceInfoId?: boolean
  }

  export type ExperienceInfoItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "experienceInfoId", ExtArgs["result"]["experienceInfoItem"]>
  export type ExperienceInfoItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceInfo?: boolean | ExperienceInfoDefaultArgs<ExtArgs>
  }
  export type ExperienceInfoItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceInfo?: boolean | ExperienceInfoDefaultArgs<ExtArgs>
  }
  export type ExperienceInfoItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experienceInfo?: boolean | ExperienceInfoDefaultArgs<ExtArgs>
  }

  export type $ExperienceInfoItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExperienceInfoItem"
    objects: {
      experienceInfo: Prisma.$ExperienceInfoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      description: string
      experienceInfoId: number
    }, ExtArgs["result"]["experienceInfoItem"]>
    composites: {}
  }

  type ExperienceInfoItemGetPayload<S extends boolean | null | undefined | ExperienceInfoItemDefaultArgs> = $Result.GetResult<Prisma.$ExperienceInfoItemPayload, S>

  type ExperienceInfoItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceInfoItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceInfoItemCountAggregateInputType | true
    }

  export interface ExperienceInfoItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExperienceInfoItem'], meta: { name: 'ExperienceInfoItem' } }
    /**
     * Find zero or one ExperienceInfoItem that matches the filter.
     * @param {ExperienceInfoItemFindUniqueArgs} args - Arguments to find a ExperienceInfoItem
     * @example
     * // Get one ExperienceInfoItem
     * const experienceInfoItem = await prisma.experienceInfoItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceInfoItemFindUniqueArgs>(args: SelectSubset<T, ExperienceInfoItemFindUniqueArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExperienceInfoItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceInfoItemFindUniqueOrThrowArgs} args - Arguments to find a ExperienceInfoItem
     * @example
     * // Get one ExperienceInfoItem
     * const experienceInfoItem = await prisma.experienceInfoItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceInfoItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceInfoItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceInfoItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemFindFirstArgs} args - Arguments to find a ExperienceInfoItem
     * @example
     * // Get one ExperienceInfoItem
     * const experienceInfoItem = await prisma.experienceInfoItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceInfoItemFindFirstArgs>(args?: SelectSubset<T, ExperienceInfoItemFindFirstArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExperienceInfoItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemFindFirstOrThrowArgs} args - Arguments to find a ExperienceInfoItem
     * @example
     * // Get one ExperienceInfoItem
     * const experienceInfoItem = await prisma.experienceInfoItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceInfoItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceInfoItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExperienceInfoItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExperienceInfoItems
     * const experienceInfoItems = await prisma.experienceInfoItem.findMany()
     * 
     * // Get first 10 ExperienceInfoItems
     * const experienceInfoItems = await prisma.experienceInfoItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceInfoItemWithIdOnly = await prisma.experienceInfoItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceInfoItemFindManyArgs>(args?: SelectSubset<T, ExperienceInfoItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExperienceInfoItem.
     * @param {ExperienceInfoItemCreateArgs} args - Arguments to create a ExperienceInfoItem.
     * @example
     * // Create one ExperienceInfoItem
     * const ExperienceInfoItem = await prisma.experienceInfoItem.create({
     *   data: {
     *     // ... data to create a ExperienceInfoItem
     *   }
     * })
     * 
     */
    create<T extends ExperienceInfoItemCreateArgs>(args: SelectSubset<T, ExperienceInfoItemCreateArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExperienceInfoItems.
     * @param {ExperienceInfoItemCreateManyArgs} args - Arguments to create many ExperienceInfoItems.
     * @example
     * // Create many ExperienceInfoItems
     * const experienceInfoItem = await prisma.experienceInfoItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceInfoItemCreateManyArgs>(args?: SelectSubset<T, ExperienceInfoItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExperienceInfoItems and returns the data saved in the database.
     * @param {ExperienceInfoItemCreateManyAndReturnArgs} args - Arguments to create many ExperienceInfoItems.
     * @example
     * // Create many ExperienceInfoItems
     * const experienceInfoItem = await prisma.experienceInfoItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExperienceInfoItems and only return the `id`
     * const experienceInfoItemWithIdOnly = await prisma.experienceInfoItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceInfoItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceInfoItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExperienceInfoItem.
     * @param {ExperienceInfoItemDeleteArgs} args - Arguments to delete one ExperienceInfoItem.
     * @example
     * // Delete one ExperienceInfoItem
     * const ExperienceInfoItem = await prisma.experienceInfoItem.delete({
     *   where: {
     *     // ... filter to delete one ExperienceInfoItem
     *   }
     * })
     * 
     */
    delete<T extends ExperienceInfoItemDeleteArgs>(args: SelectSubset<T, ExperienceInfoItemDeleteArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExperienceInfoItem.
     * @param {ExperienceInfoItemUpdateArgs} args - Arguments to update one ExperienceInfoItem.
     * @example
     * // Update one ExperienceInfoItem
     * const experienceInfoItem = await prisma.experienceInfoItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceInfoItemUpdateArgs>(args: SelectSubset<T, ExperienceInfoItemUpdateArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExperienceInfoItems.
     * @param {ExperienceInfoItemDeleteManyArgs} args - Arguments to filter ExperienceInfoItems to delete.
     * @example
     * // Delete a few ExperienceInfoItems
     * const { count } = await prisma.experienceInfoItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceInfoItemDeleteManyArgs>(args?: SelectSubset<T, ExperienceInfoItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExperienceInfoItems
     * const experienceInfoItem = await prisma.experienceInfoItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceInfoItemUpdateManyArgs>(args: SelectSubset<T, ExperienceInfoItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExperienceInfoItems and returns the data updated in the database.
     * @param {ExperienceInfoItemUpdateManyAndReturnArgs} args - Arguments to update many ExperienceInfoItems.
     * @example
     * // Update many ExperienceInfoItems
     * const experienceInfoItem = await prisma.experienceInfoItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExperienceInfoItems and only return the `id`
     * const experienceInfoItemWithIdOnly = await prisma.experienceInfoItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceInfoItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceInfoItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExperienceInfoItem.
     * @param {ExperienceInfoItemUpsertArgs} args - Arguments to update or create a ExperienceInfoItem.
     * @example
     * // Update or create a ExperienceInfoItem
     * const experienceInfoItem = await prisma.experienceInfoItem.upsert({
     *   create: {
     *     // ... data to create a ExperienceInfoItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExperienceInfoItem we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceInfoItemUpsertArgs>(args: SelectSubset<T, ExperienceInfoItemUpsertArgs<ExtArgs>>): Prisma__ExperienceInfoItemClient<$Result.GetResult<Prisma.$ExperienceInfoItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExperienceInfoItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemCountArgs} args - Arguments to filter ExperienceInfoItems to count.
     * @example
     * // Count the number of ExperienceInfoItems
     * const count = await prisma.experienceInfoItem.count({
     *   where: {
     *     // ... the filter for the ExperienceInfoItems we want to count
     *   }
     * })
    **/
    count<T extends ExperienceInfoItemCountArgs>(
      args?: Subset<T, ExperienceInfoItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceInfoItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExperienceInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceInfoItemAggregateArgs>(args: Subset<T, ExperienceInfoItemAggregateArgs>): Prisma.PrismaPromise<GetExperienceInfoItemAggregateType<T>>

    /**
     * Group by ExperienceInfoItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceInfoItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceInfoItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceInfoItemGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceInfoItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceInfoItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceInfoItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExperienceInfoItem model
   */
  readonly fields: ExperienceInfoItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExperienceInfoItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceInfoItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    experienceInfo<T extends ExperienceInfoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExperienceInfoDefaultArgs<ExtArgs>>): Prisma__ExperienceInfoClient<$Result.GetResult<Prisma.$ExperienceInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExperienceInfoItem model
   */
  interface ExperienceInfoItemFieldRefs {
    readonly id: FieldRef<"ExperienceInfoItem", 'Int'>
    readonly description: FieldRef<"ExperienceInfoItem", 'String'>
    readonly experienceInfoId: FieldRef<"ExperienceInfoItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExperienceInfoItem findUnique
   */
  export type ExperienceInfoItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfoItem to fetch.
     */
    where: ExperienceInfoItemWhereUniqueInput
  }

  /**
   * ExperienceInfoItem findUniqueOrThrow
   */
  export type ExperienceInfoItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfoItem to fetch.
     */
    where: ExperienceInfoItemWhereUniqueInput
  }

  /**
   * ExperienceInfoItem findFirst
   */
  export type ExperienceInfoItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfoItem to fetch.
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfoItems to fetch.
     */
    orderBy?: ExperienceInfoItemOrderByWithRelationInput | ExperienceInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceInfoItems.
     */
    cursor?: ExperienceInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceInfoItems.
     */
    distinct?: ExperienceInfoItemScalarFieldEnum | ExperienceInfoItemScalarFieldEnum[]
  }

  /**
   * ExperienceInfoItem findFirstOrThrow
   */
  export type ExperienceInfoItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfoItem to fetch.
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfoItems to fetch.
     */
    orderBy?: ExperienceInfoItemOrderByWithRelationInput | ExperienceInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExperienceInfoItems.
     */
    cursor?: ExperienceInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfoItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExperienceInfoItems.
     */
    distinct?: ExperienceInfoItemScalarFieldEnum | ExperienceInfoItemScalarFieldEnum[]
  }

  /**
   * ExperienceInfoItem findMany
   */
  export type ExperienceInfoItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * Filter, which ExperienceInfoItems to fetch.
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExperienceInfoItems to fetch.
     */
    orderBy?: ExperienceInfoItemOrderByWithRelationInput | ExperienceInfoItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExperienceInfoItems.
     */
    cursor?: ExperienceInfoItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExperienceInfoItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExperienceInfoItems.
     */
    skip?: number
    distinct?: ExperienceInfoItemScalarFieldEnum | ExperienceInfoItemScalarFieldEnum[]
  }

  /**
   * ExperienceInfoItem create
   */
  export type ExperienceInfoItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ExperienceInfoItem.
     */
    data: XOR<ExperienceInfoItemCreateInput, ExperienceInfoItemUncheckedCreateInput>
  }

  /**
   * ExperienceInfoItem createMany
   */
  export type ExperienceInfoItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExperienceInfoItems.
     */
    data: ExperienceInfoItemCreateManyInput | ExperienceInfoItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExperienceInfoItem createManyAndReturn
   */
  export type ExperienceInfoItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * The data used to create many ExperienceInfoItems.
     */
    data: ExperienceInfoItemCreateManyInput | ExperienceInfoItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceInfoItem update
   */
  export type ExperienceInfoItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ExperienceInfoItem.
     */
    data: XOR<ExperienceInfoItemUpdateInput, ExperienceInfoItemUncheckedUpdateInput>
    /**
     * Choose, which ExperienceInfoItem to update.
     */
    where: ExperienceInfoItemWhereUniqueInput
  }

  /**
   * ExperienceInfoItem updateMany
   */
  export type ExperienceInfoItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExperienceInfoItems.
     */
    data: XOR<ExperienceInfoItemUpdateManyMutationInput, ExperienceInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceInfoItems to update
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * Limit how many ExperienceInfoItems to update.
     */
    limit?: number
  }

  /**
   * ExperienceInfoItem updateManyAndReturn
   */
  export type ExperienceInfoItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * The data used to update ExperienceInfoItems.
     */
    data: XOR<ExperienceInfoItemUpdateManyMutationInput, ExperienceInfoItemUncheckedUpdateManyInput>
    /**
     * Filter which ExperienceInfoItems to update
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * Limit how many ExperienceInfoItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExperienceInfoItem upsert
   */
  export type ExperienceInfoItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ExperienceInfoItem to update in case it exists.
     */
    where: ExperienceInfoItemWhereUniqueInput
    /**
     * In case the ExperienceInfoItem found by the `where` argument doesn't exist, create a new ExperienceInfoItem with this data.
     */
    create: XOR<ExperienceInfoItemCreateInput, ExperienceInfoItemUncheckedCreateInput>
    /**
     * In case the ExperienceInfoItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceInfoItemUpdateInput, ExperienceInfoItemUncheckedUpdateInput>
  }

  /**
   * ExperienceInfoItem delete
   */
  export type ExperienceInfoItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
    /**
     * Filter which ExperienceInfoItem to delete.
     */
    where: ExperienceInfoItemWhereUniqueInput
  }

  /**
   * ExperienceInfoItem deleteMany
   */
  export type ExperienceInfoItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExperienceInfoItems to delete
     */
    where?: ExperienceInfoItemWhereInput
    /**
     * Limit how many ExperienceInfoItems to delete.
     */
    limit?: number
  }

  /**
   * ExperienceInfoItem without action
   */
  export type ExperienceInfoItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExperienceInfoItem
     */
    select?: ExperienceInfoItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExperienceInfoItem
     */
    omit?: ExperienceInfoItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInfoItemInclude<ExtArgs> | null
  }


  /**
   * Model InboxMessage
   */

  export type AggregateInboxMessage = {
    _count: InboxMessageCountAggregateOutputType | null
    _avg: InboxMessageAvgAggregateOutputType | null
    _sum: InboxMessageSumAggregateOutputType | null
    _min: InboxMessageMinAggregateOutputType | null
    _max: InboxMessageMaxAggregateOutputType | null
  }

  export type InboxMessageAvgAggregateOutputType = {
    id: number | null
  }

  export type InboxMessageSumAggregateOutputType = {
    id: number | null
  }

  export type InboxMessageMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type InboxMessageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type InboxMessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type InboxMessageAvgAggregateInputType = {
    id?: true
  }

  export type InboxMessageSumAggregateInputType = {
    id?: true
  }

  export type InboxMessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type InboxMessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type InboxMessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type InboxMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboxMessage to aggregate.
     */
    where?: InboxMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMessages to fetch.
     */
    orderBy?: InboxMessageOrderByWithRelationInput | InboxMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InboxMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InboxMessages
    **/
    _count?: true | InboxMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InboxMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InboxMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InboxMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InboxMessageMaxAggregateInputType
  }

  export type GetInboxMessageAggregateType<T extends InboxMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateInboxMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInboxMessage[P]>
      : GetScalarType<T[P], AggregateInboxMessage[P]>
  }




  export type InboxMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InboxMessageWhereInput
    orderBy?: InboxMessageOrderByWithAggregationInput | InboxMessageOrderByWithAggregationInput[]
    by: InboxMessageScalarFieldEnum[] | InboxMessageScalarFieldEnum
    having?: InboxMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InboxMessageCountAggregateInputType | true
    _avg?: InboxMessageAvgAggregateInputType
    _sum?: InboxMessageSumAggregateInputType
    _min?: InboxMessageMinAggregateInputType
    _max?: InboxMessageMaxAggregateInputType
  }

  export type InboxMessageGroupByOutputType = {
    id: number
    name: string
    email: string
    subject: string | null
    message: string
    read: boolean
    createdAt: Date
    _count: InboxMessageCountAggregateOutputType | null
    _avg: InboxMessageAvgAggregateOutputType | null
    _sum: InboxMessageSumAggregateOutputType | null
    _min: InboxMessageMinAggregateOutputType | null
    _max: InboxMessageMaxAggregateOutputType | null
  }

  type GetInboxMessageGroupByPayload<T extends InboxMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InboxMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InboxMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InboxMessageGroupByOutputType[P]>
            : GetScalarType<T[P], InboxMessageGroupByOutputType[P]>
        }
      >
    >


  export type InboxMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inboxMessage"]>

  export type InboxMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inboxMessage"]>

  export type InboxMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inboxMessage"]>

  export type InboxMessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type InboxMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "read" | "createdAt", ExtArgs["result"]["inboxMessage"]>

  export type $InboxMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InboxMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      subject: string | null
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["inboxMessage"]>
    composites: {}
  }

  type InboxMessageGetPayload<S extends boolean | null | undefined | InboxMessageDefaultArgs> = $Result.GetResult<Prisma.$InboxMessagePayload, S>

  type InboxMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InboxMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InboxMessageCountAggregateInputType | true
    }

  export interface InboxMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InboxMessage'], meta: { name: 'InboxMessage' } }
    /**
     * Find zero or one InboxMessage that matches the filter.
     * @param {InboxMessageFindUniqueArgs} args - Arguments to find a InboxMessage
     * @example
     * // Get one InboxMessage
     * const inboxMessage = await prisma.inboxMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InboxMessageFindUniqueArgs>(args: SelectSubset<T, InboxMessageFindUniqueArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InboxMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InboxMessageFindUniqueOrThrowArgs} args - Arguments to find a InboxMessage
     * @example
     * // Get one InboxMessage
     * const inboxMessage = await prisma.inboxMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InboxMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, InboxMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboxMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageFindFirstArgs} args - Arguments to find a InboxMessage
     * @example
     * // Get one InboxMessage
     * const inboxMessage = await prisma.inboxMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InboxMessageFindFirstArgs>(args?: SelectSubset<T, InboxMessageFindFirstArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InboxMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageFindFirstOrThrowArgs} args - Arguments to find a InboxMessage
     * @example
     * // Get one InboxMessage
     * const inboxMessage = await prisma.inboxMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InboxMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, InboxMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InboxMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InboxMessages
     * const inboxMessages = await prisma.inboxMessage.findMany()
     * 
     * // Get first 10 InboxMessages
     * const inboxMessages = await prisma.inboxMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inboxMessageWithIdOnly = await prisma.inboxMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InboxMessageFindManyArgs>(args?: SelectSubset<T, InboxMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InboxMessage.
     * @param {InboxMessageCreateArgs} args - Arguments to create a InboxMessage.
     * @example
     * // Create one InboxMessage
     * const InboxMessage = await prisma.inboxMessage.create({
     *   data: {
     *     // ... data to create a InboxMessage
     *   }
     * })
     * 
     */
    create<T extends InboxMessageCreateArgs>(args: SelectSubset<T, InboxMessageCreateArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InboxMessages.
     * @param {InboxMessageCreateManyArgs} args - Arguments to create many InboxMessages.
     * @example
     * // Create many InboxMessages
     * const inboxMessage = await prisma.inboxMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InboxMessageCreateManyArgs>(args?: SelectSubset<T, InboxMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InboxMessages and returns the data saved in the database.
     * @param {InboxMessageCreateManyAndReturnArgs} args - Arguments to create many InboxMessages.
     * @example
     * // Create many InboxMessages
     * const inboxMessage = await prisma.inboxMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InboxMessages and only return the `id`
     * const inboxMessageWithIdOnly = await prisma.inboxMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InboxMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, InboxMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InboxMessage.
     * @param {InboxMessageDeleteArgs} args - Arguments to delete one InboxMessage.
     * @example
     * // Delete one InboxMessage
     * const InboxMessage = await prisma.inboxMessage.delete({
     *   where: {
     *     // ... filter to delete one InboxMessage
     *   }
     * })
     * 
     */
    delete<T extends InboxMessageDeleteArgs>(args: SelectSubset<T, InboxMessageDeleteArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InboxMessage.
     * @param {InboxMessageUpdateArgs} args - Arguments to update one InboxMessage.
     * @example
     * // Update one InboxMessage
     * const inboxMessage = await prisma.inboxMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InboxMessageUpdateArgs>(args: SelectSubset<T, InboxMessageUpdateArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InboxMessages.
     * @param {InboxMessageDeleteManyArgs} args - Arguments to filter InboxMessages to delete.
     * @example
     * // Delete a few InboxMessages
     * const { count } = await prisma.inboxMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InboxMessageDeleteManyArgs>(args?: SelectSubset<T, InboxMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboxMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InboxMessages
     * const inboxMessage = await prisma.inboxMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InboxMessageUpdateManyArgs>(args: SelectSubset<T, InboxMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InboxMessages and returns the data updated in the database.
     * @param {InboxMessageUpdateManyAndReturnArgs} args - Arguments to update many InboxMessages.
     * @example
     * // Update many InboxMessages
     * const inboxMessage = await prisma.inboxMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InboxMessages and only return the `id`
     * const inboxMessageWithIdOnly = await prisma.inboxMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InboxMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, InboxMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InboxMessage.
     * @param {InboxMessageUpsertArgs} args - Arguments to update or create a InboxMessage.
     * @example
     * // Update or create a InboxMessage
     * const inboxMessage = await prisma.inboxMessage.upsert({
     *   create: {
     *     // ... data to create a InboxMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InboxMessage we want to update
     *   }
     * })
     */
    upsert<T extends InboxMessageUpsertArgs>(args: SelectSubset<T, InboxMessageUpsertArgs<ExtArgs>>): Prisma__InboxMessageClient<$Result.GetResult<Prisma.$InboxMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InboxMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageCountArgs} args - Arguments to filter InboxMessages to count.
     * @example
     * // Count the number of InboxMessages
     * const count = await prisma.inboxMessage.count({
     *   where: {
     *     // ... the filter for the InboxMessages we want to count
     *   }
     * })
    **/
    count<T extends InboxMessageCountArgs>(
      args?: Subset<T, InboxMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InboxMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InboxMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InboxMessageAggregateArgs>(args: Subset<T, InboxMessageAggregateArgs>): Prisma.PrismaPromise<GetInboxMessageAggregateType<T>>

    /**
     * Group by InboxMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InboxMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InboxMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InboxMessageGroupByArgs['orderBy'] }
        : { orderBy?: InboxMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InboxMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInboxMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InboxMessage model
   */
  readonly fields: InboxMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InboxMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InboxMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InboxMessage model
   */
  interface InboxMessageFieldRefs {
    readonly id: FieldRef<"InboxMessage", 'Int'>
    readonly name: FieldRef<"InboxMessage", 'String'>
    readonly email: FieldRef<"InboxMessage", 'String'>
    readonly subject: FieldRef<"InboxMessage", 'String'>
    readonly message: FieldRef<"InboxMessage", 'String'>
    readonly read: FieldRef<"InboxMessage", 'Boolean'>
    readonly createdAt: FieldRef<"InboxMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InboxMessage findUnique
   */
  export type InboxMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * Filter, which InboxMessage to fetch.
     */
    where: InboxMessageWhereUniqueInput
  }

  /**
   * InboxMessage findUniqueOrThrow
   */
  export type InboxMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * Filter, which InboxMessage to fetch.
     */
    where: InboxMessageWhereUniqueInput
  }

  /**
   * InboxMessage findFirst
   */
  export type InboxMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * Filter, which InboxMessage to fetch.
     */
    where?: InboxMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMessages to fetch.
     */
    orderBy?: InboxMessageOrderByWithRelationInput | InboxMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboxMessages.
     */
    cursor?: InboxMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboxMessages.
     */
    distinct?: InboxMessageScalarFieldEnum | InboxMessageScalarFieldEnum[]
  }

  /**
   * InboxMessage findFirstOrThrow
   */
  export type InboxMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * Filter, which InboxMessage to fetch.
     */
    where?: InboxMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMessages to fetch.
     */
    orderBy?: InboxMessageOrderByWithRelationInput | InboxMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InboxMessages.
     */
    cursor?: InboxMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InboxMessages.
     */
    distinct?: InboxMessageScalarFieldEnum | InboxMessageScalarFieldEnum[]
  }

  /**
   * InboxMessage findMany
   */
  export type InboxMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * Filter, which InboxMessages to fetch.
     */
    where?: InboxMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InboxMessages to fetch.
     */
    orderBy?: InboxMessageOrderByWithRelationInput | InboxMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InboxMessages.
     */
    cursor?: InboxMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InboxMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InboxMessages.
     */
    skip?: number
    distinct?: InboxMessageScalarFieldEnum | InboxMessageScalarFieldEnum[]
  }

  /**
   * InboxMessage create
   */
  export type InboxMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a InboxMessage.
     */
    data: XOR<InboxMessageCreateInput, InboxMessageUncheckedCreateInput>
  }

  /**
   * InboxMessage createMany
   */
  export type InboxMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InboxMessages.
     */
    data: InboxMessageCreateManyInput | InboxMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboxMessage createManyAndReturn
   */
  export type InboxMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * The data used to create many InboxMessages.
     */
    data: InboxMessageCreateManyInput | InboxMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InboxMessage update
   */
  export type InboxMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a InboxMessage.
     */
    data: XOR<InboxMessageUpdateInput, InboxMessageUncheckedUpdateInput>
    /**
     * Choose, which InboxMessage to update.
     */
    where: InboxMessageWhereUniqueInput
  }

  /**
   * InboxMessage updateMany
   */
  export type InboxMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InboxMessages.
     */
    data: XOR<InboxMessageUpdateManyMutationInput, InboxMessageUncheckedUpdateManyInput>
    /**
     * Filter which InboxMessages to update
     */
    where?: InboxMessageWhereInput
    /**
     * Limit how many InboxMessages to update.
     */
    limit?: number
  }

  /**
   * InboxMessage updateManyAndReturn
   */
  export type InboxMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * The data used to update InboxMessages.
     */
    data: XOR<InboxMessageUpdateManyMutationInput, InboxMessageUncheckedUpdateManyInput>
    /**
     * Filter which InboxMessages to update
     */
    where?: InboxMessageWhereInput
    /**
     * Limit how many InboxMessages to update.
     */
    limit?: number
  }

  /**
   * InboxMessage upsert
   */
  export type InboxMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the InboxMessage to update in case it exists.
     */
    where: InboxMessageWhereUniqueInput
    /**
     * In case the InboxMessage found by the `where` argument doesn't exist, create a new InboxMessage with this data.
     */
    create: XOR<InboxMessageCreateInput, InboxMessageUncheckedCreateInput>
    /**
     * In case the InboxMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InboxMessageUpdateInput, InboxMessageUncheckedUpdateInput>
  }

  /**
   * InboxMessage delete
   */
  export type InboxMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
    /**
     * Filter which InboxMessage to delete.
     */
    where: InboxMessageWhereUniqueInput
  }

  /**
   * InboxMessage deleteMany
   */
  export type InboxMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InboxMessages to delete
     */
    where?: InboxMessageWhereInput
    /**
     * Limit how many InboxMessages to delete.
     */
    limit?: number
  }

  /**
   * InboxMessage without action
   */
  export type InboxMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InboxMessage
     */
    select?: InboxMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InboxMessage
     */
    omit?: InboxMessageOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    profileImage: 'profileImage',
    firstname: 'firstname',
    lastname: 'lastname',
    username: 'username',
    role: 'role',
    password: 'password',
    refreshToken: 'refreshToken'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    category: 'category',
    authorId: 'authorId',
    title: 'title',
    text: 'text',
    image: 'image',
    references: 'references',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const CurriculumScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    jobTitle: 'jobTitle',
    credential: 'credential',
    profileImage: 'profileImage',
    contactInfoId: 'contactInfoId',
    academicInfoId: 'academicInfoId',
    teachingInfoId: 'teachingInfoId',
    experienceInfoId: 'experienceInfoId',
    singleton: 'singleton',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CurriculumScalarFieldEnum = (typeof CurriculumScalarFieldEnum)[keyof typeof CurriculumScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    singleton: 'singleton'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


  export const ContactInfoItemScalarFieldEnum: {
    id: 'id',
    label: 'label',
    link: 'link',
    platform: 'platform',
    contactInfoId: 'contactInfoId'
  };

  export type ContactInfoItemScalarFieldEnum = (typeof ContactInfoItemScalarFieldEnum)[keyof typeof ContactInfoItemScalarFieldEnum]


  export const AcademicInfoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    singleton: 'singleton'
  };

  export type AcademicInfoScalarFieldEnum = (typeof AcademicInfoScalarFieldEnum)[keyof typeof AcademicInfoScalarFieldEnum]


  export const AcademicInfoItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    academicInfoId: 'academicInfoId'
  };

  export type AcademicInfoItemScalarFieldEnum = (typeof AcademicInfoItemScalarFieldEnum)[keyof typeof AcademicInfoItemScalarFieldEnum]


  export const TeachingInfoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    singleton: 'singleton'
  };

  export type TeachingInfoScalarFieldEnum = (typeof TeachingInfoScalarFieldEnum)[keyof typeof TeachingInfoScalarFieldEnum]


  export const TeachingInfoItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    teachingInfoId: 'teachingInfoId'
  };

  export type TeachingInfoItemScalarFieldEnum = (typeof TeachingInfoItemScalarFieldEnum)[keyof typeof TeachingInfoItemScalarFieldEnum]


  export const ExperienceInfoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    singleton: 'singleton'
  };

  export type ExperienceInfoScalarFieldEnum = (typeof ExperienceInfoScalarFieldEnum)[keyof typeof ExperienceInfoScalarFieldEnum]


  export const ExperienceInfoItemScalarFieldEnum: {
    id: 'id',
    description: 'description',
    experienceInfoId: 'experienceInfoId'
  };

  export type ExperienceInfoItemScalarFieldEnum = (typeof ExperienceInfoItemScalarFieldEnum)[keyof typeof ExperienceInfoItemScalarFieldEnum]


  export const InboxMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type InboxMessageScalarFieldEnum = (typeof InboxMessageScalarFieldEnum)[keyof typeof InboxMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'PostCategory'
   */
  export type EnumPostCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostCategory'>
    


  /**
   * Reference to a field of type 'PostCategory[]'
   */
  export type ListEnumPostCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostCategory[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    profileImage?: StringNullableFilter<"User"> | string | null
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    profileImage?: StringNullableFilter<"User"> | string | null
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    password?: StringFilter<"User"> | string
    refreshToken?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    password?: StringWithAggregatesFilter<"User"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    category?: EnumPostCategoryFilter<"Post"> | $Enums.PostCategory
    authorId?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    references?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    text?: SortOrder
    image?: SortOrder
    references?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    category?: EnumPostCategoryFilter<"Post"> | $Enums.PostCategory
    authorId?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    references?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    text?: SortOrder
    image?: SortOrder
    references?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    category?: EnumPostCategoryWithAggregatesFilter<"Post"> | $Enums.PostCategory
    authorId?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    text?: StringWithAggregatesFilter<"Post"> | string
    image?: StringWithAggregatesFilter<"Post"> | string
    references?: StringNullableListFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type CurriculumWhereInput = {
    AND?: CurriculumWhereInput | CurriculumWhereInput[]
    OR?: CurriculumWhereInput[]
    NOT?: CurriculumWhereInput | CurriculumWhereInput[]
    id?: IntFilter<"Curriculum"> | number
    firstname?: StringFilter<"Curriculum"> | string
    lastname?: StringFilter<"Curriculum"> | string
    jobTitle?: StringFilter<"Curriculum"> | string
    credential?: StringFilter<"Curriculum"> | string
    profileImage?: StringFilter<"Curriculum"> | string
    contactInfoId?: IntNullableFilter<"Curriculum"> | number | null
    academicInfoId?: IntNullableFilter<"Curriculum"> | number | null
    teachingInfoId?: IntNullableFilter<"Curriculum"> | number | null
    experienceInfoId?: IntNullableFilter<"Curriculum"> | number | null
    singleton?: BoolFilter<"Curriculum"> | boolean
    createdAt?: DateTimeFilter<"Curriculum"> | Date | string
    updatedAt?: DateTimeFilter<"Curriculum"> | Date | string
    contactInfo?: XOR<ContactInfoNullableScalarRelationFilter, ContactInfoWhereInput> | null
    academicInfo?: XOR<AcademicInfoNullableScalarRelationFilter, AcademicInfoWhereInput> | null
    teachingInfo?: XOR<TeachingInfoNullableScalarRelationFilter, TeachingInfoWhereInput> | null
    experienceInfo?: XOR<ExperienceInfoNullableScalarRelationFilter, ExperienceInfoWhereInput> | null
  }

  export type CurriculumOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    jobTitle?: SortOrder
    credential?: SortOrder
    profileImage?: SortOrder
    contactInfoId?: SortOrderInput | SortOrder
    academicInfoId?: SortOrderInput | SortOrder
    teachingInfoId?: SortOrderInput | SortOrder
    experienceInfoId?: SortOrderInput | SortOrder
    singleton?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    contactInfo?: ContactInfoOrderByWithRelationInput
    academicInfo?: AcademicInfoOrderByWithRelationInput
    teachingInfo?: TeachingInfoOrderByWithRelationInput
    experienceInfo?: ExperienceInfoOrderByWithRelationInput
  }

  export type CurriculumWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contactInfoId?: number
    academicInfoId?: number
    teachingInfoId?: number
    experienceInfoId?: number
    singleton?: boolean
    AND?: CurriculumWhereInput | CurriculumWhereInput[]
    OR?: CurriculumWhereInput[]
    NOT?: CurriculumWhereInput | CurriculumWhereInput[]
    firstname?: StringFilter<"Curriculum"> | string
    lastname?: StringFilter<"Curriculum"> | string
    jobTitle?: StringFilter<"Curriculum"> | string
    credential?: StringFilter<"Curriculum"> | string
    profileImage?: StringFilter<"Curriculum"> | string
    createdAt?: DateTimeFilter<"Curriculum"> | Date | string
    updatedAt?: DateTimeFilter<"Curriculum"> | Date | string
    contactInfo?: XOR<ContactInfoNullableScalarRelationFilter, ContactInfoWhereInput> | null
    academicInfo?: XOR<AcademicInfoNullableScalarRelationFilter, AcademicInfoWhereInput> | null
    teachingInfo?: XOR<TeachingInfoNullableScalarRelationFilter, TeachingInfoWhereInput> | null
    experienceInfo?: XOR<ExperienceInfoNullableScalarRelationFilter, ExperienceInfoWhereInput> | null
  }, "id" | "contactInfoId" | "academicInfoId" | "teachingInfoId" | "experienceInfoId" | "singleton">

  export type CurriculumOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    jobTitle?: SortOrder
    credential?: SortOrder
    profileImage?: SortOrder
    contactInfoId?: SortOrderInput | SortOrder
    academicInfoId?: SortOrderInput | SortOrder
    teachingInfoId?: SortOrderInput | SortOrder
    experienceInfoId?: SortOrderInput | SortOrder
    singleton?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CurriculumCountOrderByAggregateInput
    _avg?: CurriculumAvgOrderByAggregateInput
    _max?: CurriculumMaxOrderByAggregateInput
    _min?: CurriculumMinOrderByAggregateInput
    _sum?: CurriculumSumOrderByAggregateInput
  }

  export type CurriculumScalarWhereWithAggregatesInput = {
    AND?: CurriculumScalarWhereWithAggregatesInput | CurriculumScalarWhereWithAggregatesInput[]
    OR?: CurriculumScalarWhereWithAggregatesInput[]
    NOT?: CurriculumScalarWhereWithAggregatesInput | CurriculumScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Curriculum"> | number
    firstname?: StringWithAggregatesFilter<"Curriculum"> | string
    lastname?: StringWithAggregatesFilter<"Curriculum"> | string
    jobTitle?: StringWithAggregatesFilter<"Curriculum"> | string
    credential?: StringWithAggregatesFilter<"Curriculum"> | string
    profileImage?: StringWithAggregatesFilter<"Curriculum"> | string
    contactInfoId?: IntNullableWithAggregatesFilter<"Curriculum"> | number | null
    academicInfoId?: IntNullableWithAggregatesFilter<"Curriculum"> | number | null
    teachingInfoId?: IntNullableWithAggregatesFilter<"Curriculum"> | number | null
    experienceInfoId?: IntNullableWithAggregatesFilter<"Curriculum"> | number | null
    singleton?: BoolWithAggregatesFilter<"Curriculum"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Curriculum"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Curriculum"> | Date | string
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: IntFilter<"ContactInfo"> | number
    title?: StringFilter<"ContactInfo"> | string
    singleton?: BoolFilter<"ContactInfo"> | boolean
    items?: ContactInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    items?: ContactInfoItemOrderByRelationAggregateInput
    curriculum?: CurriculumOrderByWithRelationInput
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    singleton?: boolean
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    title?: StringFilter<"ContactInfo"> | string
    items?: ContactInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }, "id" | "singleton">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _avg?: ContactInfoAvgOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
    _sum?: ContactInfoSumOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactInfo"> | number
    title?: StringWithAggregatesFilter<"ContactInfo"> | string
    singleton?: BoolWithAggregatesFilter<"ContactInfo"> | boolean
  }

  export type ContactInfoItemWhereInput = {
    AND?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    OR?: ContactInfoItemWhereInput[]
    NOT?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    id?: IntFilter<"ContactInfoItem"> | number
    label?: StringFilter<"ContactInfoItem"> | string
    link?: StringFilter<"ContactInfoItem"> | string
    platform?: StringNullableFilter<"ContactInfoItem"> | string | null
    contactInfoId?: IntFilter<"ContactInfoItem"> | number
    contactInfo?: XOR<ContactInfoScalarRelationFilter, ContactInfoWhereInput>
  }

  export type ContactInfoItemOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    link?: SortOrder
    platform?: SortOrderInput | SortOrder
    contactInfoId?: SortOrder
    contactInfo?: ContactInfoOrderByWithRelationInput
  }

  export type ContactInfoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    OR?: ContactInfoItemWhereInput[]
    NOT?: ContactInfoItemWhereInput | ContactInfoItemWhereInput[]
    label?: StringFilter<"ContactInfoItem"> | string
    link?: StringFilter<"ContactInfoItem"> | string
    platform?: StringNullableFilter<"ContactInfoItem"> | string | null
    contactInfoId?: IntFilter<"ContactInfoItem"> | number
    contactInfo?: XOR<ContactInfoScalarRelationFilter, ContactInfoWhereInput>
  }, "id">

  export type ContactInfoItemOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    link?: SortOrder
    platform?: SortOrderInput | SortOrder
    contactInfoId?: SortOrder
    _count?: ContactInfoItemCountOrderByAggregateInput
    _avg?: ContactInfoItemAvgOrderByAggregateInput
    _max?: ContactInfoItemMaxOrderByAggregateInput
    _min?: ContactInfoItemMinOrderByAggregateInput
    _sum?: ContactInfoItemSumOrderByAggregateInput
  }

  export type ContactInfoItemScalarWhereWithAggregatesInput = {
    AND?: ContactInfoItemScalarWhereWithAggregatesInput | ContactInfoItemScalarWhereWithAggregatesInput[]
    OR?: ContactInfoItemScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoItemScalarWhereWithAggregatesInput | ContactInfoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactInfoItem"> | number
    label?: StringWithAggregatesFilter<"ContactInfoItem"> | string
    link?: StringWithAggregatesFilter<"ContactInfoItem"> | string
    platform?: StringNullableWithAggregatesFilter<"ContactInfoItem"> | string | null
    contactInfoId?: IntWithAggregatesFilter<"ContactInfoItem"> | number
  }

  export type AcademicInfoWhereInput = {
    AND?: AcademicInfoWhereInput | AcademicInfoWhereInput[]
    OR?: AcademicInfoWhereInput[]
    NOT?: AcademicInfoWhereInput | AcademicInfoWhereInput[]
    id?: IntFilter<"AcademicInfo"> | number
    title?: StringFilter<"AcademicInfo"> | string
    singleton?: BoolFilter<"AcademicInfo"> | boolean
    items?: AcademicInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }

  export type AcademicInfoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    items?: AcademicInfoItemOrderByRelationAggregateInput
    curriculum?: CurriculumOrderByWithRelationInput
  }

  export type AcademicInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    singleton?: boolean
    AND?: AcademicInfoWhereInput | AcademicInfoWhereInput[]
    OR?: AcademicInfoWhereInput[]
    NOT?: AcademicInfoWhereInput | AcademicInfoWhereInput[]
    title?: StringFilter<"AcademicInfo"> | string
    items?: AcademicInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }, "id" | "singleton">

  export type AcademicInfoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    _count?: AcademicInfoCountOrderByAggregateInput
    _avg?: AcademicInfoAvgOrderByAggregateInput
    _max?: AcademicInfoMaxOrderByAggregateInput
    _min?: AcademicInfoMinOrderByAggregateInput
    _sum?: AcademicInfoSumOrderByAggregateInput
  }

  export type AcademicInfoScalarWhereWithAggregatesInput = {
    AND?: AcademicInfoScalarWhereWithAggregatesInput | AcademicInfoScalarWhereWithAggregatesInput[]
    OR?: AcademicInfoScalarWhereWithAggregatesInput[]
    NOT?: AcademicInfoScalarWhereWithAggregatesInput | AcademicInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcademicInfo"> | number
    title?: StringWithAggregatesFilter<"AcademicInfo"> | string
    singleton?: BoolWithAggregatesFilter<"AcademicInfo"> | boolean
  }

  export type AcademicInfoItemWhereInput = {
    AND?: AcademicInfoItemWhereInput | AcademicInfoItemWhereInput[]
    OR?: AcademicInfoItemWhereInput[]
    NOT?: AcademicInfoItemWhereInput | AcademicInfoItemWhereInput[]
    id?: IntFilter<"AcademicInfoItem"> | number
    description?: StringFilter<"AcademicInfoItem"> | string
    academicInfoId?: IntFilter<"AcademicInfoItem"> | number
    academicInfo?: XOR<AcademicInfoScalarRelationFilter, AcademicInfoWhereInput>
  }

  export type AcademicInfoItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    academicInfoId?: SortOrder
    academicInfo?: AcademicInfoOrderByWithRelationInput
  }

  export type AcademicInfoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AcademicInfoItemWhereInput | AcademicInfoItemWhereInput[]
    OR?: AcademicInfoItemWhereInput[]
    NOT?: AcademicInfoItemWhereInput | AcademicInfoItemWhereInput[]
    description?: StringFilter<"AcademicInfoItem"> | string
    academicInfoId?: IntFilter<"AcademicInfoItem"> | number
    academicInfo?: XOR<AcademicInfoScalarRelationFilter, AcademicInfoWhereInput>
  }, "id">

  export type AcademicInfoItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    academicInfoId?: SortOrder
    _count?: AcademicInfoItemCountOrderByAggregateInput
    _avg?: AcademicInfoItemAvgOrderByAggregateInput
    _max?: AcademicInfoItemMaxOrderByAggregateInput
    _min?: AcademicInfoItemMinOrderByAggregateInput
    _sum?: AcademicInfoItemSumOrderByAggregateInput
  }

  export type AcademicInfoItemScalarWhereWithAggregatesInput = {
    AND?: AcademicInfoItemScalarWhereWithAggregatesInput | AcademicInfoItemScalarWhereWithAggregatesInput[]
    OR?: AcademicInfoItemScalarWhereWithAggregatesInput[]
    NOT?: AcademicInfoItemScalarWhereWithAggregatesInput | AcademicInfoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AcademicInfoItem"> | number
    description?: StringWithAggregatesFilter<"AcademicInfoItem"> | string
    academicInfoId?: IntWithAggregatesFilter<"AcademicInfoItem"> | number
  }

  export type TeachingInfoWhereInput = {
    AND?: TeachingInfoWhereInput | TeachingInfoWhereInput[]
    OR?: TeachingInfoWhereInput[]
    NOT?: TeachingInfoWhereInput | TeachingInfoWhereInput[]
    id?: IntFilter<"TeachingInfo"> | number
    title?: StringFilter<"TeachingInfo"> | string
    singleton?: BoolFilter<"TeachingInfo"> | boolean
    items?: TeachingInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }

  export type TeachingInfoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    items?: TeachingInfoItemOrderByRelationAggregateInput
    curriculum?: CurriculumOrderByWithRelationInput
  }

  export type TeachingInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    singleton?: boolean
    AND?: TeachingInfoWhereInput | TeachingInfoWhereInput[]
    OR?: TeachingInfoWhereInput[]
    NOT?: TeachingInfoWhereInput | TeachingInfoWhereInput[]
    title?: StringFilter<"TeachingInfo"> | string
    items?: TeachingInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }, "id" | "singleton">

  export type TeachingInfoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    _count?: TeachingInfoCountOrderByAggregateInput
    _avg?: TeachingInfoAvgOrderByAggregateInput
    _max?: TeachingInfoMaxOrderByAggregateInput
    _min?: TeachingInfoMinOrderByAggregateInput
    _sum?: TeachingInfoSumOrderByAggregateInput
  }

  export type TeachingInfoScalarWhereWithAggregatesInput = {
    AND?: TeachingInfoScalarWhereWithAggregatesInput | TeachingInfoScalarWhereWithAggregatesInput[]
    OR?: TeachingInfoScalarWhereWithAggregatesInput[]
    NOT?: TeachingInfoScalarWhereWithAggregatesInput | TeachingInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeachingInfo"> | number
    title?: StringWithAggregatesFilter<"TeachingInfo"> | string
    singleton?: BoolWithAggregatesFilter<"TeachingInfo"> | boolean
  }

  export type TeachingInfoItemWhereInput = {
    AND?: TeachingInfoItemWhereInput | TeachingInfoItemWhereInput[]
    OR?: TeachingInfoItemWhereInput[]
    NOT?: TeachingInfoItemWhereInput | TeachingInfoItemWhereInput[]
    id?: IntFilter<"TeachingInfoItem"> | number
    description?: StringFilter<"TeachingInfoItem"> | string
    teachingInfoId?: IntFilter<"TeachingInfoItem"> | number
    teachingInfo?: XOR<TeachingInfoScalarRelationFilter, TeachingInfoWhereInput>
  }

  export type TeachingInfoItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    teachingInfoId?: SortOrder
    teachingInfo?: TeachingInfoOrderByWithRelationInput
  }

  export type TeachingInfoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeachingInfoItemWhereInput | TeachingInfoItemWhereInput[]
    OR?: TeachingInfoItemWhereInput[]
    NOT?: TeachingInfoItemWhereInput | TeachingInfoItemWhereInput[]
    description?: StringFilter<"TeachingInfoItem"> | string
    teachingInfoId?: IntFilter<"TeachingInfoItem"> | number
    teachingInfo?: XOR<TeachingInfoScalarRelationFilter, TeachingInfoWhereInput>
  }, "id">

  export type TeachingInfoItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    teachingInfoId?: SortOrder
    _count?: TeachingInfoItemCountOrderByAggregateInput
    _avg?: TeachingInfoItemAvgOrderByAggregateInput
    _max?: TeachingInfoItemMaxOrderByAggregateInput
    _min?: TeachingInfoItemMinOrderByAggregateInput
    _sum?: TeachingInfoItemSumOrderByAggregateInput
  }

  export type TeachingInfoItemScalarWhereWithAggregatesInput = {
    AND?: TeachingInfoItemScalarWhereWithAggregatesInput | TeachingInfoItemScalarWhereWithAggregatesInput[]
    OR?: TeachingInfoItemScalarWhereWithAggregatesInput[]
    NOT?: TeachingInfoItemScalarWhereWithAggregatesInput | TeachingInfoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeachingInfoItem"> | number
    description?: StringWithAggregatesFilter<"TeachingInfoItem"> | string
    teachingInfoId?: IntWithAggregatesFilter<"TeachingInfoItem"> | number
  }

  export type ExperienceInfoWhereInput = {
    AND?: ExperienceInfoWhereInput | ExperienceInfoWhereInput[]
    OR?: ExperienceInfoWhereInput[]
    NOT?: ExperienceInfoWhereInput | ExperienceInfoWhereInput[]
    id?: IntFilter<"ExperienceInfo"> | number
    title?: StringFilter<"ExperienceInfo"> | string
    singleton?: BoolFilter<"ExperienceInfo"> | boolean
    items?: ExperienceInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }

  export type ExperienceInfoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    items?: ExperienceInfoItemOrderByRelationAggregateInput
    curriculum?: CurriculumOrderByWithRelationInput
  }

  export type ExperienceInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    singleton?: boolean
    AND?: ExperienceInfoWhereInput | ExperienceInfoWhereInput[]
    OR?: ExperienceInfoWhereInput[]
    NOT?: ExperienceInfoWhereInput | ExperienceInfoWhereInput[]
    title?: StringFilter<"ExperienceInfo"> | string
    items?: ExperienceInfoItemListRelationFilter
    curriculum?: XOR<CurriculumNullableScalarRelationFilter, CurriculumWhereInput> | null
  }, "id" | "singleton">

  export type ExperienceInfoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
    _count?: ExperienceInfoCountOrderByAggregateInput
    _avg?: ExperienceInfoAvgOrderByAggregateInput
    _max?: ExperienceInfoMaxOrderByAggregateInput
    _min?: ExperienceInfoMinOrderByAggregateInput
    _sum?: ExperienceInfoSumOrderByAggregateInput
  }

  export type ExperienceInfoScalarWhereWithAggregatesInput = {
    AND?: ExperienceInfoScalarWhereWithAggregatesInput | ExperienceInfoScalarWhereWithAggregatesInput[]
    OR?: ExperienceInfoScalarWhereWithAggregatesInput[]
    NOT?: ExperienceInfoScalarWhereWithAggregatesInput | ExperienceInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExperienceInfo"> | number
    title?: StringWithAggregatesFilter<"ExperienceInfo"> | string
    singleton?: BoolWithAggregatesFilter<"ExperienceInfo"> | boolean
  }

  export type ExperienceInfoItemWhereInput = {
    AND?: ExperienceInfoItemWhereInput | ExperienceInfoItemWhereInput[]
    OR?: ExperienceInfoItemWhereInput[]
    NOT?: ExperienceInfoItemWhereInput | ExperienceInfoItemWhereInput[]
    id?: IntFilter<"ExperienceInfoItem"> | number
    description?: StringFilter<"ExperienceInfoItem"> | string
    experienceInfoId?: IntFilter<"ExperienceInfoItem"> | number
    experienceInfo?: XOR<ExperienceInfoScalarRelationFilter, ExperienceInfoWhereInput>
  }

  export type ExperienceInfoItemOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    experienceInfoId?: SortOrder
    experienceInfo?: ExperienceInfoOrderByWithRelationInput
  }

  export type ExperienceInfoItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExperienceInfoItemWhereInput | ExperienceInfoItemWhereInput[]
    OR?: ExperienceInfoItemWhereInput[]
    NOT?: ExperienceInfoItemWhereInput | ExperienceInfoItemWhereInput[]
    description?: StringFilter<"ExperienceInfoItem"> | string
    experienceInfoId?: IntFilter<"ExperienceInfoItem"> | number
    experienceInfo?: XOR<ExperienceInfoScalarRelationFilter, ExperienceInfoWhereInput>
  }, "id">

  export type ExperienceInfoItemOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    experienceInfoId?: SortOrder
    _count?: ExperienceInfoItemCountOrderByAggregateInput
    _avg?: ExperienceInfoItemAvgOrderByAggregateInput
    _max?: ExperienceInfoItemMaxOrderByAggregateInput
    _min?: ExperienceInfoItemMinOrderByAggregateInput
    _sum?: ExperienceInfoItemSumOrderByAggregateInput
  }

  export type ExperienceInfoItemScalarWhereWithAggregatesInput = {
    AND?: ExperienceInfoItemScalarWhereWithAggregatesInput | ExperienceInfoItemScalarWhereWithAggregatesInput[]
    OR?: ExperienceInfoItemScalarWhereWithAggregatesInput[]
    NOT?: ExperienceInfoItemScalarWhereWithAggregatesInput | ExperienceInfoItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExperienceInfoItem"> | number
    description?: StringWithAggregatesFilter<"ExperienceInfoItem"> | string
    experienceInfoId?: IntWithAggregatesFilter<"ExperienceInfoItem"> | number
  }

  export type InboxMessageWhereInput = {
    AND?: InboxMessageWhereInput | InboxMessageWhereInput[]
    OR?: InboxMessageWhereInput[]
    NOT?: InboxMessageWhereInput | InboxMessageWhereInput[]
    id?: IntFilter<"InboxMessage"> | number
    name?: StringFilter<"InboxMessage"> | string
    email?: StringFilter<"InboxMessage"> | string
    subject?: StringNullableFilter<"InboxMessage"> | string | null
    message?: StringFilter<"InboxMessage"> | string
    read?: BoolFilter<"InboxMessage"> | boolean
    createdAt?: DateTimeFilter<"InboxMessage"> | Date | string
  }

  export type InboxMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InboxMessageWhereInput | InboxMessageWhereInput[]
    OR?: InboxMessageWhereInput[]
    NOT?: InboxMessageWhereInput | InboxMessageWhereInput[]
    name?: StringFilter<"InboxMessage"> | string
    email?: StringFilter<"InboxMessage"> | string
    subject?: StringNullableFilter<"InboxMessage"> | string | null
    message?: StringFilter<"InboxMessage"> | string
    read?: BoolFilter<"InboxMessage"> | boolean
    createdAt?: DateTimeFilter<"InboxMessage"> | Date | string
  }, "id">

  export type InboxMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: InboxMessageCountOrderByAggregateInput
    _avg?: InboxMessageAvgOrderByAggregateInput
    _max?: InboxMessageMaxOrderByAggregateInput
    _min?: InboxMessageMinOrderByAggregateInput
    _sum?: InboxMessageSumOrderByAggregateInput
  }

  export type InboxMessageScalarWhereWithAggregatesInput = {
    AND?: InboxMessageScalarWhereWithAggregatesInput | InboxMessageScalarWhereWithAggregatesInput[]
    OR?: InboxMessageScalarWhereWithAggregatesInput[]
    NOT?: InboxMessageScalarWhereWithAggregatesInput | InboxMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InboxMessage"> | number
    name?: StringWithAggregatesFilter<"InboxMessage"> | string
    email?: StringWithAggregatesFilter<"InboxMessage"> | string
    subject?: StringNullableWithAggregatesFilter<"InboxMessage"> | string | null
    message?: StringWithAggregatesFilter<"InboxMessage"> | string
    read?: BoolWithAggregatesFilter<"InboxMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"InboxMessage"> | Date | string
  }

  export type UserCreateInput = {
    profileImage?: string | null
    firstname: string
    lastname: string
    username: string
    role?: $Enums.Role
    password: string
    refreshToken?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    profileImage?: string | null
    firstname: string
    lastname: string
    username: string
    role?: $Enums.Role
    password: string
    refreshToken?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    profileImage?: string | null
    firstname: string
    lastname: string
    username: string
    role?: $Enums.Role
    password: string
    refreshToken?: string | null
  }

  export type UserUpdateManyMutationInput = {
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    category?: $Enums.PostCategory
    title: string
    text: string
    image: string
    references?: PostCreatereferencesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    category?: $Enums.PostCategory
    authorId: number
    title: string
    text: string
    image: string
    references?: PostCreatereferencesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateInput = {
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateManyInput = {
    id?: number
    category?: $Enums.PostCategory
    authorId: number
    title: string
    text: string
    image: string
    references?: PostCreatereferencesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurriculumCreateInput = {
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contactInfo?: ContactInfoCreateNestedOneWithoutCurriculumInput
    academicInfo?: AcademicInfoCreateNestedOneWithoutCurriculumInput
    teachingInfo?: TeachingInfoCreateNestedOneWithoutCurriculumInput
    experienceInfo?: ExperienceInfoCreateNestedOneWithoutCurriculumInput
  }

  export type CurriculumUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    contactInfoId?: number | null
    academicInfoId?: number | null
    teachingInfoId?: number | null
    experienceInfoId?: number | null
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculumUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactInfo?: ContactInfoUpdateOneWithoutCurriculumNestedInput
    academicInfo?: AcademicInfoUpdateOneWithoutCurriculumNestedInput
    teachingInfo?: TeachingInfoUpdateOneWithoutCurriculumNestedInput
    experienceInfo?: ExperienceInfoUpdateOneWithoutCurriculumNestedInput
  }

  export type CurriculumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    contactInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    academicInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    teachingInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    experienceInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurriculumCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    contactInfoId?: number | null
    academicInfoId?: number | null
    teachingInfoId?: number | null
    experienceInfoId?: number | null
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculumUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurriculumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    contactInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    academicInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    teachingInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    experienceInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateInput = {
    title: string
    singleton?: boolean
    items?: ContactInfoItemCreateNestedManyWithoutContactInfoInput
    curriculum?: CurriculumCreateNestedOneWithoutContactInfoInput
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: ContactInfoItemUncheckedCreateNestedManyWithoutContactInfoInput
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutContactInfoInput
  }

  export type ContactInfoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ContactInfoItemUpdateManyWithoutContactInfoNestedInput
    curriculum?: CurriculumUpdateOneWithoutContactInfoNestedInput
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ContactInfoItemUncheckedUpdateManyWithoutContactInfoNestedInput
    curriculum?: CurriculumUncheckedUpdateOneWithoutContactInfoNestedInput
  }

  export type ContactInfoCreateManyInput = {
    id?: number
    title: string
    singleton?: boolean
  }

  export type ContactInfoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContactInfoItemCreateInput = {
    label: string
    link: string
    platform?: string | null
    contactInfo: ContactInfoCreateNestedOneWithoutItemsInput
  }

  export type ContactInfoItemUncheckedCreateInput = {
    id?: number
    label: string
    link: string
    platform?: string | null
    contactInfoId: number
  }

  export type ContactInfoItemUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfo?: ContactInfoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ContactInfoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactInfoItemCreateManyInput = {
    id?: number
    label: string
    link: string
    platform?: string | null
    contactInfoId: number
  }

  export type ContactInfoItemUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
    contactInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type AcademicInfoCreateInput = {
    title: string
    singleton?: boolean
    items?: AcademicInfoItemCreateNestedManyWithoutAcademicInfoInput
    curriculum?: CurriculumCreateNestedOneWithoutAcademicInfoInput
  }

  export type AcademicInfoUncheckedCreateInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: AcademicInfoItemUncheckedCreateNestedManyWithoutAcademicInfoInput
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutAcademicInfoInput
  }

  export type AcademicInfoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: AcademicInfoItemUpdateManyWithoutAcademicInfoNestedInput
    curriculum?: CurriculumUpdateOneWithoutAcademicInfoNestedInput
  }

  export type AcademicInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: AcademicInfoItemUncheckedUpdateManyWithoutAcademicInfoNestedInput
    curriculum?: CurriculumUncheckedUpdateOneWithoutAcademicInfoNestedInput
  }

  export type AcademicInfoCreateManyInput = {
    id?: number
    title: string
    singleton?: boolean
  }

  export type AcademicInfoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AcademicInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AcademicInfoItemCreateInput = {
    description: string
    academicInfo: AcademicInfoCreateNestedOneWithoutItemsInput
  }

  export type AcademicInfoItemUncheckedCreateInput = {
    id?: number
    description: string
    academicInfoId: number
  }

  export type AcademicInfoItemUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    academicInfo?: AcademicInfoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type AcademicInfoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    academicInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type AcademicInfoItemCreateManyInput = {
    id?: number
    description: string
    academicInfoId: number
  }

  export type AcademicInfoItemUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicInfoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    academicInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type TeachingInfoCreateInput = {
    title: string
    singleton?: boolean
    items?: TeachingInfoItemCreateNestedManyWithoutTeachingInfoInput
    curriculum?: CurriculumCreateNestedOneWithoutTeachingInfoInput
  }

  export type TeachingInfoUncheckedCreateInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: TeachingInfoItemUncheckedCreateNestedManyWithoutTeachingInfoInput
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutTeachingInfoInput
  }

  export type TeachingInfoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: TeachingInfoItemUpdateManyWithoutTeachingInfoNestedInput
    curriculum?: CurriculumUpdateOneWithoutTeachingInfoNestedInput
  }

  export type TeachingInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: TeachingInfoItemUncheckedUpdateManyWithoutTeachingInfoNestedInput
    curriculum?: CurriculumUncheckedUpdateOneWithoutTeachingInfoNestedInput
  }

  export type TeachingInfoCreateManyInput = {
    id?: number
    title: string
    singleton?: boolean
  }

  export type TeachingInfoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeachingInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeachingInfoItemCreateInput = {
    description: string
    teachingInfo: TeachingInfoCreateNestedOneWithoutItemsInput
  }

  export type TeachingInfoItemUncheckedCreateInput = {
    id?: number
    description: string
    teachingInfoId: number
  }

  export type TeachingInfoItemUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    teachingInfo?: TeachingInfoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type TeachingInfoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    teachingInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type TeachingInfoItemCreateManyInput = {
    id?: number
    description: string
    teachingInfoId: number
  }

  export type TeachingInfoItemUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingInfoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    teachingInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceInfoCreateInput = {
    title: string
    singleton?: boolean
    items?: ExperienceInfoItemCreateNestedManyWithoutExperienceInfoInput
    curriculum?: CurriculumCreateNestedOneWithoutExperienceInfoInput
  }

  export type ExperienceInfoUncheckedCreateInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: ExperienceInfoItemUncheckedCreateNestedManyWithoutExperienceInfoInput
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutExperienceInfoInput
  }

  export type ExperienceInfoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ExperienceInfoItemUpdateManyWithoutExperienceInfoNestedInput
    curriculum?: CurriculumUpdateOneWithoutExperienceInfoNestedInput
  }

  export type ExperienceInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ExperienceInfoItemUncheckedUpdateManyWithoutExperienceInfoNestedInput
    curriculum?: CurriculumUncheckedUpdateOneWithoutExperienceInfoNestedInput
  }

  export type ExperienceInfoCreateManyInput = {
    id?: number
    title: string
    singleton?: boolean
  }

  export type ExperienceInfoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienceInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ExperienceInfoItemCreateInput = {
    description: string
    experienceInfo: ExperienceInfoCreateNestedOneWithoutItemsInput
  }

  export type ExperienceInfoItemUncheckedCreateInput = {
    id?: number
    description: string
    experienceInfoId: number
  }

  export type ExperienceInfoItemUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    experienceInfo?: ExperienceInfoUpdateOneRequiredWithoutItemsNestedInput
  }

  export type ExperienceInfoItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    experienceInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type ExperienceInfoItemCreateManyInput = {
    id?: number
    description: string
    experienceInfoId: number
  }

  export type ExperienceInfoItemUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceInfoItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    experienceInfoId?: IntFieldUpdateOperationsInput | number
  }

  export type InboxMessageCreateInput = {
    name: string
    email: string
    subject?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type InboxMessageUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    subject?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type InboxMessageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMessageCreateManyInput = {
    id?: number
    name: string
    email: string
    subject?: string | null
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type InboxMessageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InboxMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    profileImage?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    profileImage?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    profileImage?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    username?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumPostCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryFilter<$PrismaModel> | $Enums.PostCategory
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    text?: SortOrder
    image?: SortOrder
    references?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    text?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    text?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type EnumPostCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PostCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostCategoryFilter<$PrismaModel>
    _max?: NestedEnumPostCategoryFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ContactInfoNullableScalarRelationFilter = {
    is?: ContactInfoWhereInput | null
    isNot?: ContactInfoWhereInput | null
  }

  export type AcademicInfoNullableScalarRelationFilter = {
    is?: AcademicInfoWhereInput | null
    isNot?: AcademicInfoWhereInput | null
  }

  export type TeachingInfoNullableScalarRelationFilter = {
    is?: TeachingInfoWhereInput | null
    isNot?: TeachingInfoWhereInput | null
  }

  export type ExperienceInfoNullableScalarRelationFilter = {
    is?: ExperienceInfoWhereInput | null
    isNot?: ExperienceInfoWhereInput | null
  }

  export type CurriculumCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    jobTitle?: SortOrder
    credential?: SortOrder
    profileImage?: SortOrder
    contactInfoId?: SortOrder
    academicInfoId?: SortOrder
    teachingInfoId?: SortOrder
    experienceInfoId?: SortOrder
    singleton?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurriculumAvgOrderByAggregateInput = {
    id?: SortOrder
    contactInfoId?: SortOrder
    academicInfoId?: SortOrder
    teachingInfoId?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type CurriculumMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    jobTitle?: SortOrder
    credential?: SortOrder
    profileImage?: SortOrder
    contactInfoId?: SortOrder
    academicInfoId?: SortOrder
    teachingInfoId?: SortOrder
    experienceInfoId?: SortOrder
    singleton?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurriculumMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    jobTitle?: SortOrder
    credential?: SortOrder
    profileImage?: SortOrder
    contactInfoId?: SortOrder
    academicInfoId?: SortOrder
    teachingInfoId?: SortOrder
    experienceInfoId?: SortOrder
    singleton?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CurriculumSumOrderByAggregateInput = {
    id?: SortOrder
    contactInfoId?: SortOrder
    academicInfoId?: SortOrder
    teachingInfoId?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactInfoItemListRelationFilter = {
    every?: ContactInfoItemWhereInput
    some?: ContactInfoItemWhereInput
    none?: ContactInfoItemWhereInput
  }

  export type CurriculumNullableScalarRelationFilter = {
    is?: CurriculumWhereInput | null
    isNot?: CurriculumWhereInput | null
  }

  export type ContactInfoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type ContactInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type ContactInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContactInfoScalarRelationFilter = {
    is?: ContactInfoWhereInput
    isNot?: ContactInfoWhereInput
  }

  export type ContactInfoItemCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    link?: SortOrder
    platform?: SortOrder
    contactInfoId?: SortOrder
  }

  export type ContactInfoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    contactInfoId?: SortOrder
  }

  export type ContactInfoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    link?: SortOrder
    platform?: SortOrder
    contactInfoId?: SortOrder
  }

  export type ContactInfoItemMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
    link?: SortOrder
    platform?: SortOrder
    contactInfoId?: SortOrder
  }

  export type ContactInfoItemSumOrderByAggregateInput = {
    id?: SortOrder
    contactInfoId?: SortOrder
  }

  export type AcademicInfoItemListRelationFilter = {
    every?: AcademicInfoItemWhereInput
    some?: AcademicInfoItemWhereInput
    none?: AcademicInfoItemWhereInput
  }

  export type AcademicInfoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademicInfoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type AcademicInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcademicInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type AcademicInfoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type AcademicInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcademicInfoScalarRelationFilter = {
    is?: AcademicInfoWhereInput
    isNot?: AcademicInfoWhereInput
  }

  export type AcademicInfoItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    academicInfoId?: SortOrder
  }

  export type AcademicInfoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    academicInfoId?: SortOrder
  }

  export type AcademicInfoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    academicInfoId?: SortOrder
  }

  export type AcademicInfoItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    academicInfoId?: SortOrder
  }

  export type AcademicInfoItemSumOrderByAggregateInput = {
    id?: SortOrder
    academicInfoId?: SortOrder
  }

  export type TeachingInfoItemListRelationFilter = {
    every?: TeachingInfoItemWhereInput
    some?: TeachingInfoItemWhereInput
    none?: TeachingInfoItemWhereInput
  }

  export type TeachingInfoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeachingInfoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type TeachingInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeachingInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type TeachingInfoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type TeachingInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeachingInfoScalarRelationFilter = {
    is?: TeachingInfoWhereInput
    isNot?: TeachingInfoWhereInput
  }

  export type TeachingInfoItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    teachingInfoId?: SortOrder
  }

  export type TeachingInfoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    teachingInfoId?: SortOrder
  }

  export type TeachingInfoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    teachingInfoId?: SortOrder
  }

  export type TeachingInfoItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    teachingInfoId?: SortOrder
  }

  export type TeachingInfoItemSumOrderByAggregateInput = {
    id?: SortOrder
    teachingInfoId?: SortOrder
  }

  export type ExperienceInfoItemListRelationFilter = {
    every?: ExperienceInfoItemWhereInput
    some?: ExperienceInfoItemWhereInput
    none?: ExperienceInfoItemWhereInput
  }

  export type ExperienceInfoItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperienceInfoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type ExperienceInfoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperienceInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type ExperienceInfoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    singleton?: SortOrder
  }

  export type ExperienceInfoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExperienceInfoScalarRelationFilter = {
    is?: ExperienceInfoWhereInput
    isNot?: ExperienceInfoWhereInput
  }

  export type ExperienceInfoItemCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type ExperienceInfoItemAvgOrderByAggregateInput = {
    id?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type ExperienceInfoItemMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type ExperienceInfoItemMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type ExperienceInfoItemSumOrderByAggregateInput = {
    id?: SortOrder
    experienceInfoId?: SortOrder
  }

  export type InboxMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxMessageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InboxMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type InboxMessageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostCreatereferencesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPostCategoryFieldUpdateOperationsInput = {
    set?: $Enums.PostCategory
  }

  export type PostUpdatereferencesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type ContactInfoCreateNestedOneWithoutCurriculumInput = {
    create?: XOR<ContactInfoCreateWithoutCurriculumInput, ContactInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutCurriculumInput
    connect?: ContactInfoWhereUniqueInput
  }

  export type AcademicInfoCreateNestedOneWithoutCurriculumInput = {
    create?: XOR<AcademicInfoCreateWithoutCurriculumInput, AcademicInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: AcademicInfoCreateOrConnectWithoutCurriculumInput
    connect?: AcademicInfoWhereUniqueInput
  }

  export type TeachingInfoCreateNestedOneWithoutCurriculumInput = {
    create?: XOR<TeachingInfoCreateWithoutCurriculumInput, TeachingInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: TeachingInfoCreateOrConnectWithoutCurriculumInput
    connect?: TeachingInfoWhereUniqueInput
  }

  export type ExperienceInfoCreateNestedOneWithoutCurriculumInput = {
    create?: XOR<ExperienceInfoCreateWithoutCurriculumInput, ExperienceInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: ExperienceInfoCreateOrConnectWithoutCurriculumInput
    connect?: ExperienceInfoWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ContactInfoUpdateOneWithoutCurriculumNestedInput = {
    create?: XOR<ContactInfoCreateWithoutCurriculumInput, ContactInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutCurriculumInput
    upsert?: ContactInfoUpsertWithoutCurriculumInput
    disconnect?: ContactInfoWhereInput | boolean
    delete?: ContactInfoWhereInput | boolean
    connect?: ContactInfoWhereUniqueInput
    update?: XOR<XOR<ContactInfoUpdateToOneWithWhereWithoutCurriculumInput, ContactInfoUpdateWithoutCurriculumInput>, ContactInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type AcademicInfoUpdateOneWithoutCurriculumNestedInput = {
    create?: XOR<AcademicInfoCreateWithoutCurriculumInput, AcademicInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: AcademicInfoCreateOrConnectWithoutCurriculumInput
    upsert?: AcademicInfoUpsertWithoutCurriculumInput
    disconnect?: AcademicInfoWhereInput | boolean
    delete?: AcademicInfoWhereInput | boolean
    connect?: AcademicInfoWhereUniqueInput
    update?: XOR<XOR<AcademicInfoUpdateToOneWithWhereWithoutCurriculumInput, AcademicInfoUpdateWithoutCurriculumInput>, AcademicInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type TeachingInfoUpdateOneWithoutCurriculumNestedInput = {
    create?: XOR<TeachingInfoCreateWithoutCurriculumInput, TeachingInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: TeachingInfoCreateOrConnectWithoutCurriculumInput
    upsert?: TeachingInfoUpsertWithoutCurriculumInput
    disconnect?: TeachingInfoWhereInput | boolean
    delete?: TeachingInfoWhereInput | boolean
    connect?: TeachingInfoWhereUniqueInput
    update?: XOR<XOR<TeachingInfoUpdateToOneWithWhereWithoutCurriculumInput, TeachingInfoUpdateWithoutCurriculumInput>, TeachingInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type ExperienceInfoUpdateOneWithoutCurriculumNestedInput = {
    create?: XOR<ExperienceInfoCreateWithoutCurriculumInput, ExperienceInfoUncheckedCreateWithoutCurriculumInput>
    connectOrCreate?: ExperienceInfoCreateOrConnectWithoutCurriculumInput
    upsert?: ExperienceInfoUpsertWithoutCurriculumInput
    disconnect?: ExperienceInfoWhereInput | boolean
    delete?: ExperienceInfoWhereInput | boolean
    connect?: ExperienceInfoWhereUniqueInput
    update?: XOR<XOR<ExperienceInfoUpdateToOneWithWhereWithoutCurriculumInput, ExperienceInfoUpdateWithoutCurriculumInput>, ExperienceInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactInfoItemCreateNestedManyWithoutContactInfoInput = {
    create?: XOR<ContactInfoItemCreateWithoutContactInfoInput, ContactInfoItemUncheckedCreateWithoutContactInfoInput> | ContactInfoItemCreateWithoutContactInfoInput[] | ContactInfoItemUncheckedCreateWithoutContactInfoInput[]
    connectOrCreate?: ContactInfoItemCreateOrConnectWithoutContactInfoInput | ContactInfoItemCreateOrConnectWithoutContactInfoInput[]
    createMany?: ContactInfoItemCreateManyContactInfoInputEnvelope
    connect?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
  }

  export type CurriculumCreateNestedOneWithoutContactInfoInput = {
    create?: XOR<CurriculumCreateWithoutContactInfoInput, CurriculumUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutContactInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type ContactInfoItemUncheckedCreateNestedManyWithoutContactInfoInput = {
    create?: XOR<ContactInfoItemCreateWithoutContactInfoInput, ContactInfoItemUncheckedCreateWithoutContactInfoInput> | ContactInfoItemCreateWithoutContactInfoInput[] | ContactInfoItemUncheckedCreateWithoutContactInfoInput[]
    connectOrCreate?: ContactInfoItemCreateOrConnectWithoutContactInfoInput | ContactInfoItemCreateOrConnectWithoutContactInfoInput[]
    createMany?: ContactInfoItemCreateManyContactInfoInputEnvelope
    connect?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
  }

  export type CurriculumUncheckedCreateNestedOneWithoutContactInfoInput = {
    create?: XOR<CurriculumCreateWithoutContactInfoInput, CurriculumUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutContactInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type ContactInfoItemUpdateManyWithoutContactInfoNestedInput = {
    create?: XOR<ContactInfoItemCreateWithoutContactInfoInput, ContactInfoItemUncheckedCreateWithoutContactInfoInput> | ContactInfoItemCreateWithoutContactInfoInput[] | ContactInfoItemUncheckedCreateWithoutContactInfoInput[]
    connectOrCreate?: ContactInfoItemCreateOrConnectWithoutContactInfoInput | ContactInfoItemCreateOrConnectWithoutContactInfoInput[]
    upsert?: ContactInfoItemUpsertWithWhereUniqueWithoutContactInfoInput | ContactInfoItemUpsertWithWhereUniqueWithoutContactInfoInput[]
    createMany?: ContactInfoItemCreateManyContactInfoInputEnvelope
    set?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    disconnect?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    delete?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    connect?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    update?: ContactInfoItemUpdateWithWhereUniqueWithoutContactInfoInput | ContactInfoItemUpdateWithWhereUniqueWithoutContactInfoInput[]
    updateMany?: ContactInfoItemUpdateManyWithWhereWithoutContactInfoInput | ContactInfoItemUpdateManyWithWhereWithoutContactInfoInput[]
    deleteMany?: ContactInfoItemScalarWhereInput | ContactInfoItemScalarWhereInput[]
  }

  export type CurriculumUpdateOneWithoutContactInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutContactInfoInput, CurriculumUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutContactInfoInput
    upsert?: CurriculumUpsertWithoutContactInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutContactInfoInput, CurriculumUpdateWithoutContactInfoInput>, CurriculumUncheckedUpdateWithoutContactInfoInput>
  }

  export type ContactInfoItemUncheckedUpdateManyWithoutContactInfoNestedInput = {
    create?: XOR<ContactInfoItemCreateWithoutContactInfoInput, ContactInfoItemUncheckedCreateWithoutContactInfoInput> | ContactInfoItemCreateWithoutContactInfoInput[] | ContactInfoItemUncheckedCreateWithoutContactInfoInput[]
    connectOrCreate?: ContactInfoItemCreateOrConnectWithoutContactInfoInput | ContactInfoItemCreateOrConnectWithoutContactInfoInput[]
    upsert?: ContactInfoItemUpsertWithWhereUniqueWithoutContactInfoInput | ContactInfoItemUpsertWithWhereUniqueWithoutContactInfoInput[]
    createMany?: ContactInfoItemCreateManyContactInfoInputEnvelope
    set?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    disconnect?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    delete?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    connect?: ContactInfoItemWhereUniqueInput | ContactInfoItemWhereUniqueInput[]
    update?: ContactInfoItemUpdateWithWhereUniqueWithoutContactInfoInput | ContactInfoItemUpdateWithWhereUniqueWithoutContactInfoInput[]
    updateMany?: ContactInfoItemUpdateManyWithWhereWithoutContactInfoInput | ContactInfoItemUpdateManyWithWhereWithoutContactInfoInput[]
    deleteMany?: ContactInfoItemScalarWhereInput | ContactInfoItemScalarWhereInput[]
  }

  export type CurriculumUncheckedUpdateOneWithoutContactInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutContactInfoInput, CurriculumUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutContactInfoInput
    upsert?: CurriculumUpsertWithoutContactInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutContactInfoInput, CurriculumUpdateWithoutContactInfoInput>, CurriculumUncheckedUpdateWithoutContactInfoInput>
  }

  export type ContactInfoCreateNestedOneWithoutItemsInput = {
    create?: XOR<ContactInfoCreateWithoutItemsInput, ContactInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutItemsInput
    connect?: ContactInfoWhereUniqueInput
  }

  export type ContactInfoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ContactInfoCreateWithoutItemsInput, ContactInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutItemsInput
    upsert?: ContactInfoUpsertWithoutItemsInput
    connect?: ContactInfoWhereUniqueInput
    update?: XOR<XOR<ContactInfoUpdateToOneWithWhereWithoutItemsInput, ContactInfoUpdateWithoutItemsInput>, ContactInfoUncheckedUpdateWithoutItemsInput>
  }

  export type AcademicInfoItemCreateNestedManyWithoutAcademicInfoInput = {
    create?: XOR<AcademicInfoItemCreateWithoutAcademicInfoInput, AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput> | AcademicInfoItemCreateWithoutAcademicInfoInput[] | AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput[]
    connectOrCreate?: AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput | AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput[]
    createMany?: AcademicInfoItemCreateManyAcademicInfoInputEnvelope
    connect?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
  }

  export type CurriculumCreateNestedOneWithoutAcademicInfoInput = {
    create?: XOR<CurriculumCreateWithoutAcademicInfoInput, CurriculumUncheckedCreateWithoutAcademicInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutAcademicInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type AcademicInfoItemUncheckedCreateNestedManyWithoutAcademicInfoInput = {
    create?: XOR<AcademicInfoItemCreateWithoutAcademicInfoInput, AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput> | AcademicInfoItemCreateWithoutAcademicInfoInput[] | AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput[]
    connectOrCreate?: AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput | AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput[]
    createMany?: AcademicInfoItemCreateManyAcademicInfoInputEnvelope
    connect?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
  }

  export type CurriculumUncheckedCreateNestedOneWithoutAcademicInfoInput = {
    create?: XOR<CurriculumCreateWithoutAcademicInfoInput, CurriculumUncheckedCreateWithoutAcademicInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutAcademicInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type AcademicInfoItemUpdateManyWithoutAcademicInfoNestedInput = {
    create?: XOR<AcademicInfoItemCreateWithoutAcademicInfoInput, AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput> | AcademicInfoItemCreateWithoutAcademicInfoInput[] | AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput[]
    connectOrCreate?: AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput | AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput[]
    upsert?: AcademicInfoItemUpsertWithWhereUniqueWithoutAcademicInfoInput | AcademicInfoItemUpsertWithWhereUniqueWithoutAcademicInfoInput[]
    createMany?: AcademicInfoItemCreateManyAcademicInfoInputEnvelope
    set?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    disconnect?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    delete?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    connect?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    update?: AcademicInfoItemUpdateWithWhereUniqueWithoutAcademicInfoInput | AcademicInfoItemUpdateWithWhereUniqueWithoutAcademicInfoInput[]
    updateMany?: AcademicInfoItemUpdateManyWithWhereWithoutAcademicInfoInput | AcademicInfoItemUpdateManyWithWhereWithoutAcademicInfoInput[]
    deleteMany?: AcademicInfoItemScalarWhereInput | AcademicInfoItemScalarWhereInput[]
  }

  export type CurriculumUpdateOneWithoutAcademicInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutAcademicInfoInput, CurriculumUncheckedCreateWithoutAcademicInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutAcademicInfoInput
    upsert?: CurriculumUpsertWithoutAcademicInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutAcademicInfoInput, CurriculumUpdateWithoutAcademicInfoInput>, CurriculumUncheckedUpdateWithoutAcademicInfoInput>
  }

  export type AcademicInfoItemUncheckedUpdateManyWithoutAcademicInfoNestedInput = {
    create?: XOR<AcademicInfoItemCreateWithoutAcademicInfoInput, AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput> | AcademicInfoItemCreateWithoutAcademicInfoInput[] | AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput[]
    connectOrCreate?: AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput | AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput[]
    upsert?: AcademicInfoItemUpsertWithWhereUniqueWithoutAcademicInfoInput | AcademicInfoItemUpsertWithWhereUniqueWithoutAcademicInfoInput[]
    createMany?: AcademicInfoItemCreateManyAcademicInfoInputEnvelope
    set?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    disconnect?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    delete?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    connect?: AcademicInfoItemWhereUniqueInput | AcademicInfoItemWhereUniqueInput[]
    update?: AcademicInfoItemUpdateWithWhereUniqueWithoutAcademicInfoInput | AcademicInfoItemUpdateWithWhereUniqueWithoutAcademicInfoInput[]
    updateMany?: AcademicInfoItemUpdateManyWithWhereWithoutAcademicInfoInput | AcademicInfoItemUpdateManyWithWhereWithoutAcademicInfoInput[]
    deleteMany?: AcademicInfoItemScalarWhereInput | AcademicInfoItemScalarWhereInput[]
  }

  export type CurriculumUncheckedUpdateOneWithoutAcademicInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutAcademicInfoInput, CurriculumUncheckedCreateWithoutAcademicInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutAcademicInfoInput
    upsert?: CurriculumUpsertWithoutAcademicInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutAcademicInfoInput, CurriculumUpdateWithoutAcademicInfoInput>, CurriculumUncheckedUpdateWithoutAcademicInfoInput>
  }

  export type AcademicInfoCreateNestedOneWithoutItemsInput = {
    create?: XOR<AcademicInfoCreateWithoutItemsInput, AcademicInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AcademicInfoCreateOrConnectWithoutItemsInput
    connect?: AcademicInfoWhereUniqueInput
  }

  export type AcademicInfoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<AcademicInfoCreateWithoutItemsInput, AcademicInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: AcademicInfoCreateOrConnectWithoutItemsInput
    upsert?: AcademicInfoUpsertWithoutItemsInput
    connect?: AcademicInfoWhereUniqueInput
    update?: XOR<XOR<AcademicInfoUpdateToOneWithWhereWithoutItemsInput, AcademicInfoUpdateWithoutItemsInput>, AcademicInfoUncheckedUpdateWithoutItemsInput>
  }

  export type TeachingInfoItemCreateNestedManyWithoutTeachingInfoInput = {
    create?: XOR<TeachingInfoItemCreateWithoutTeachingInfoInput, TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput> | TeachingInfoItemCreateWithoutTeachingInfoInput[] | TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput[]
    connectOrCreate?: TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput | TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput[]
    createMany?: TeachingInfoItemCreateManyTeachingInfoInputEnvelope
    connect?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
  }

  export type CurriculumCreateNestedOneWithoutTeachingInfoInput = {
    create?: XOR<CurriculumCreateWithoutTeachingInfoInput, CurriculumUncheckedCreateWithoutTeachingInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutTeachingInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type TeachingInfoItemUncheckedCreateNestedManyWithoutTeachingInfoInput = {
    create?: XOR<TeachingInfoItemCreateWithoutTeachingInfoInput, TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput> | TeachingInfoItemCreateWithoutTeachingInfoInput[] | TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput[]
    connectOrCreate?: TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput | TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput[]
    createMany?: TeachingInfoItemCreateManyTeachingInfoInputEnvelope
    connect?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
  }

  export type CurriculumUncheckedCreateNestedOneWithoutTeachingInfoInput = {
    create?: XOR<CurriculumCreateWithoutTeachingInfoInput, CurriculumUncheckedCreateWithoutTeachingInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutTeachingInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type TeachingInfoItemUpdateManyWithoutTeachingInfoNestedInput = {
    create?: XOR<TeachingInfoItemCreateWithoutTeachingInfoInput, TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput> | TeachingInfoItemCreateWithoutTeachingInfoInput[] | TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput[]
    connectOrCreate?: TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput | TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput[]
    upsert?: TeachingInfoItemUpsertWithWhereUniqueWithoutTeachingInfoInput | TeachingInfoItemUpsertWithWhereUniqueWithoutTeachingInfoInput[]
    createMany?: TeachingInfoItemCreateManyTeachingInfoInputEnvelope
    set?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    disconnect?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    delete?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    connect?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    update?: TeachingInfoItemUpdateWithWhereUniqueWithoutTeachingInfoInput | TeachingInfoItemUpdateWithWhereUniqueWithoutTeachingInfoInput[]
    updateMany?: TeachingInfoItemUpdateManyWithWhereWithoutTeachingInfoInput | TeachingInfoItemUpdateManyWithWhereWithoutTeachingInfoInput[]
    deleteMany?: TeachingInfoItemScalarWhereInput | TeachingInfoItemScalarWhereInput[]
  }

  export type CurriculumUpdateOneWithoutTeachingInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutTeachingInfoInput, CurriculumUncheckedCreateWithoutTeachingInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutTeachingInfoInput
    upsert?: CurriculumUpsertWithoutTeachingInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutTeachingInfoInput, CurriculumUpdateWithoutTeachingInfoInput>, CurriculumUncheckedUpdateWithoutTeachingInfoInput>
  }

  export type TeachingInfoItemUncheckedUpdateManyWithoutTeachingInfoNestedInput = {
    create?: XOR<TeachingInfoItemCreateWithoutTeachingInfoInput, TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput> | TeachingInfoItemCreateWithoutTeachingInfoInput[] | TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput[]
    connectOrCreate?: TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput | TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput[]
    upsert?: TeachingInfoItemUpsertWithWhereUniqueWithoutTeachingInfoInput | TeachingInfoItemUpsertWithWhereUniqueWithoutTeachingInfoInput[]
    createMany?: TeachingInfoItemCreateManyTeachingInfoInputEnvelope
    set?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    disconnect?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    delete?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    connect?: TeachingInfoItemWhereUniqueInput | TeachingInfoItemWhereUniqueInput[]
    update?: TeachingInfoItemUpdateWithWhereUniqueWithoutTeachingInfoInput | TeachingInfoItemUpdateWithWhereUniqueWithoutTeachingInfoInput[]
    updateMany?: TeachingInfoItemUpdateManyWithWhereWithoutTeachingInfoInput | TeachingInfoItemUpdateManyWithWhereWithoutTeachingInfoInput[]
    deleteMany?: TeachingInfoItemScalarWhereInput | TeachingInfoItemScalarWhereInput[]
  }

  export type CurriculumUncheckedUpdateOneWithoutTeachingInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutTeachingInfoInput, CurriculumUncheckedCreateWithoutTeachingInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutTeachingInfoInput
    upsert?: CurriculumUpsertWithoutTeachingInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutTeachingInfoInput, CurriculumUpdateWithoutTeachingInfoInput>, CurriculumUncheckedUpdateWithoutTeachingInfoInput>
  }

  export type TeachingInfoCreateNestedOneWithoutItemsInput = {
    create?: XOR<TeachingInfoCreateWithoutItemsInput, TeachingInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TeachingInfoCreateOrConnectWithoutItemsInput
    connect?: TeachingInfoWhereUniqueInput
  }

  export type TeachingInfoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<TeachingInfoCreateWithoutItemsInput, TeachingInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: TeachingInfoCreateOrConnectWithoutItemsInput
    upsert?: TeachingInfoUpsertWithoutItemsInput
    connect?: TeachingInfoWhereUniqueInput
    update?: XOR<XOR<TeachingInfoUpdateToOneWithWhereWithoutItemsInput, TeachingInfoUpdateWithoutItemsInput>, TeachingInfoUncheckedUpdateWithoutItemsInput>
  }

  export type ExperienceInfoItemCreateNestedManyWithoutExperienceInfoInput = {
    create?: XOR<ExperienceInfoItemCreateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput> | ExperienceInfoItemCreateWithoutExperienceInfoInput[] | ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput[]
    connectOrCreate?: ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput | ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput[]
    createMany?: ExperienceInfoItemCreateManyExperienceInfoInputEnvelope
    connect?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
  }

  export type CurriculumCreateNestedOneWithoutExperienceInfoInput = {
    create?: XOR<CurriculumCreateWithoutExperienceInfoInput, CurriculumUncheckedCreateWithoutExperienceInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutExperienceInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type ExperienceInfoItemUncheckedCreateNestedManyWithoutExperienceInfoInput = {
    create?: XOR<ExperienceInfoItemCreateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput> | ExperienceInfoItemCreateWithoutExperienceInfoInput[] | ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput[]
    connectOrCreate?: ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput | ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput[]
    createMany?: ExperienceInfoItemCreateManyExperienceInfoInputEnvelope
    connect?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
  }

  export type CurriculumUncheckedCreateNestedOneWithoutExperienceInfoInput = {
    create?: XOR<CurriculumCreateWithoutExperienceInfoInput, CurriculumUncheckedCreateWithoutExperienceInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutExperienceInfoInput
    connect?: CurriculumWhereUniqueInput
  }

  export type ExperienceInfoItemUpdateManyWithoutExperienceInfoNestedInput = {
    create?: XOR<ExperienceInfoItemCreateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput> | ExperienceInfoItemCreateWithoutExperienceInfoInput[] | ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput[]
    connectOrCreate?: ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput | ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput[]
    upsert?: ExperienceInfoItemUpsertWithWhereUniqueWithoutExperienceInfoInput | ExperienceInfoItemUpsertWithWhereUniqueWithoutExperienceInfoInput[]
    createMany?: ExperienceInfoItemCreateManyExperienceInfoInputEnvelope
    set?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    disconnect?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    delete?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    connect?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    update?: ExperienceInfoItemUpdateWithWhereUniqueWithoutExperienceInfoInput | ExperienceInfoItemUpdateWithWhereUniqueWithoutExperienceInfoInput[]
    updateMany?: ExperienceInfoItemUpdateManyWithWhereWithoutExperienceInfoInput | ExperienceInfoItemUpdateManyWithWhereWithoutExperienceInfoInput[]
    deleteMany?: ExperienceInfoItemScalarWhereInput | ExperienceInfoItemScalarWhereInput[]
  }

  export type CurriculumUpdateOneWithoutExperienceInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutExperienceInfoInput, CurriculumUncheckedCreateWithoutExperienceInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutExperienceInfoInput
    upsert?: CurriculumUpsertWithoutExperienceInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutExperienceInfoInput, CurriculumUpdateWithoutExperienceInfoInput>, CurriculumUncheckedUpdateWithoutExperienceInfoInput>
  }

  export type ExperienceInfoItemUncheckedUpdateManyWithoutExperienceInfoNestedInput = {
    create?: XOR<ExperienceInfoItemCreateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput> | ExperienceInfoItemCreateWithoutExperienceInfoInput[] | ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput[]
    connectOrCreate?: ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput | ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput[]
    upsert?: ExperienceInfoItemUpsertWithWhereUniqueWithoutExperienceInfoInput | ExperienceInfoItemUpsertWithWhereUniqueWithoutExperienceInfoInput[]
    createMany?: ExperienceInfoItemCreateManyExperienceInfoInputEnvelope
    set?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    disconnect?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    delete?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    connect?: ExperienceInfoItemWhereUniqueInput | ExperienceInfoItemWhereUniqueInput[]
    update?: ExperienceInfoItemUpdateWithWhereUniqueWithoutExperienceInfoInput | ExperienceInfoItemUpdateWithWhereUniqueWithoutExperienceInfoInput[]
    updateMany?: ExperienceInfoItemUpdateManyWithWhereWithoutExperienceInfoInput | ExperienceInfoItemUpdateManyWithWhereWithoutExperienceInfoInput[]
    deleteMany?: ExperienceInfoItemScalarWhereInput | ExperienceInfoItemScalarWhereInput[]
  }

  export type CurriculumUncheckedUpdateOneWithoutExperienceInfoNestedInput = {
    create?: XOR<CurriculumCreateWithoutExperienceInfoInput, CurriculumUncheckedCreateWithoutExperienceInfoInput>
    connectOrCreate?: CurriculumCreateOrConnectWithoutExperienceInfoInput
    upsert?: CurriculumUpsertWithoutExperienceInfoInput
    disconnect?: CurriculumWhereInput | boolean
    delete?: CurriculumWhereInput | boolean
    connect?: CurriculumWhereUniqueInput
    update?: XOR<XOR<CurriculumUpdateToOneWithWhereWithoutExperienceInfoInput, CurriculumUpdateWithoutExperienceInfoInput>, CurriculumUncheckedUpdateWithoutExperienceInfoInput>
  }

  export type ExperienceInfoCreateNestedOneWithoutItemsInput = {
    create?: XOR<ExperienceInfoCreateWithoutItemsInput, ExperienceInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ExperienceInfoCreateOrConnectWithoutItemsInput
    connect?: ExperienceInfoWhereUniqueInput
  }

  export type ExperienceInfoUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ExperienceInfoCreateWithoutItemsInput, ExperienceInfoUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ExperienceInfoCreateOrConnectWithoutItemsInput
    upsert?: ExperienceInfoUpsertWithoutItemsInput
    connect?: ExperienceInfoWhereUniqueInput
    update?: XOR<XOR<ExperienceInfoUpdateToOneWithWhereWithoutItemsInput, ExperienceInfoUpdateWithoutItemsInput>, ExperienceInfoUncheckedUpdateWithoutItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumPostCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryFilter<$PrismaModel> | $Enums.PostCategory
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumPostCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostCategory | EnumPostCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.PostCategory[] | ListEnumPostCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumPostCategoryWithAggregatesFilter<$PrismaModel> | $Enums.PostCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostCategoryFilter<$PrismaModel>
    _max?: NestedEnumPostCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PostCreateWithoutAuthorInput = {
    category?: $Enums.PostCategory
    title: string
    text: string
    image: string
    references?: PostCreatereferencesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    category?: $Enums.PostCategory
    title: string
    text: string
    image: string
    references?: PostCreatereferencesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    category?: EnumPostCategoryFilter<"Post"> | $Enums.PostCategory
    authorId?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    text?: StringFilter<"Post"> | string
    image?: StringFilter<"Post"> | string
    references?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type UserCreateWithoutPostsInput = {
    profileImage?: string | null
    firstname: string
    lastname: string
    username: string
    role?: $Enums.Role
    password: string
    refreshToken?: string | null
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    profileImage?: string | null
    firstname: string
    lastname: string
    username: string
    role?: $Enums.Role
    password: string
    refreshToken?: string | null
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    password?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoCreateWithoutCurriculumInput = {
    title: string
    singleton?: boolean
    items?: ContactInfoItemCreateNestedManyWithoutContactInfoInput
  }

  export type ContactInfoUncheckedCreateWithoutCurriculumInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: ContactInfoItemUncheckedCreateNestedManyWithoutContactInfoInput
  }

  export type ContactInfoCreateOrConnectWithoutCurriculumInput = {
    where: ContactInfoWhereUniqueInput
    create: XOR<ContactInfoCreateWithoutCurriculumInput, ContactInfoUncheckedCreateWithoutCurriculumInput>
  }

  export type AcademicInfoCreateWithoutCurriculumInput = {
    title: string
    singleton?: boolean
    items?: AcademicInfoItemCreateNestedManyWithoutAcademicInfoInput
  }

  export type AcademicInfoUncheckedCreateWithoutCurriculumInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: AcademicInfoItemUncheckedCreateNestedManyWithoutAcademicInfoInput
  }

  export type AcademicInfoCreateOrConnectWithoutCurriculumInput = {
    where: AcademicInfoWhereUniqueInput
    create: XOR<AcademicInfoCreateWithoutCurriculumInput, AcademicInfoUncheckedCreateWithoutCurriculumInput>
  }

  export type TeachingInfoCreateWithoutCurriculumInput = {
    title: string
    singleton?: boolean
    items?: TeachingInfoItemCreateNestedManyWithoutTeachingInfoInput
  }

  export type TeachingInfoUncheckedCreateWithoutCurriculumInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: TeachingInfoItemUncheckedCreateNestedManyWithoutTeachingInfoInput
  }

  export type TeachingInfoCreateOrConnectWithoutCurriculumInput = {
    where: TeachingInfoWhereUniqueInput
    create: XOR<TeachingInfoCreateWithoutCurriculumInput, TeachingInfoUncheckedCreateWithoutCurriculumInput>
  }

  export type ExperienceInfoCreateWithoutCurriculumInput = {
    title: string
    singleton?: boolean
    items?: ExperienceInfoItemCreateNestedManyWithoutExperienceInfoInput
  }

  export type ExperienceInfoUncheckedCreateWithoutCurriculumInput = {
    id?: number
    title: string
    singleton?: boolean
    items?: ExperienceInfoItemUncheckedCreateNestedManyWithoutExperienceInfoInput
  }

  export type ExperienceInfoCreateOrConnectWithoutCurriculumInput = {
    where: ExperienceInfoWhereUniqueInput
    create: XOR<ExperienceInfoCreateWithoutCurriculumInput, ExperienceInfoUncheckedCreateWithoutCurriculumInput>
  }

  export type ContactInfoUpsertWithoutCurriculumInput = {
    update: XOR<ContactInfoUpdateWithoutCurriculumInput, ContactInfoUncheckedUpdateWithoutCurriculumInput>
    create: XOR<ContactInfoCreateWithoutCurriculumInput, ContactInfoUncheckedCreateWithoutCurriculumInput>
    where?: ContactInfoWhereInput
  }

  export type ContactInfoUpdateToOneWithWhereWithoutCurriculumInput = {
    where?: ContactInfoWhereInput
    data: XOR<ContactInfoUpdateWithoutCurriculumInput, ContactInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type ContactInfoUpdateWithoutCurriculumInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ContactInfoItemUpdateManyWithoutContactInfoNestedInput
  }

  export type ContactInfoUncheckedUpdateWithoutCurriculumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ContactInfoItemUncheckedUpdateManyWithoutContactInfoNestedInput
  }

  export type AcademicInfoUpsertWithoutCurriculumInput = {
    update: XOR<AcademicInfoUpdateWithoutCurriculumInput, AcademicInfoUncheckedUpdateWithoutCurriculumInput>
    create: XOR<AcademicInfoCreateWithoutCurriculumInput, AcademicInfoUncheckedCreateWithoutCurriculumInput>
    where?: AcademicInfoWhereInput
  }

  export type AcademicInfoUpdateToOneWithWhereWithoutCurriculumInput = {
    where?: AcademicInfoWhereInput
    data: XOR<AcademicInfoUpdateWithoutCurriculumInput, AcademicInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type AcademicInfoUpdateWithoutCurriculumInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: AcademicInfoItemUpdateManyWithoutAcademicInfoNestedInput
  }

  export type AcademicInfoUncheckedUpdateWithoutCurriculumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: AcademicInfoItemUncheckedUpdateManyWithoutAcademicInfoNestedInput
  }

  export type TeachingInfoUpsertWithoutCurriculumInput = {
    update: XOR<TeachingInfoUpdateWithoutCurriculumInput, TeachingInfoUncheckedUpdateWithoutCurriculumInput>
    create: XOR<TeachingInfoCreateWithoutCurriculumInput, TeachingInfoUncheckedCreateWithoutCurriculumInput>
    where?: TeachingInfoWhereInput
  }

  export type TeachingInfoUpdateToOneWithWhereWithoutCurriculumInput = {
    where?: TeachingInfoWhereInput
    data: XOR<TeachingInfoUpdateWithoutCurriculumInput, TeachingInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type TeachingInfoUpdateWithoutCurriculumInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: TeachingInfoItemUpdateManyWithoutTeachingInfoNestedInput
  }

  export type TeachingInfoUncheckedUpdateWithoutCurriculumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: TeachingInfoItemUncheckedUpdateManyWithoutTeachingInfoNestedInput
  }

  export type ExperienceInfoUpsertWithoutCurriculumInput = {
    update: XOR<ExperienceInfoUpdateWithoutCurriculumInput, ExperienceInfoUncheckedUpdateWithoutCurriculumInput>
    create: XOR<ExperienceInfoCreateWithoutCurriculumInput, ExperienceInfoUncheckedCreateWithoutCurriculumInput>
    where?: ExperienceInfoWhereInput
  }

  export type ExperienceInfoUpdateToOneWithWhereWithoutCurriculumInput = {
    where?: ExperienceInfoWhereInput
    data: XOR<ExperienceInfoUpdateWithoutCurriculumInput, ExperienceInfoUncheckedUpdateWithoutCurriculumInput>
  }

  export type ExperienceInfoUpdateWithoutCurriculumInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ExperienceInfoItemUpdateManyWithoutExperienceInfoNestedInput
  }

  export type ExperienceInfoUncheckedUpdateWithoutCurriculumInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    items?: ExperienceInfoItemUncheckedUpdateManyWithoutExperienceInfoNestedInput
  }

  export type ContactInfoItemCreateWithoutContactInfoInput = {
    label: string
    link: string
    platform?: string | null
  }

  export type ContactInfoItemUncheckedCreateWithoutContactInfoInput = {
    id?: number
    label: string
    link: string
    platform?: string | null
  }

  export type ContactInfoItemCreateOrConnectWithoutContactInfoInput = {
    where: ContactInfoItemWhereUniqueInput
    create: XOR<ContactInfoItemCreateWithoutContactInfoInput, ContactInfoItemUncheckedCreateWithoutContactInfoInput>
  }

  export type ContactInfoItemCreateManyContactInfoInputEnvelope = {
    data: ContactInfoItemCreateManyContactInfoInput | ContactInfoItemCreateManyContactInfoInput[]
    skipDuplicates?: boolean
  }

  export type CurriculumCreateWithoutContactInfoInput = {
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    academicInfo?: AcademicInfoCreateNestedOneWithoutCurriculumInput
    teachingInfo?: TeachingInfoCreateNestedOneWithoutCurriculumInput
    experienceInfo?: ExperienceInfoCreateNestedOneWithoutCurriculumInput
  }

  export type CurriculumUncheckedCreateWithoutContactInfoInput = {
    id?: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    academicInfoId?: number | null
    teachingInfoId?: number | null
    experienceInfoId?: number | null
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculumCreateOrConnectWithoutContactInfoInput = {
    where: CurriculumWhereUniqueInput
    create: XOR<CurriculumCreateWithoutContactInfoInput, CurriculumUncheckedCreateWithoutContactInfoInput>
  }

  export type ContactInfoItemUpsertWithWhereUniqueWithoutContactInfoInput = {
    where: ContactInfoItemWhereUniqueInput
    update: XOR<ContactInfoItemUpdateWithoutContactInfoInput, ContactInfoItemUncheckedUpdateWithoutContactInfoInput>
    create: XOR<ContactInfoItemCreateWithoutContactInfoInput, ContactInfoItemUncheckedCreateWithoutContactInfoInput>
  }

  export type ContactInfoItemUpdateWithWhereUniqueWithoutContactInfoInput = {
    where: ContactInfoItemWhereUniqueInput
    data: XOR<ContactInfoItemUpdateWithoutContactInfoInput, ContactInfoItemUncheckedUpdateWithoutContactInfoInput>
  }

  export type ContactInfoItemUpdateManyWithWhereWithoutContactInfoInput = {
    where: ContactInfoItemScalarWhereInput
    data: XOR<ContactInfoItemUpdateManyMutationInput, ContactInfoItemUncheckedUpdateManyWithoutContactInfoInput>
  }

  export type ContactInfoItemScalarWhereInput = {
    AND?: ContactInfoItemScalarWhereInput | ContactInfoItemScalarWhereInput[]
    OR?: ContactInfoItemScalarWhereInput[]
    NOT?: ContactInfoItemScalarWhereInput | ContactInfoItemScalarWhereInput[]
    id?: IntFilter<"ContactInfoItem"> | number
    label?: StringFilter<"ContactInfoItem"> | string
    link?: StringFilter<"ContactInfoItem"> | string
    platform?: StringNullableFilter<"ContactInfoItem"> | string | null
    contactInfoId?: IntFilter<"ContactInfoItem"> | number
  }

  export type CurriculumUpsertWithoutContactInfoInput = {
    update: XOR<CurriculumUpdateWithoutContactInfoInput, CurriculumUncheckedUpdateWithoutContactInfoInput>
    create: XOR<CurriculumCreateWithoutContactInfoInput, CurriculumUncheckedCreateWithoutContactInfoInput>
    where?: CurriculumWhereInput
  }

  export type CurriculumUpdateToOneWithWhereWithoutContactInfoInput = {
    where?: CurriculumWhereInput
    data: XOR<CurriculumUpdateWithoutContactInfoInput, CurriculumUncheckedUpdateWithoutContactInfoInput>
  }

  export type CurriculumUpdateWithoutContactInfoInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    academicInfo?: AcademicInfoUpdateOneWithoutCurriculumNestedInput
    teachingInfo?: TeachingInfoUpdateOneWithoutCurriculumNestedInput
    experienceInfo?: ExperienceInfoUpdateOneWithoutCurriculumNestedInput
  }

  export type CurriculumUncheckedUpdateWithoutContactInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    academicInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    teachingInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    experienceInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoCreateWithoutItemsInput = {
    title: string
    singleton?: boolean
    curriculum?: CurriculumCreateNestedOneWithoutContactInfoInput
  }

  export type ContactInfoUncheckedCreateWithoutItemsInput = {
    id?: number
    title: string
    singleton?: boolean
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutContactInfoInput
  }

  export type ContactInfoCreateOrConnectWithoutItemsInput = {
    where: ContactInfoWhereUniqueInput
    create: XOR<ContactInfoCreateWithoutItemsInput, ContactInfoUncheckedCreateWithoutItemsInput>
  }

  export type ContactInfoUpsertWithoutItemsInput = {
    update: XOR<ContactInfoUpdateWithoutItemsInput, ContactInfoUncheckedUpdateWithoutItemsInput>
    create: XOR<ContactInfoCreateWithoutItemsInput, ContactInfoUncheckedCreateWithoutItemsInput>
    where?: ContactInfoWhereInput
  }

  export type ContactInfoUpdateToOneWithWhereWithoutItemsInput = {
    where?: ContactInfoWhereInput
    data: XOR<ContactInfoUpdateWithoutItemsInput, ContactInfoUncheckedUpdateWithoutItemsInput>
  }

  export type ContactInfoUpdateWithoutItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUpdateOneWithoutContactInfoNestedInput
  }

  export type ContactInfoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUncheckedUpdateOneWithoutContactInfoNestedInput
  }

  export type AcademicInfoItemCreateWithoutAcademicInfoInput = {
    description: string
  }

  export type AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput = {
    id?: number
    description: string
  }

  export type AcademicInfoItemCreateOrConnectWithoutAcademicInfoInput = {
    where: AcademicInfoItemWhereUniqueInput
    create: XOR<AcademicInfoItemCreateWithoutAcademicInfoInput, AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput>
  }

  export type AcademicInfoItemCreateManyAcademicInfoInputEnvelope = {
    data: AcademicInfoItemCreateManyAcademicInfoInput | AcademicInfoItemCreateManyAcademicInfoInput[]
    skipDuplicates?: boolean
  }

  export type CurriculumCreateWithoutAcademicInfoInput = {
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contactInfo?: ContactInfoCreateNestedOneWithoutCurriculumInput
    teachingInfo?: TeachingInfoCreateNestedOneWithoutCurriculumInput
    experienceInfo?: ExperienceInfoCreateNestedOneWithoutCurriculumInput
  }

  export type CurriculumUncheckedCreateWithoutAcademicInfoInput = {
    id?: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    contactInfoId?: number | null
    teachingInfoId?: number | null
    experienceInfoId?: number | null
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculumCreateOrConnectWithoutAcademicInfoInput = {
    where: CurriculumWhereUniqueInput
    create: XOR<CurriculumCreateWithoutAcademicInfoInput, CurriculumUncheckedCreateWithoutAcademicInfoInput>
  }

  export type AcademicInfoItemUpsertWithWhereUniqueWithoutAcademicInfoInput = {
    where: AcademicInfoItemWhereUniqueInput
    update: XOR<AcademicInfoItemUpdateWithoutAcademicInfoInput, AcademicInfoItemUncheckedUpdateWithoutAcademicInfoInput>
    create: XOR<AcademicInfoItemCreateWithoutAcademicInfoInput, AcademicInfoItemUncheckedCreateWithoutAcademicInfoInput>
  }

  export type AcademicInfoItemUpdateWithWhereUniqueWithoutAcademicInfoInput = {
    where: AcademicInfoItemWhereUniqueInput
    data: XOR<AcademicInfoItemUpdateWithoutAcademicInfoInput, AcademicInfoItemUncheckedUpdateWithoutAcademicInfoInput>
  }

  export type AcademicInfoItemUpdateManyWithWhereWithoutAcademicInfoInput = {
    where: AcademicInfoItemScalarWhereInput
    data: XOR<AcademicInfoItemUpdateManyMutationInput, AcademicInfoItemUncheckedUpdateManyWithoutAcademicInfoInput>
  }

  export type AcademicInfoItemScalarWhereInput = {
    AND?: AcademicInfoItemScalarWhereInput | AcademicInfoItemScalarWhereInput[]
    OR?: AcademicInfoItemScalarWhereInput[]
    NOT?: AcademicInfoItemScalarWhereInput | AcademicInfoItemScalarWhereInput[]
    id?: IntFilter<"AcademicInfoItem"> | number
    description?: StringFilter<"AcademicInfoItem"> | string
    academicInfoId?: IntFilter<"AcademicInfoItem"> | number
  }

  export type CurriculumUpsertWithoutAcademicInfoInput = {
    update: XOR<CurriculumUpdateWithoutAcademicInfoInput, CurriculumUncheckedUpdateWithoutAcademicInfoInput>
    create: XOR<CurriculumCreateWithoutAcademicInfoInput, CurriculumUncheckedCreateWithoutAcademicInfoInput>
    where?: CurriculumWhereInput
  }

  export type CurriculumUpdateToOneWithWhereWithoutAcademicInfoInput = {
    where?: CurriculumWhereInput
    data: XOR<CurriculumUpdateWithoutAcademicInfoInput, CurriculumUncheckedUpdateWithoutAcademicInfoInput>
  }

  export type CurriculumUpdateWithoutAcademicInfoInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactInfo?: ContactInfoUpdateOneWithoutCurriculumNestedInput
    teachingInfo?: TeachingInfoUpdateOneWithoutCurriculumNestedInput
    experienceInfo?: ExperienceInfoUpdateOneWithoutCurriculumNestedInput
  }

  export type CurriculumUncheckedUpdateWithoutAcademicInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    contactInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    teachingInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    experienceInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicInfoCreateWithoutItemsInput = {
    title: string
    singleton?: boolean
    curriculum?: CurriculumCreateNestedOneWithoutAcademicInfoInput
  }

  export type AcademicInfoUncheckedCreateWithoutItemsInput = {
    id?: number
    title: string
    singleton?: boolean
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutAcademicInfoInput
  }

  export type AcademicInfoCreateOrConnectWithoutItemsInput = {
    where: AcademicInfoWhereUniqueInput
    create: XOR<AcademicInfoCreateWithoutItemsInput, AcademicInfoUncheckedCreateWithoutItemsInput>
  }

  export type AcademicInfoUpsertWithoutItemsInput = {
    update: XOR<AcademicInfoUpdateWithoutItemsInput, AcademicInfoUncheckedUpdateWithoutItemsInput>
    create: XOR<AcademicInfoCreateWithoutItemsInput, AcademicInfoUncheckedCreateWithoutItemsInput>
    where?: AcademicInfoWhereInput
  }

  export type AcademicInfoUpdateToOneWithWhereWithoutItemsInput = {
    where?: AcademicInfoWhereInput
    data: XOR<AcademicInfoUpdateWithoutItemsInput, AcademicInfoUncheckedUpdateWithoutItemsInput>
  }

  export type AcademicInfoUpdateWithoutItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUpdateOneWithoutAcademicInfoNestedInput
  }

  export type AcademicInfoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUncheckedUpdateOneWithoutAcademicInfoNestedInput
  }

  export type TeachingInfoItemCreateWithoutTeachingInfoInput = {
    description: string
  }

  export type TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput = {
    id?: number
    description: string
  }

  export type TeachingInfoItemCreateOrConnectWithoutTeachingInfoInput = {
    where: TeachingInfoItemWhereUniqueInput
    create: XOR<TeachingInfoItemCreateWithoutTeachingInfoInput, TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput>
  }

  export type TeachingInfoItemCreateManyTeachingInfoInputEnvelope = {
    data: TeachingInfoItemCreateManyTeachingInfoInput | TeachingInfoItemCreateManyTeachingInfoInput[]
    skipDuplicates?: boolean
  }

  export type CurriculumCreateWithoutTeachingInfoInput = {
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contactInfo?: ContactInfoCreateNestedOneWithoutCurriculumInput
    academicInfo?: AcademicInfoCreateNestedOneWithoutCurriculumInput
    experienceInfo?: ExperienceInfoCreateNestedOneWithoutCurriculumInput
  }

  export type CurriculumUncheckedCreateWithoutTeachingInfoInput = {
    id?: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    contactInfoId?: number | null
    academicInfoId?: number | null
    experienceInfoId?: number | null
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculumCreateOrConnectWithoutTeachingInfoInput = {
    where: CurriculumWhereUniqueInput
    create: XOR<CurriculumCreateWithoutTeachingInfoInput, CurriculumUncheckedCreateWithoutTeachingInfoInput>
  }

  export type TeachingInfoItemUpsertWithWhereUniqueWithoutTeachingInfoInput = {
    where: TeachingInfoItemWhereUniqueInput
    update: XOR<TeachingInfoItemUpdateWithoutTeachingInfoInput, TeachingInfoItemUncheckedUpdateWithoutTeachingInfoInput>
    create: XOR<TeachingInfoItemCreateWithoutTeachingInfoInput, TeachingInfoItemUncheckedCreateWithoutTeachingInfoInput>
  }

  export type TeachingInfoItemUpdateWithWhereUniqueWithoutTeachingInfoInput = {
    where: TeachingInfoItemWhereUniqueInput
    data: XOR<TeachingInfoItemUpdateWithoutTeachingInfoInput, TeachingInfoItemUncheckedUpdateWithoutTeachingInfoInput>
  }

  export type TeachingInfoItemUpdateManyWithWhereWithoutTeachingInfoInput = {
    where: TeachingInfoItemScalarWhereInput
    data: XOR<TeachingInfoItemUpdateManyMutationInput, TeachingInfoItemUncheckedUpdateManyWithoutTeachingInfoInput>
  }

  export type TeachingInfoItemScalarWhereInput = {
    AND?: TeachingInfoItemScalarWhereInput | TeachingInfoItemScalarWhereInput[]
    OR?: TeachingInfoItemScalarWhereInput[]
    NOT?: TeachingInfoItemScalarWhereInput | TeachingInfoItemScalarWhereInput[]
    id?: IntFilter<"TeachingInfoItem"> | number
    description?: StringFilter<"TeachingInfoItem"> | string
    teachingInfoId?: IntFilter<"TeachingInfoItem"> | number
  }

  export type CurriculumUpsertWithoutTeachingInfoInput = {
    update: XOR<CurriculumUpdateWithoutTeachingInfoInput, CurriculumUncheckedUpdateWithoutTeachingInfoInput>
    create: XOR<CurriculumCreateWithoutTeachingInfoInput, CurriculumUncheckedCreateWithoutTeachingInfoInput>
    where?: CurriculumWhereInput
  }

  export type CurriculumUpdateToOneWithWhereWithoutTeachingInfoInput = {
    where?: CurriculumWhereInput
    data: XOR<CurriculumUpdateWithoutTeachingInfoInput, CurriculumUncheckedUpdateWithoutTeachingInfoInput>
  }

  export type CurriculumUpdateWithoutTeachingInfoInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactInfo?: ContactInfoUpdateOneWithoutCurriculumNestedInput
    academicInfo?: AcademicInfoUpdateOneWithoutCurriculumNestedInput
    experienceInfo?: ExperienceInfoUpdateOneWithoutCurriculumNestedInput
  }

  export type CurriculumUncheckedUpdateWithoutTeachingInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    contactInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    academicInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    experienceInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeachingInfoCreateWithoutItemsInput = {
    title: string
    singleton?: boolean
    curriculum?: CurriculumCreateNestedOneWithoutTeachingInfoInput
  }

  export type TeachingInfoUncheckedCreateWithoutItemsInput = {
    id?: number
    title: string
    singleton?: boolean
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutTeachingInfoInput
  }

  export type TeachingInfoCreateOrConnectWithoutItemsInput = {
    where: TeachingInfoWhereUniqueInput
    create: XOR<TeachingInfoCreateWithoutItemsInput, TeachingInfoUncheckedCreateWithoutItemsInput>
  }

  export type TeachingInfoUpsertWithoutItemsInput = {
    update: XOR<TeachingInfoUpdateWithoutItemsInput, TeachingInfoUncheckedUpdateWithoutItemsInput>
    create: XOR<TeachingInfoCreateWithoutItemsInput, TeachingInfoUncheckedCreateWithoutItemsInput>
    where?: TeachingInfoWhereInput
  }

  export type TeachingInfoUpdateToOneWithWhereWithoutItemsInput = {
    where?: TeachingInfoWhereInput
    data: XOR<TeachingInfoUpdateWithoutItemsInput, TeachingInfoUncheckedUpdateWithoutItemsInput>
  }

  export type TeachingInfoUpdateWithoutItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUpdateOneWithoutTeachingInfoNestedInput
  }

  export type TeachingInfoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUncheckedUpdateOneWithoutTeachingInfoNestedInput
  }

  export type ExperienceInfoItemCreateWithoutExperienceInfoInput = {
    description: string
  }

  export type ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput = {
    id?: number
    description: string
  }

  export type ExperienceInfoItemCreateOrConnectWithoutExperienceInfoInput = {
    where: ExperienceInfoItemWhereUniqueInput
    create: XOR<ExperienceInfoItemCreateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput>
  }

  export type ExperienceInfoItemCreateManyExperienceInfoInputEnvelope = {
    data: ExperienceInfoItemCreateManyExperienceInfoInput | ExperienceInfoItemCreateManyExperienceInfoInput[]
    skipDuplicates?: boolean
  }

  export type CurriculumCreateWithoutExperienceInfoInput = {
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contactInfo?: ContactInfoCreateNestedOneWithoutCurriculumInput
    academicInfo?: AcademicInfoCreateNestedOneWithoutCurriculumInput
    teachingInfo?: TeachingInfoCreateNestedOneWithoutCurriculumInput
  }

  export type CurriculumUncheckedCreateWithoutExperienceInfoInput = {
    id?: number
    firstname: string
    lastname: string
    jobTitle: string
    credential: string
    profileImage: string
    contactInfoId?: number | null
    academicInfoId?: number | null
    teachingInfoId?: number | null
    singleton?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CurriculumCreateOrConnectWithoutExperienceInfoInput = {
    where: CurriculumWhereUniqueInput
    create: XOR<CurriculumCreateWithoutExperienceInfoInput, CurriculumUncheckedCreateWithoutExperienceInfoInput>
  }

  export type ExperienceInfoItemUpsertWithWhereUniqueWithoutExperienceInfoInput = {
    where: ExperienceInfoItemWhereUniqueInput
    update: XOR<ExperienceInfoItemUpdateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedUpdateWithoutExperienceInfoInput>
    create: XOR<ExperienceInfoItemCreateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedCreateWithoutExperienceInfoInput>
  }

  export type ExperienceInfoItemUpdateWithWhereUniqueWithoutExperienceInfoInput = {
    where: ExperienceInfoItemWhereUniqueInput
    data: XOR<ExperienceInfoItemUpdateWithoutExperienceInfoInput, ExperienceInfoItemUncheckedUpdateWithoutExperienceInfoInput>
  }

  export type ExperienceInfoItemUpdateManyWithWhereWithoutExperienceInfoInput = {
    where: ExperienceInfoItemScalarWhereInput
    data: XOR<ExperienceInfoItemUpdateManyMutationInput, ExperienceInfoItemUncheckedUpdateManyWithoutExperienceInfoInput>
  }

  export type ExperienceInfoItemScalarWhereInput = {
    AND?: ExperienceInfoItemScalarWhereInput | ExperienceInfoItemScalarWhereInput[]
    OR?: ExperienceInfoItemScalarWhereInput[]
    NOT?: ExperienceInfoItemScalarWhereInput | ExperienceInfoItemScalarWhereInput[]
    id?: IntFilter<"ExperienceInfoItem"> | number
    description?: StringFilter<"ExperienceInfoItem"> | string
    experienceInfoId?: IntFilter<"ExperienceInfoItem"> | number
  }

  export type CurriculumUpsertWithoutExperienceInfoInput = {
    update: XOR<CurriculumUpdateWithoutExperienceInfoInput, CurriculumUncheckedUpdateWithoutExperienceInfoInput>
    create: XOR<CurriculumCreateWithoutExperienceInfoInput, CurriculumUncheckedCreateWithoutExperienceInfoInput>
    where?: CurriculumWhereInput
  }

  export type CurriculumUpdateToOneWithWhereWithoutExperienceInfoInput = {
    where?: CurriculumWhereInput
    data: XOR<CurriculumUpdateWithoutExperienceInfoInput, CurriculumUncheckedUpdateWithoutExperienceInfoInput>
  }

  export type CurriculumUpdateWithoutExperienceInfoInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contactInfo?: ContactInfoUpdateOneWithoutCurriculumNestedInput
    academicInfo?: AcademicInfoUpdateOneWithoutCurriculumNestedInput
    teachingInfo?: TeachingInfoUpdateOneWithoutCurriculumNestedInput
  }

  export type CurriculumUncheckedUpdateWithoutExperienceInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    credential?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    contactInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    academicInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    teachingInfoId?: NullableIntFieldUpdateOperationsInput | number | null
    singleton?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceInfoCreateWithoutItemsInput = {
    title: string
    singleton?: boolean
    curriculum?: CurriculumCreateNestedOneWithoutExperienceInfoInput
  }

  export type ExperienceInfoUncheckedCreateWithoutItemsInput = {
    id?: number
    title: string
    singleton?: boolean
    curriculum?: CurriculumUncheckedCreateNestedOneWithoutExperienceInfoInput
  }

  export type ExperienceInfoCreateOrConnectWithoutItemsInput = {
    where: ExperienceInfoWhereUniqueInput
    create: XOR<ExperienceInfoCreateWithoutItemsInput, ExperienceInfoUncheckedCreateWithoutItemsInput>
  }

  export type ExperienceInfoUpsertWithoutItemsInput = {
    update: XOR<ExperienceInfoUpdateWithoutItemsInput, ExperienceInfoUncheckedUpdateWithoutItemsInput>
    create: XOR<ExperienceInfoCreateWithoutItemsInput, ExperienceInfoUncheckedCreateWithoutItemsInput>
    where?: ExperienceInfoWhereInput
  }

  export type ExperienceInfoUpdateToOneWithWhereWithoutItemsInput = {
    where?: ExperienceInfoWhereInput
    data: XOR<ExperienceInfoUpdateWithoutItemsInput, ExperienceInfoUncheckedUpdateWithoutItemsInput>
  }

  export type ExperienceInfoUpdateWithoutItemsInput = {
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUpdateOneWithoutExperienceInfoNestedInput
  }

  export type ExperienceInfoUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    singleton?: BoolFieldUpdateOperationsInput | boolean
    curriculum?: CurriculumUncheckedUpdateOneWithoutExperienceInfoNestedInput
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    category?: $Enums.PostCategory
    title: string
    text: string
    image: string
    references?: PostCreatereferencesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    category?: EnumPostCategoryFieldUpdateOperationsInput | $Enums.PostCategory
    title?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    references?: PostUpdatereferencesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoItemCreateManyContactInfoInput = {
    id?: number
    label: string
    link: string
    platform?: string | null
  }

  export type ContactInfoItemUpdateWithoutContactInfoInput = {
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoItemUncheckedUpdateWithoutContactInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactInfoItemUncheckedUpdateManyWithoutContactInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    platform?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AcademicInfoItemCreateManyAcademicInfoInput = {
    id?: number
    description: string
  }

  export type AcademicInfoItemUpdateWithoutAcademicInfoInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicInfoItemUncheckedUpdateWithoutAcademicInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type AcademicInfoItemUncheckedUpdateManyWithoutAcademicInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingInfoItemCreateManyTeachingInfoInput = {
    id?: number
    description: string
  }

  export type TeachingInfoItemUpdateWithoutTeachingInfoInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingInfoItemUncheckedUpdateWithoutTeachingInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TeachingInfoItemUncheckedUpdateManyWithoutTeachingInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceInfoItemCreateManyExperienceInfoInput = {
    id?: number
    description: string
  }

  export type ExperienceInfoItemUpdateWithoutExperienceInfoInput = {
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceInfoItemUncheckedUpdateWithoutExperienceInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceInfoItemUncheckedUpdateManyWithoutExperienceInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}