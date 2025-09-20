
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Identity
 * 
 */
export type Identity = $Result.DefaultSelection<Prisma.$IdentityPayload>
/**
 * Model IdentityAttribute
 * 
 */
export type IdentityAttribute = $Result.DefaultSelection<Prisma.$IdentityAttributePayload>
/**
 * Model SharedIdentity
 * 
 */
export type SharedIdentity = $Result.DefaultSelection<Prisma.$SharedIdentityPayload>
/**
 * Model SharedLink
 * 
 */
export type SharedLink = $Result.DefaultSelection<Prisma.$SharedLinkPayload>
/**
 * Model SharedLinkAccess
 * 
 */
export type SharedLinkAccess = $Result.DefaultSelection<Prisma.$SharedLinkAccessPayload>
/**
 * Model IdentityRequest
 * 
 */
export type IdentityRequest = $Result.DefaultSelection<Prisma.$IdentityRequestPayload>
/**
 * Model Context
 * 
 */
export type Context = $Result.DefaultSelection<Prisma.$ContextPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  EXPIRED: 'EXPIRED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

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
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identity`: Exposes CRUD operations for the **Identity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Identities
    * const identities = await prisma.identity.findMany()
    * ```
    */
  get identity(): Prisma.IdentityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identityAttribute`: Exposes CRUD operations for the **IdentityAttribute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdentityAttributes
    * const identityAttributes = await prisma.identityAttribute.findMany()
    * ```
    */
  get identityAttribute(): Prisma.IdentityAttributeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedIdentity`: Exposes CRUD operations for the **SharedIdentity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedIdentities
    * const sharedIdentities = await prisma.sharedIdentity.findMany()
    * ```
    */
  get sharedIdentity(): Prisma.SharedIdentityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedLink`: Exposes CRUD operations for the **SharedLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedLinks
    * const sharedLinks = await prisma.sharedLink.findMany()
    * ```
    */
  get sharedLink(): Prisma.SharedLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharedLinkAccess`: Exposes CRUD operations for the **SharedLinkAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharedLinkAccesses
    * const sharedLinkAccesses = await prisma.sharedLinkAccess.findMany()
    * ```
    */
  get sharedLinkAccess(): Prisma.SharedLinkAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.identityRequest`: Exposes CRUD operations for the **IdentityRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IdentityRequests
    * const identityRequests = await prisma.identityRequest.findMany()
    * ```
    */
  get identityRequest(): Prisma.IdentityRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.context`: Exposes CRUD operations for the **Context** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contexts
    * const contexts = await prisma.context.findMany()
    * ```
    */
  get context(): Prisma.ContextDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Session: 'Session',
    Identity: 'Identity',
    IdentityAttribute: 'IdentityAttribute',
    SharedIdentity: 'SharedIdentity',
    SharedLink: 'SharedLink',
    SharedLinkAccess: 'SharedLinkAccess',
    IdentityRequest: 'IdentityRequest',
    Context: 'Context'
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
      modelProps: "user" | "session" | "identity" | "identityAttribute" | "sharedIdentity" | "sharedLink" | "sharedLinkAccess" | "identityRequest" | "context"
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Identity: {
        payload: Prisma.$IdentityPayload<ExtArgs>
        fields: Prisma.IdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          findFirst: {
            args: Prisma.IdentityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          findMany: {
            args: Prisma.IdentityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>[]
          }
          create: {
            args: Prisma.IdentityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          createMany: {
            args: Prisma.IdentityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>[]
          }
          delete: {
            args: Prisma.IdentityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          update: {
            args: Prisma.IdentityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          deleteMany: {
            args: Prisma.IdentityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>[]
          }
          upsert: {
            args: Prisma.IdentityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityPayload>
          }
          aggregate: {
            args: Prisma.IdentityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentity>
          }
          groupBy: {
            args: Prisma.IdentityGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentityCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityCountAggregateOutputType> | number
          }
        }
      }
      IdentityAttribute: {
        payload: Prisma.$IdentityAttributePayload<ExtArgs>
        fields: Prisma.IdentityAttributeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentityAttributeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentityAttributeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>
          }
          findFirst: {
            args: Prisma.IdentityAttributeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentityAttributeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>
          }
          findMany: {
            args: Prisma.IdentityAttributeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>[]
          }
          create: {
            args: Prisma.IdentityAttributeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>
          }
          createMany: {
            args: Prisma.IdentityAttributeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentityAttributeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>[]
          }
          delete: {
            args: Prisma.IdentityAttributeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>
          }
          update: {
            args: Prisma.IdentityAttributeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>
          }
          deleteMany: {
            args: Prisma.IdentityAttributeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentityAttributeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentityAttributeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>[]
          }
          upsert: {
            args: Prisma.IdentityAttributeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityAttributePayload>
          }
          aggregate: {
            args: Prisma.IdentityAttributeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentityAttribute>
          }
          groupBy: {
            args: Prisma.IdentityAttributeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityAttributeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentityAttributeCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityAttributeCountAggregateOutputType> | number
          }
        }
      }
      SharedIdentity: {
        payload: Prisma.$SharedIdentityPayload<ExtArgs>
        fields: Prisma.SharedIdentityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedIdentityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedIdentityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>
          }
          findFirst: {
            args: Prisma.SharedIdentityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedIdentityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>
          }
          findMany: {
            args: Prisma.SharedIdentityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>[]
          }
          create: {
            args: Prisma.SharedIdentityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>
          }
          createMany: {
            args: Prisma.SharedIdentityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedIdentityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>[]
          }
          delete: {
            args: Prisma.SharedIdentityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>
          }
          update: {
            args: Prisma.SharedIdentityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>
          }
          deleteMany: {
            args: Prisma.SharedIdentityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedIdentityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedIdentityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>[]
          }
          upsert: {
            args: Prisma.SharedIdentityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedIdentityPayload>
          }
          aggregate: {
            args: Prisma.SharedIdentityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedIdentity>
          }
          groupBy: {
            args: Prisma.SharedIdentityGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedIdentityGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedIdentityCountArgs<ExtArgs>
            result: $Utils.Optional<SharedIdentityCountAggregateOutputType> | number
          }
        }
      }
      SharedLink: {
        payload: Prisma.$SharedLinkPayload<ExtArgs>
        fields: Prisma.SharedLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>
          }
          findFirst: {
            args: Prisma.SharedLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>
          }
          findMany: {
            args: Prisma.SharedLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>[]
          }
          create: {
            args: Prisma.SharedLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>
          }
          createMany: {
            args: Prisma.SharedLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>[]
          }
          delete: {
            args: Prisma.SharedLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>
          }
          update: {
            args: Prisma.SharedLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>
          }
          deleteMany: {
            args: Prisma.SharedLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>[]
          }
          upsert: {
            args: Prisma.SharedLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkPayload>
          }
          aggregate: {
            args: Prisma.SharedLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedLink>
          }
          groupBy: {
            args: Prisma.SharedLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SharedLinkCountAggregateOutputType> | number
          }
        }
      }
      SharedLinkAccess: {
        payload: Prisma.$SharedLinkAccessPayload<ExtArgs>
        fields: Prisma.SharedLinkAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharedLinkAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharedLinkAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>
          }
          findFirst: {
            args: Prisma.SharedLinkAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharedLinkAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>
          }
          findMany: {
            args: Prisma.SharedLinkAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>[]
          }
          create: {
            args: Prisma.SharedLinkAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>
          }
          createMany: {
            args: Prisma.SharedLinkAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharedLinkAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>[]
          }
          delete: {
            args: Prisma.SharedLinkAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>
          }
          update: {
            args: Prisma.SharedLinkAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>
          }
          deleteMany: {
            args: Prisma.SharedLinkAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharedLinkAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharedLinkAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>[]
          }
          upsert: {
            args: Prisma.SharedLinkAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharedLinkAccessPayload>
          }
          aggregate: {
            args: Prisma.SharedLinkAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharedLinkAccess>
          }
          groupBy: {
            args: Prisma.SharedLinkAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharedLinkAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharedLinkAccessCountArgs<ExtArgs>
            result: $Utils.Optional<SharedLinkAccessCountAggregateOutputType> | number
          }
        }
      }
      IdentityRequest: {
        payload: Prisma.$IdentityRequestPayload<ExtArgs>
        fields: Prisma.IdentityRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IdentityRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IdentityRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>
          }
          findFirst: {
            args: Prisma.IdentityRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IdentityRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>
          }
          findMany: {
            args: Prisma.IdentityRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>[]
          }
          create: {
            args: Prisma.IdentityRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>
          }
          createMany: {
            args: Prisma.IdentityRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IdentityRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>[]
          }
          delete: {
            args: Prisma.IdentityRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>
          }
          update: {
            args: Prisma.IdentityRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>
          }
          deleteMany: {
            args: Prisma.IdentityRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IdentityRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IdentityRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>[]
          }
          upsert: {
            args: Prisma.IdentityRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IdentityRequestPayload>
          }
          aggregate: {
            args: Prisma.IdentityRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIdentityRequest>
          }
          groupBy: {
            args: Prisma.IdentityRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<IdentityRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.IdentityRequestCountArgs<ExtArgs>
            result: $Utils.Optional<IdentityRequestCountAggregateOutputType> | number
          }
        }
      }
      Context: {
        payload: Prisma.$ContextPayload<ExtArgs>
        fields: Prisma.ContextFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContextFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContextFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>
          }
          findFirst: {
            args: Prisma.ContextFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContextFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>
          }
          findMany: {
            args: Prisma.ContextFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>[]
          }
          create: {
            args: Prisma.ContextCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>
          }
          createMany: {
            args: Prisma.ContextCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContextCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>[]
          }
          delete: {
            args: Prisma.ContextDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>
          }
          update: {
            args: Prisma.ContextUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>
          }
          deleteMany: {
            args: Prisma.ContextDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContextUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContextUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>[]
          }
          upsert: {
            args: Prisma.ContextUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContextPayload>
          }
          aggregate: {
            args: Prisma.ContextAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContext>
          }
          groupBy: {
            args: Prisma.ContextGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContextGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContextCountArgs<ExtArgs>
            result: $Utils.Optional<ContextCountAggregateOutputType> | number
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
    session?: SessionOmit
    identity?: IdentityOmit
    identityAttribute?: IdentityAttributeOmit
    sharedIdentity?: SharedIdentityOmit
    sharedLink?: SharedLinkOmit
    sharedLinkAccess?: SharedLinkAccessOmit
    identityRequest?: IdentityRequestOmit
    context?: ContextOmit
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
    sessions: number
    identities: number
    sharedIdentities: number
    identityRequests: number
    sharedLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    identities?: boolean | UserCountOutputTypeCountIdentitiesArgs
    sharedIdentities?: boolean | UserCountOutputTypeCountSharedIdentitiesArgs
    identityRequests?: boolean | UserCountOutputTypeCountIdentityRequestsArgs
    sharedLinks?: boolean | UserCountOutputTypeCountSharedLinksArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIdentitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedIdentitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedIdentityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIdentityRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSharedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedLinkWhereInput
  }


  /**
   * Count Type IdentityCountOutputType
   */

  export type IdentityCountOutputType = {
    attributes: number
    sharedWith: number
    requests: number
    sharedLinks: number
  }

  export type IdentityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attributes?: boolean | IdentityCountOutputTypeCountAttributesArgs
    sharedWith?: boolean | IdentityCountOutputTypeCountSharedWithArgs
    requests?: boolean | IdentityCountOutputTypeCountRequestsArgs
    sharedLinks?: boolean | IdentityCountOutputTypeCountSharedLinksArgs
  }

  // Custom InputTypes
  /**
   * IdentityCountOutputType without action
   */
  export type IdentityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityCountOutputType
     */
    select?: IdentityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IdentityCountOutputType without action
   */
  export type IdentityCountOutputTypeCountAttributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityAttributeWhereInput
  }

  /**
   * IdentityCountOutputType without action
   */
  export type IdentityCountOutputTypeCountSharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedIdentityWhereInput
  }

  /**
   * IdentityCountOutputType without action
   */
  export type IdentityCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityRequestWhereInput
  }

  /**
   * IdentityCountOutputType without action
   */
  export type IdentityCountOutputTypeCountSharedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedLinkWhereInput
  }


  /**
   * Count Type SharedLinkCountOutputType
   */

  export type SharedLinkCountOutputType = {
    accesses: number
  }

  export type SharedLinkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accesses?: boolean | SharedLinkCountOutputTypeCountAccessesArgs
  }

  // Custom InputTypes
  /**
   * SharedLinkCountOutputType without action
   */
  export type SharedLinkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkCountOutputType
     */
    select?: SharedLinkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SharedLinkCountOutputType without action
   */
  export type SharedLinkCountOutputTypeCountAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedLinkAccessWhereInput
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
    email: string | null
    passwordHash: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    isAdmin: number
    createdAt: number
    updatedAt: number
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
    email?: true
    passwordHash?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    passwordHash: string
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    identities?: boolean | User$identitiesArgs<ExtArgs>
    sharedIdentities?: boolean | User$sharedIdentitiesArgs<ExtArgs>
    identityRequests?: boolean | User$identityRequestsArgs<ExtArgs>
    sharedLinks?: boolean | User$sharedLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "isAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    identities?: boolean | User$identitiesArgs<ExtArgs>
    sharedIdentities?: boolean | User$sharedIdentitiesArgs<ExtArgs>
    identityRequests?: boolean | User$identityRequestsArgs<ExtArgs>
    sharedLinks?: boolean | User$sharedLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      identities: Prisma.$IdentityPayload<ExtArgs>[]
      sharedIdentities: Prisma.$SharedIdentityPayload<ExtArgs>[]
      identityRequests: Prisma.$IdentityRequestPayload<ExtArgs>[]
      sharedLinks: Prisma.$SharedLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    identities<T extends User$identitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$identitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedIdentities<T extends User$sharedIdentitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedIdentitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    identityRequests<T extends User$identityRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$identityRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedLinks<T extends User$sharedLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$sharedLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.identities
   */
  export type User$identitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    where?: IdentityWhereInput
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    cursor?: IdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * User.sharedIdentities
   */
  export type User$sharedIdentitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    where?: SharedIdentityWhereInput
    orderBy?: SharedIdentityOrderByWithRelationInput | SharedIdentityOrderByWithRelationInput[]
    cursor?: SharedIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedIdentityScalarFieldEnum | SharedIdentityScalarFieldEnum[]
  }

  /**
   * User.identityRequests
   */
  export type User$identityRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    where?: IdentityRequestWhereInput
    orderBy?: IdentityRequestOrderByWithRelationInput | IdentityRequestOrderByWithRelationInput[]
    cursor?: IdentityRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdentityRequestScalarFieldEnum | IdentityRequestScalarFieldEnum[]
  }

  /**
   * User.sharedLinks
   */
  export type User$sharedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    where?: SharedLinkWhereInput
    orderBy?: SharedLinkOrderByWithRelationInput | SharedLinkOrderByWithRelationInput[]
    cursor?: SharedLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedLinkScalarFieldEnum | SharedLinkScalarFieldEnum[]
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
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    userId: number | null
  }

  export type SessionSumAggregateOutputType = {
    userId: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    userId?: true
  }

  export type SessionSumAggregateInputType = {
    userId?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: number
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expiresAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      expiresAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'Int'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Identity
   */

  export type AggregateIdentity = {
    _count: IdentityCountAggregateOutputType | null
    _avg: IdentityAvgAggregateOutputType | null
    _sum: IdentitySumAggregateOutputType | null
    _min: IdentityMinAggregateOutputType | null
    _max: IdentityMaxAggregateOutputType | null
  }

  export type IdentityAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IdentitySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type IdentityMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    description: string | null
    isDefault: boolean | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    isDefault: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IdentityAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IdentitySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type IdentityMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    isDefault?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Identity to aggregate.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Identities
    **/
    _count?: true | IdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityMaxAggregateInputType
  }

  export type GetIdentityAggregateType<T extends IdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentity[P]>
      : GetScalarType<T[P], AggregateIdentity[P]>
  }




  export type IdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityWhereInput
    orderBy?: IdentityOrderByWithAggregationInput | IdentityOrderByWithAggregationInput[]
    by: IdentityScalarFieldEnum[] | IdentityScalarFieldEnum
    having?: IdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityCountAggregateInputType | true
    _avg?: IdentityAvgAggregateInputType
    _sum?: IdentitySumAggregateInputType
    _min?: IdentityMinAggregateInputType
    _max?: IdentityMaxAggregateInputType
  }

  export type IdentityGroupByOutputType = {
    id: number
    userId: number
    name: string
    description: string | null
    isDefault: boolean
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: IdentityCountAggregateOutputType | null
    _avg: IdentityAvgAggregateOutputType | null
    _sum: IdentitySumAggregateOutputType | null
    _min: IdentityMinAggregateOutputType | null
    _max: IdentityMaxAggregateOutputType | null
  }

  type GetIdentityGroupByPayload<T extends IdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityGroupByOutputType[P]>
        }
      >
    >


  export type IdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    attributes?: boolean | Identity$attributesArgs<ExtArgs>
    sharedWith?: boolean | Identity$sharedWithArgs<ExtArgs>
    requests?: boolean | Identity$requestsArgs<ExtArgs>
    sharedLinks?: boolean | Identity$sharedLinksArgs<ExtArgs>
    _count?: boolean | IdentityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identity"]>

  export type IdentitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identity"]>

  export type IdentitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identity"]>

  export type IdentitySelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    isDefault?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IdentityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "isDefault" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["identity"]>
  export type IdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    attributes?: boolean | Identity$attributesArgs<ExtArgs>
    sharedWith?: boolean | Identity$sharedWithArgs<ExtArgs>
    requests?: boolean | Identity$requestsArgs<ExtArgs>
    sharedLinks?: boolean | Identity$sharedLinksArgs<ExtArgs>
    _count?: boolean | IdentityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IdentityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IdentityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Identity"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      attributes: Prisma.$IdentityAttributePayload<ExtArgs>[]
      sharedWith: Prisma.$SharedIdentityPayload<ExtArgs>[]
      requests: Prisma.$IdentityRequestPayload<ExtArgs>[]
      sharedLinks: Prisma.$SharedLinkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string
      description: string | null
      isDefault: boolean
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["identity"]>
    composites: {}
  }

  type IdentityGetPayload<S extends boolean | null | undefined | IdentityDefaultArgs> = $Result.GetResult<Prisma.$IdentityPayload, S>

  type IdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityCountAggregateInputType | true
    }

  export interface IdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Identity'], meta: { name: 'Identity' } }
    /**
     * Find zero or one Identity that matches the filter.
     * @param {IdentityFindUniqueArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentityFindUniqueArgs>(args: SelectSubset<T, IdentityFindUniqueArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Identity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentityFindUniqueOrThrowArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentityFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Identity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityFindFirstArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentityFindFirstArgs>(args?: SelectSubset<T, IdentityFindFirstArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Identity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityFindFirstOrThrowArgs} args - Arguments to find a Identity
     * @example
     * // Get one Identity
     * const identity = await prisma.identity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentityFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Identities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Identities
     * const identities = await prisma.identity.findMany()
     * 
     * // Get first 10 Identities
     * const identities = await prisma.identity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityWithIdOnly = await prisma.identity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentityFindManyArgs>(args?: SelectSubset<T, IdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Identity.
     * @param {IdentityCreateArgs} args - Arguments to create a Identity.
     * @example
     * // Create one Identity
     * const Identity = await prisma.identity.create({
     *   data: {
     *     // ... data to create a Identity
     *   }
     * })
     * 
     */
    create<T extends IdentityCreateArgs>(args: SelectSubset<T, IdentityCreateArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Identities.
     * @param {IdentityCreateManyArgs} args - Arguments to create many Identities.
     * @example
     * // Create many Identities
     * const identity = await prisma.identity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentityCreateManyArgs>(args?: SelectSubset<T, IdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Identities and returns the data saved in the database.
     * @param {IdentityCreateManyAndReturnArgs} args - Arguments to create many Identities.
     * @example
     * // Create many Identities
     * const identity = await prisma.identity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Identities and only return the `id`
     * const identityWithIdOnly = await prisma.identity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentityCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Identity.
     * @param {IdentityDeleteArgs} args - Arguments to delete one Identity.
     * @example
     * // Delete one Identity
     * const Identity = await prisma.identity.delete({
     *   where: {
     *     // ... filter to delete one Identity
     *   }
     * })
     * 
     */
    delete<T extends IdentityDeleteArgs>(args: SelectSubset<T, IdentityDeleteArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Identity.
     * @param {IdentityUpdateArgs} args - Arguments to update one Identity.
     * @example
     * // Update one Identity
     * const identity = await prisma.identity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentityUpdateArgs>(args: SelectSubset<T, IdentityUpdateArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Identities.
     * @param {IdentityDeleteManyArgs} args - Arguments to filter Identities to delete.
     * @example
     * // Delete a few Identities
     * const { count } = await prisma.identity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentityDeleteManyArgs>(args?: SelectSubset<T, IdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Identities
     * const identity = await prisma.identity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentityUpdateManyArgs>(args: SelectSubset<T, IdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Identities and returns the data updated in the database.
     * @param {IdentityUpdateManyAndReturnArgs} args - Arguments to update many Identities.
     * @example
     * // Update many Identities
     * const identity = await prisma.identity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Identities and only return the `id`
     * const identityWithIdOnly = await prisma.identity.updateManyAndReturn({
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
    updateManyAndReturn<T extends IdentityUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Identity.
     * @param {IdentityUpsertArgs} args - Arguments to update or create a Identity.
     * @example
     * // Update or create a Identity
     * const identity = await prisma.identity.upsert({
     *   create: {
     *     // ... data to create a Identity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Identity we want to update
     *   }
     * })
     */
    upsert<T extends IdentityUpsertArgs>(args: SelectSubset<T, IdentityUpsertArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Identities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityCountArgs} args - Arguments to filter Identities to count.
     * @example
     * // Count the number of Identities
     * const count = await prisma.identity.count({
     *   where: {
     *     // ... the filter for the Identities we want to count
     *   }
     * })
    **/
    count<T extends IdentityCountArgs>(
      args?: Subset<T, IdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentityAggregateArgs>(args: Subset<T, IdentityAggregateArgs>): Prisma.PrismaPromise<GetIdentityAggregateType<T>>

    /**
     * Group by Identity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityGroupByArgs} args - Group by arguments.
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
      T extends IdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentityGroupByArgs['orderBy'] }
        : { orderBy?: IdentityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Identity model
   */
  readonly fields: IdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Identity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attributes<T extends Identity$attributesArgs<ExtArgs> = {}>(args?: Subset<T, Identity$attributesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedWith<T extends Identity$sharedWithArgs<ExtArgs> = {}>(args?: Subset<T, Identity$sharedWithArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Identity$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Identity$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sharedLinks<T extends Identity$sharedLinksArgs<ExtArgs> = {}>(args?: Subset<T, Identity$sharedLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Identity model
   */
  interface IdentityFieldRefs {
    readonly id: FieldRef<"Identity", 'Int'>
    readonly userId: FieldRef<"Identity", 'Int'>
    readonly name: FieldRef<"Identity", 'String'>
    readonly description: FieldRef<"Identity", 'String'>
    readonly isDefault: FieldRef<"Identity", 'Boolean'>
    readonly isActive: FieldRef<"Identity", 'Boolean'>
    readonly createdAt: FieldRef<"Identity", 'DateTime'>
    readonly updatedAt: FieldRef<"Identity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Identity findUnique
   */
  export type IdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity findUniqueOrThrow
   */
  export type IdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity findFirst
   */
  export type IdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Identities.
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identities.
     */
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * Identity findFirstOrThrow
   */
  export type IdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identity to fetch.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Identities.
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Identities.
     */
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * Identity findMany
   */
  export type IdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter, which Identities to fetch.
     */
    where?: IdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Identities to fetch.
     */
    orderBy?: IdentityOrderByWithRelationInput | IdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Identities.
     */
    cursor?: IdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Identities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Identities.
     */
    skip?: number
    distinct?: IdentityScalarFieldEnum | IdentityScalarFieldEnum[]
  }

  /**
   * Identity create
   */
  export type IdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a Identity.
     */
    data: XOR<IdentityCreateInput, IdentityUncheckedCreateInput>
  }

  /**
   * Identity createMany
   */
  export type IdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Identities.
     */
    data: IdentityCreateManyInput | IdentityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Identity createManyAndReturn
   */
  export type IdentityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * The data used to create many Identities.
     */
    data: IdentityCreateManyInput | IdentityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Identity update
   */
  export type IdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a Identity.
     */
    data: XOR<IdentityUpdateInput, IdentityUncheckedUpdateInput>
    /**
     * Choose, which Identity to update.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity updateMany
   */
  export type IdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Identities.
     */
    data: XOR<IdentityUpdateManyMutationInput, IdentityUncheckedUpdateManyInput>
    /**
     * Filter which Identities to update
     */
    where?: IdentityWhereInput
    /**
     * Limit how many Identities to update.
     */
    limit?: number
  }

  /**
   * Identity updateManyAndReturn
   */
  export type IdentityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * The data used to update Identities.
     */
    data: XOR<IdentityUpdateManyMutationInput, IdentityUncheckedUpdateManyInput>
    /**
     * Filter which Identities to update
     */
    where?: IdentityWhereInput
    /**
     * Limit how many Identities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Identity upsert
   */
  export type IdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the Identity to update in case it exists.
     */
    where: IdentityWhereUniqueInput
    /**
     * In case the Identity found by the `where` argument doesn't exist, create a new Identity with this data.
     */
    create: XOR<IdentityCreateInput, IdentityUncheckedCreateInput>
    /**
     * In case the Identity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentityUpdateInput, IdentityUncheckedUpdateInput>
  }

  /**
   * Identity delete
   */
  export type IdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    /**
     * Filter which Identity to delete.
     */
    where: IdentityWhereUniqueInput
  }

  /**
   * Identity deleteMany
   */
  export type IdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Identities to delete
     */
    where?: IdentityWhereInput
    /**
     * Limit how many Identities to delete.
     */
    limit?: number
  }

  /**
   * Identity.attributes
   */
  export type Identity$attributesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    where?: IdentityAttributeWhereInput
    orderBy?: IdentityAttributeOrderByWithRelationInput | IdentityAttributeOrderByWithRelationInput[]
    cursor?: IdentityAttributeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdentityAttributeScalarFieldEnum | IdentityAttributeScalarFieldEnum[]
  }

  /**
   * Identity.sharedWith
   */
  export type Identity$sharedWithArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    where?: SharedIdentityWhereInput
    orderBy?: SharedIdentityOrderByWithRelationInput | SharedIdentityOrderByWithRelationInput[]
    cursor?: SharedIdentityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedIdentityScalarFieldEnum | SharedIdentityScalarFieldEnum[]
  }

  /**
   * Identity.requests
   */
  export type Identity$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    where?: IdentityRequestWhereInput
    orderBy?: IdentityRequestOrderByWithRelationInput | IdentityRequestOrderByWithRelationInput[]
    cursor?: IdentityRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IdentityRequestScalarFieldEnum | IdentityRequestScalarFieldEnum[]
  }

  /**
   * Identity.sharedLinks
   */
  export type Identity$sharedLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    where?: SharedLinkWhereInput
    orderBy?: SharedLinkOrderByWithRelationInput | SharedLinkOrderByWithRelationInput[]
    cursor?: SharedLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedLinkScalarFieldEnum | SharedLinkScalarFieldEnum[]
  }

  /**
   * Identity without action
   */
  export type IdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
  }


  /**
   * Model IdentityAttribute
   */

  export type AggregateIdentityAttribute = {
    _count: IdentityAttributeCountAggregateOutputType | null
    _avg: IdentityAttributeAvgAggregateOutputType | null
    _sum: IdentityAttributeSumAggregateOutputType | null
    _min: IdentityAttributeMinAggregateOutputType | null
    _max: IdentityAttributeMaxAggregateOutputType | null
  }

  export type IdentityAttributeAvgAggregateOutputType = {
    id: number | null
    identityId: number | null
  }

  export type IdentityAttributeSumAggregateOutputType = {
    id: number | null
    identityId: number | null
  }

  export type IdentityAttributeMinAggregateOutputType = {
    id: number | null
    identityId: number | null
    key: string | null
    value: string | null
    isPublic: boolean | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityAttributeMaxAggregateOutputType = {
    id: number | null
    identityId: number | null
    key: string | null
    value: string | null
    isPublic: boolean | null
    isVisible: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IdentityAttributeCountAggregateOutputType = {
    id: number
    identityId: number
    key: number
    value: number
    isPublic: number
    isVisible: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IdentityAttributeAvgAggregateInputType = {
    id?: true
    identityId?: true
  }

  export type IdentityAttributeSumAggregateInputType = {
    id?: true
    identityId?: true
  }

  export type IdentityAttributeMinAggregateInputType = {
    id?: true
    identityId?: true
    key?: true
    value?: true
    isPublic?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityAttributeMaxAggregateInputType = {
    id?: true
    identityId?: true
    key?: true
    value?: true
    isPublic?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IdentityAttributeCountAggregateInputType = {
    id?: true
    identityId?: true
    key?: true
    value?: true
    isPublic?: true
    isVisible?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IdentityAttributeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityAttribute to aggregate.
     */
    where?: IdentityAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityAttributes to fetch.
     */
    orderBy?: IdentityAttributeOrderByWithRelationInput | IdentityAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentityAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdentityAttributes
    **/
    _count?: true | IdentityAttributeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentityAttributeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentityAttributeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityAttributeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityAttributeMaxAggregateInputType
  }

  export type GetIdentityAttributeAggregateType<T extends IdentityAttributeAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentityAttribute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentityAttribute[P]>
      : GetScalarType<T[P], AggregateIdentityAttribute[P]>
  }




  export type IdentityAttributeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityAttributeWhereInput
    orderBy?: IdentityAttributeOrderByWithAggregationInput | IdentityAttributeOrderByWithAggregationInput[]
    by: IdentityAttributeScalarFieldEnum[] | IdentityAttributeScalarFieldEnum
    having?: IdentityAttributeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityAttributeCountAggregateInputType | true
    _avg?: IdentityAttributeAvgAggregateInputType
    _sum?: IdentityAttributeSumAggregateInputType
    _min?: IdentityAttributeMinAggregateInputType
    _max?: IdentityAttributeMaxAggregateInputType
  }

  export type IdentityAttributeGroupByOutputType = {
    id: number
    identityId: number
    key: string
    value: string
    isPublic: boolean
    isVisible: boolean
    createdAt: Date
    updatedAt: Date
    _count: IdentityAttributeCountAggregateOutputType | null
    _avg: IdentityAttributeAvgAggregateOutputType | null
    _sum: IdentityAttributeSumAggregateOutputType | null
    _min: IdentityAttributeMinAggregateOutputType | null
    _max: IdentityAttributeMaxAggregateOutputType | null
  }

  type GetIdentityAttributeGroupByPayload<T extends IdentityAttributeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityAttributeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityAttributeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityAttributeGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityAttributeGroupByOutputType[P]>
        }
      >
    >


  export type IdentityAttributeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identityId?: boolean
    key?: boolean
    value?: boolean
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identityAttribute"]>

  export type IdentityAttributeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identityId?: boolean
    key?: boolean
    value?: boolean
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identityAttribute"]>

  export type IdentityAttributeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identityId?: boolean
    key?: boolean
    value?: boolean
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["identityAttribute"]>

  export type IdentityAttributeSelectScalar = {
    id?: boolean
    identityId?: boolean
    key?: boolean
    value?: boolean
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IdentityAttributeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identityId" | "key" | "value" | "isPublic" | "isVisible" | "createdAt" | "updatedAt", ExtArgs["result"]["identityAttribute"]>
  export type IdentityAttributeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }
  export type IdentityAttributeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }
  export type IdentityAttributeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }

  export type $IdentityAttributePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdentityAttribute"
    objects: {
      identity: Prisma.$IdentityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      identityId: number
      key: string
      value: string
      isPublic: boolean
      isVisible: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["identityAttribute"]>
    composites: {}
  }

  type IdentityAttributeGetPayload<S extends boolean | null | undefined | IdentityAttributeDefaultArgs> = $Result.GetResult<Prisma.$IdentityAttributePayload, S>

  type IdentityAttributeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentityAttributeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityAttributeCountAggregateInputType | true
    }

  export interface IdentityAttributeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdentityAttribute'], meta: { name: 'IdentityAttribute' } }
    /**
     * Find zero or one IdentityAttribute that matches the filter.
     * @param {IdentityAttributeFindUniqueArgs} args - Arguments to find a IdentityAttribute
     * @example
     * // Get one IdentityAttribute
     * const identityAttribute = await prisma.identityAttribute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentityAttributeFindUniqueArgs>(args: SelectSubset<T, IdentityAttributeFindUniqueArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdentityAttribute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentityAttributeFindUniqueOrThrowArgs} args - Arguments to find a IdentityAttribute
     * @example
     * // Get one IdentityAttribute
     * const identityAttribute = await prisma.identityAttribute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentityAttributeFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentityAttributeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityAttribute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeFindFirstArgs} args - Arguments to find a IdentityAttribute
     * @example
     * // Get one IdentityAttribute
     * const identityAttribute = await prisma.identityAttribute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentityAttributeFindFirstArgs>(args?: SelectSubset<T, IdentityAttributeFindFirstArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityAttribute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeFindFirstOrThrowArgs} args - Arguments to find a IdentityAttribute
     * @example
     * // Get one IdentityAttribute
     * const identityAttribute = await prisma.identityAttribute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentityAttributeFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentityAttributeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdentityAttributes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdentityAttributes
     * const identityAttributes = await prisma.identityAttribute.findMany()
     * 
     * // Get first 10 IdentityAttributes
     * const identityAttributes = await prisma.identityAttribute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityAttributeWithIdOnly = await prisma.identityAttribute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentityAttributeFindManyArgs>(args?: SelectSubset<T, IdentityAttributeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdentityAttribute.
     * @param {IdentityAttributeCreateArgs} args - Arguments to create a IdentityAttribute.
     * @example
     * // Create one IdentityAttribute
     * const IdentityAttribute = await prisma.identityAttribute.create({
     *   data: {
     *     // ... data to create a IdentityAttribute
     *   }
     * })
     * 
     */
    create<T extends IdentityAttributeCreateArgs>(args: SelectSubset<T, IdentityAttributeCreateArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdentityAttributes.
     * @param {IdentityAttributeCreateManyArgs} args - Arguments to create many IdentityAttributes.
     * @example
     * // Create many IdentityAttributes
     * const identityAttribute = await prisma.identityAttribute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentityAttributeCreateManyArgs>(args?: SelectSubset<T, IdentityAttributeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdentityAttributes and returns the data saved in the database.
     * @param {IdentityAttributeCreateManyAndReturnArgs} args - Arguments to create many IdentityAttributes.
     * @example
     * // Create many IdentityAttributes
     * const identityAttribute = await prisma.identityAttribute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdentityAttributes and only return the `id`
     * const identityAttributeWithIdOnly = await prisma.identityAttribute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentityAttributeCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentityAttributeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdentityAttribute.
     * @param {IdentityAttributeDeleteArgs} args - Arguments to delete one IdentityAttribute.
     * @example
     * // Delete one IdentityAttribute
     * const IdentityAttribute = await prisma.identityAttribute.delete({
     *   where: {
     *     // ... filter to delete one IdentityAttribute
     *   }
     * })
     * 
     */
    delete<T extends IdentityAttributeDeleteArgs>(args: SelectSubset<T, IdentityAttributeDeleteArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdentityAttribute.
     * @param {IdentityAttributeUpdateArgs} args - Arguments to update one IdentityAttribute.
     * @example
     * // Update one IdentityAttribute
     * const identityAttribute = await prisma.identityAttribute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentityAttributeUpdateArgs>(args: SelectSubset<T, IdentityAttributeUpdateArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdentityAttributes.
     * @param {IdentityAttributeDeleteManyArgs} args - Arguments to filter IdentityAttributes to delete.
     * @example
     * // Delete a few IdentityAttributes
     * const { count } = await prisma.identityAttribute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentityAttributeDeleteManyArgs>(args?: SelectSubset<T, IdentityAttributeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdentityAttributes
     * const identityAttribute = await prisma.identityAttribute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentityAttributeUpdateManyArgs>(args: SelectSubset<T, IdentityAttributeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityAttributes and returns the data updated in the database.
     * @param {IdentityAttributeUpdateManyAndReturnArgs} args - Arguments to update many IdentityAttributes.
     * @example
     * // Update many IdentityAttributes
     * const identityAttribute = await prisma.identityAttribute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdentityAttributes and only return the `id`
     * const identityAttributeWithIdOnly = await prisma.identityAttribute.updateManyAndReturn({
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
    updateManyAndReturn<T extends IdentityAttributeUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentityAttributeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdentityAttribute.
     * @param {IdentityAttributeUpsertArgs} args - Arguments to update or create a IdentityAttribute.
     * @example
     * // Update or create a IdentityAttribute
     * const identityAttribute = await prisma.identityAttribute.upsert({
     *   create: {
     *     // ... data to create a IdentityAttribute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdentityAttribute we want to update
     *   }
     * })
     */
    upsert<T extends IdentityAttributeUpsertArgs>(args: SelectSubset<T, IdentityAttributeUpsertArgs<ExtArgs>>): Prisma__IdentityAttributeClient<$Result.GetResult<Prisma.$IdentityAttributePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdentityAttributes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeCountArgs} args - Arguments to filter IdentityAttributes to count.
     * @example
     * // Count the number of IdentityAttributes
     * const count = await prisma.identityAttribute.count({
     *   where: {
     *     // ... the filter for the IdentityAttributes we want to count
     *   }
     * })
    **/
    count<T extends IdentityAttributeCountArgs>(
      args?: Subset<T, IdentityAttributeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityAttributeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdentityAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentityAttributeAggregateArgs>(args: Subset<T, IdentityAttributeAggregateArgs>): Prisma.PrismaPromise<GetIdentityAttributeAggregateType<T>>

    /**
     * Group by IdentityAttribute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityAttributeGroupByArgs} args - Group by arguments.
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
      T extends IdentityAttributeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentityAttributeGroupByArgs['orderBy'] }
        : { orderBy?: IdentityAttributeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdentityAttributeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityAttributeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdentityAttribute model
   */
  readonly fields: IdentityAttributeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdentityAttribute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentityAttributeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    identity<T extends IdentityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdentityDefaultArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IdentityAttribute model
   */
  interface IdentityAttributeFieldRefs {
    readonly id: FieldRef<"IdentityAttribute", 'Int'>
    readonly identityId: FieldRef<"IdentityAttribute", 'Int'>
    readonly key: FieldRef<"IdentityAttribute", 'String'>
    readonly value: FieldRef<"IdentityAttribute", 'String'>
    readonly isPublic: FieldRef<"IdentityAttribute", 'Boolean'>
    readonly isVisible: FieldRef<"IdentityAttribute", 'Boolean'>
    readonly createdAt: FieldRef<"IdentityAttribute", 'DateTime'>
    readonly updatedAt: FieldRef<"IdentityAttribute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdentityAttribute findUnique
   */
  export type IdentityAttributeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * Filter, which IdentityAttribute to fetch.
     */
    where: IdentityAttributeWhereUniqueInput
  }

  /**
   * IdentityAttribute findUniqueOrThrow
   */
  export type IdentityAttributeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * Filter, which IdentityAttribute to fetch.
     */
    where: IdentityAttributeWhereUniqueInput
  }

  /**
   * IdentityAttribute findFirst
   */
  export type IdentityAttributeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * Filter, which IdentityAttribute to fetch.
     */
    where?: IdentityAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityAttributes to fetch.
     */
    orderBy?: IdentityAttributeOrderByWithRelationInput | IdentityAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityAttributes.
     */
    cursor?: IdentityAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityAttributes.
     */
    distinct?: IdentityAttributeScalarFieldEnum | IdentityAttributeScalarFieldEnum[]
  }

  /**
   * IdentityAttribute findFirstOrThrow
   */
  export type IdentityAttributeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * Filter, which IdentityAttribute to fetch.
     */
    where?: IdentityAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityAttributes to fetch.
     */
    orderBy?: IdentityAttributeOrderByWithRelationInput | IdentityAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityAttributes.
     */
    cursor?: IdentityAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityAttributes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityAttributes.
     */
    distinct?: IdentityAttributeScalarFieldEnum | IdentityAttributeScalarFieldEnum[]
  }

  /**
   * IdentityAttribute findMany
   */
  export type IdentityAttributeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * Filter, which IdentityAttributes to fetch.
     */
    where?: IdentityAttributeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityAttributes to fetch.
     */
    orderBy?: IdentityAttributeOrderByWithRelationInput | IdentityAttributeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdentityAttributes.
     */
    cursor?: IdentityAttributeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityAttributes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityAttributes.
     */
    skip?: number
    distinct?: IdentityAttributeScalarFieldEnum | IdentityAttributeScalarFieldEnum[]
  }

  /**
   * IdentityAttribute create
   */
  export type IdentityAttributeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * The data needed to create a IdentityAttribute.
     */
    data: XOR<IdentityAttributeCreateInput, IdentityAttributeUncheckedCreateInput>
  }

  /**
   * IdentityAttribute createMany
   */
  export type IdentityAttributeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdentityAttributes.
     */
    data: IdentityAttributeCreateManyInput | IdentityAttributeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdentityAttribute createManyAndReturn
   */
  export type IdentityAttributeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * The data used to create many IdentityAttributes.
     */
    data: IdentityAttributeCreateManyInput | IdentityAttributeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentityAttribute update
   */
  export type IdentityAttributeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * The data needed to update a IdentityAttribute.
     */
    data: XOR<IdentityAttributeUpdateInput, IdentityAttributeUncheckedUpdateInput>
    /**
     * Choose, which IdentityAttribute to update.
     */
    where: IdentityAttributeWhereUniqueInput
  }

  /**
   * IdentityAttribute updateMany
   */
  export type IdentityAttributeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdentityAttributes.
     */
    data: XOR<IdentityAttributeUpdateManyMutationInput, IdentityAttributeUncheckedUpdateManyInput>
    /**
     * Filter which IdentityAttributes to update
     */
    where?: IdentityAttributeWhereInput
    /**
     * Limit how many IdentityAttributes to update.
     */
    limit?: number
  }

  /**
   * IdentityAttribute updateManyAndReturn
   */
  export type IdentityAttributeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * The data used to update IdentityAttributes.
     */
    data: XOR<IdentityAttributeUpdateManyMutationInput, IdentityAttributeUncheckedUpdateManyInput>
    /**
     * Filter which IdentityAttributes to update
     */
    where?: IdentityAttributeWhereInput
    /**
     * Limit how many IdentityAttributes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentityAttribute upsert
   */
  export type IdentityAttributeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * The filter to search for the IdentityAttribute to update in case it exists.
     */
    where: IdentityAttributeWhereUniqueInput
    /**
     * In case the IdentityAttribute found by the `where` argument doesn't exist, create a new IdentityAttribute with this data.
     */
    create: XOR<IdentityAttributeCreateInput, IdentityAttributeUncheckedCreateInput>
    /**
     * In case the IdentityAttribute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentityAttributeUpdateInput, IdentityAttributeUncheckedUpdateInput>
  }

  /**
   * IdentityAttribute delete
   */
  export type IdentityAttributeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
    /**
     * Filter which IdentityAttribute to delete.
     */
    where: IdentityAttributeWhereUniqueInput
  }

  /**
   * IdentityAttribute deleteMany
   */
  export type IdentityAttributeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityAttributes to delete
     */
    where?: IdentityAttributeWhereInput
    /**
     * Limit how many IdentityAttributes to delete.
     */
    limit?: number
  }

  /**
   * IdentityAttribute without action
   */
  export type IdentityAttributeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityAttribute
     */
    select?: IdentityAttributeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityAttribute
     */
    omit?: IdentityAttributeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityAttributeInclude<ExtArgs> | null
  }


  /**
   * Model SharedIdentity
   */

  export type AggregateSharedIdentity = {
    _count: SharedIdentityCountAggregateOutputType | null
    _avg: SharedIdentityAvgAggregateOutputType | null
    _sum: SharedIdentitySumAggregateOutputType | null
    _min: SharedIdentityMinAggregateOutputType | null
    _max: SharedIdentityMaxAggregateOutputType | null
  }

  export type SharedIdentityAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    viewerId: number | null
    identityId: number | null
  }

  export type SharedIdentitySumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    viewerId: number | null
    identityId: number | null
  }

  export type SharedIdentityMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    viewerId: number | null
    identityId: number | null
    context: string | null
    canView: boolean | null
    canRequest: boolean | null
    sharedAt: Date | null
    expiresAt: Date | null
  }

  export type SharedIdentityMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    viewerId: number | null
    identityId: number | null
    context: string | null
    canView: boolean | null
    canRequest: boolean | null
    sharedAt: Date | null
    expiresAt: Date | null
  }

  export type SharedIdentityCountAggregateOutputType = {
    id: number
    ownerId: number
    viewerId: number
    identityId: number
    context: number
    canView: number
    canRequest: number
    sharedAt: number
    expiresAt: number
    _all: number
  }


  export type SharedIdentityAvgAggregateInputType = {
    id?: true
    ownerId?: true
    viewerId?: true
    identityId?: true
  }

  export type SharedIdentitySumAggregateInputType = {
    id?: true
    ownerId?: true
    viewerId?: true
    identityId?: true
  }

  export type SharedIdentityMinAggregateInputType = {
    id?: true
    ownerId?: true
    viewerId?: true
    identityId?: true
    context?: true
    canView?: true
    canRequest?: true
    sharedAt?: true
    expiresAt?: true
  }

  export type SharedIdentityMaxAggregateInputType = {
    id?: true
    ownerId?: true
    viewerId?: true
    identityId?: true
    context?: true
    canView?: true
    canRequest?: true
    sharedAt?: true
    expiresAt?: true
  }

  export type SharedIdentityCountAggregateInputType = {
    id?: true
    ownerId?: true
    viewerId?: true
    identityId?: true
    context?: true
    canView?: true
    canRequest?: true
    sharedAt?: true
    expiresAt?: true
    _all?: true
  }

  export type SharedIdentityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedIdentity to aggregate.
     */
    where?: SharedIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedIdentities to fetch.
     */
    orderBy?: SharedIdentityOrderByWithRelationInput | SharedIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedIdentities
    **/
    _count?: true | SharedIdentityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedIdentityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedIdentitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedIdentityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedIdentityMaxAggregateInputType
  }

  export type GetSharedIdentityAggregateType<T extends SharedIdentityAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedIdentity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedIdentity[P]>
      : GetScalarType<T[P], AggregateSharedIdentity[P]>
  }




  export type SharedIdentityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedIdentityWhereInput
    orderBy?: SharedIdentityOrderByWithAggregationInput | SharedIdentityOrderByWithAggregationInput[]
    by: SharedIdentityScalarFieldEnum[] | SharedIdentityScalarFieldEnum
    having?: SharedIdentityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedIdentityCountAggregateInputType | true
    _avg?: SharedIdentityAvgAggregateInputType
    _sum?: SharedIdentitySumAggregateInputType
    _min?: SharedIdentityMinAggregateInputType
    _max?: SharedIdentityMaxAggregateInputType
  }

  export type SharedIdentityGroupByOutputType = {
    id: number
    ownerId: number
    viewerId: number
    identityId: number
    context: string
    canView: boolean
    canRequest: boolean
    sharedAt: Date
    expiresAt: Date | null
    _count: SharedIdentityCountAggregateOutputType | null
    _avg: SharedIdentityAvgAggregateOutputType | null
    _sum: SharedIdentitySumAggregateOutputType | null
    _min: SharedIdentityMinAggregateOutputType | null
    _max: SharedIdentityMaxAggregateOutputType | null
  }

  type GetSharedIdentityGroupByPayload<T extends SharedIdentityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedIdentityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedIdentityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedIdentityGroupByOutputType[P]>
            : GetScalarType<T[P], SharedIdentityGroupByOutputType[P]>
        }
      >
    >


  export type SharedIdentitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    viewerId?: boolean
    identityId?: boolean
    context?: boolean
    canView?: boolean
    canRequest?: boolean
    sharedAt?: boolean
    expiresAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedIdentity"]>

  export type SharedIdentitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    viewerId?: boolean
    identityId?: boolean
    context?: boolean
    canView?: boolean
    canRequest?: boolean
    sharedAt?: boolean
    expiresAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedIdentity"]>

  export type SharedIdentitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    viewerId?: boolean
    identityId?: boolean
    context?: boolean
    canView?: boolean
    canRequest?: boolean
    sharedAt?: boolean
    expiresAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedIdentity"]>

  export type SharedIdentitySelectScalar = {
    id?: boolean
    ownerId?: boolean
    viewerId?: boolean
    identityId?: boolean
    context?: boolean
    canView?: boolean
    canRequest?: boolean
    sharedAt?: boolean
    expiresAt?: boolean
  }

  export type SharedIdentityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "viewerId" | "identityId" | "context" | "canView" | "canRequest" | "sharedAt" | "expiresAt", ExtArgs["result"]["sharedIdentity"]>
  export type SharedIdentityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }
  export type SharedIdentityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }
  export type SharedIdentityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }

  export type $SharedIdentityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedIdentity"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      identity: Prisma.$IdentityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      viewerId: number
      identityId: number
      context: string
      canView: boolean
      canRequest: boolean
      sharedAt: Date
      expiresAt: Date | null
    }, ExtArgs["result"]["sharedIdentity"]>
    composites: {}
  }

  type SharedIdentityGetPayload<S extends boolean | null | undefined | SharedIdentityDefaultArgs> = $Result.GetResult<Prisma.$SharedIdentityPayload, S>

  type SharedIdentityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedIdentityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedIdentityCountAggregateInputType | true
    }

  export interface SharedIdentityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedIdentity'], meta: { name: 'SharedIdentity' } }
    /**
     * Find zero or one SharedIdentity that matches the filter.
     * @param {SharedIdentityFindUniqueArgs} args - Arguments to find a SharedIdentity
     * @example
     * // Get one SharedIdentity
     * const sharedIdentity = await prisma.sharedIdentity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedIdentityFindUniqueArgs>(args: SelectSubset<T, SharedIdentityFindUniqueArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedIdentity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedIdentityFindUniqueOrThrowArgs} args - Arguments to find a SharedIdentity
     * @example
     * // Get one SharedIdentity
     * const sharedIdentity = await prisma.sharedIdentity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedIdentityFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedIdentityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedIdentity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityFindFirstArgs} args - Arguments to find a SharedIdentity
     * @example
     * // Get one SharedIdentity
     * const sharedIdentity = await prisma.sharedIdentity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedIdentityFindFirstArgs>(args?: SelectSubset<T, SharedIdentityFindFirstArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedIdentity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityFindFirstOrThrowArgs} args - Arguments to find a SharedIdentity
     * @example
     * // Get one SharedIdentity
     * const sharedIdentity = await prisma.sharedIdentity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedIdentityFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedIdentityFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedIdentities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedIdentities
     * const sharedIdentities = await prisma.sharedIdentity.findMany()
     * 
     * // Get first 10 SharedIdentities
     * const sharedIdentities = await prisma.sharedIdentity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedIdentityWithIdOnly = await prisma.sharedIdentity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedIdentityFindManyArgs>(args?: SelectSubset<T, SharedIdentityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedIdentity.
     * @param {SharedIdentityCreateArgs} args - Arguments to create a SharedIdentity.
     * @example
     * // Create one SharedIdentity
     * const SharedIdentity = await prisma.sharedIdentity.create({
     *   data: {
     *     // ... data to create a SharedIdentity
     *   }
     * })
     * 
     */
    create<T extends SharedIdentityCreateArgs>(args: SelectSubset<T, SharedIdentityCreateArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedIdentities.
     * @param {SharedIdentityCreateManyArgs} args - Arguments to create many SharedIdentities.
     * @example
     * // Create many SharedIdentities
     * const sharedIdentity = await prisma.sharedIdentity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedIdentityCreateManyArgs>(args?: SelectSubset<T, SharedIdentityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedIdentities and returns the data saved in the database.
     * @param {SharedIdentityCreateManyAndReturnArgs} args - Arguments to create many SharedIdentities.
     * @example
     * // Create many SharedIdentities
     * const sharedIdentity = await prisma.sharedIdentity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedIdentities and only return the `id`
     * const sharedIdentityWithIdOnly = await prisma.sharedIdentity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedIdentityCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedIdentityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedIdentity.
     * @param {SharedIdentityDeleteArgs} args - Arguments to delete one SharedIdentity.
     * @example
     * // Delete one SharedIdentity
     * const SharedIdentity = await prisma.sharedIdentity.delete({
     *   where: {
     *     // ... filter to delete one SharedIdentity
     *   }
     * })
     * 
     */
    delete<T extends SharedIdentityDeleteArgs>(args: SelectSubset<T, SharedIdentityDeleteArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedIdentity.
     * @param {SharedIdentityUpdateArgs} args - Arguments to update one SharedIdentity.
     * @example
     * // Update one SharedIdentity
     * const sharedIdentity = await prisma.sharedIdentity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedIdentityUpdateArgs>(args: SelectSubset<T, SharedIdentityUpdateArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedIdentities.
     * @param {SharedIdentityDeleteManyArgs} args - Arguments to filter SharedIdentities to delete.
     * @example
     * // Delete a few SharedIdentities
     * const { count } = await prisma.sharedIdentity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedIdentityDeleteManyArgs>(args?: SelectSubset<T, SharedIdentityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedIdentities
     * const sharedIdentity = await prisma.sharedIdentity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedIdentityUpdateManyArgs>(args: SelectSubset<T, SharedIdentityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedIdentities and returns the data updated in the database.
     * @param {SharedIdentityUpdateManyAndReturnArgs} args - Arguments to update many SharedIdentities.
     * @example
     * // Update many SharedIdentities
     * const sharedIdentity = await prisma.sharedIdentity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedIdentities and only return the `id`
     * const sharedIdentityWithIdOnly = await prisma.sharedIdentity.updateManyAndReturn({
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
    updateManyAndReturn<T extends SharedIdentityUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedIdentityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedIdentity.
     * @param {SharedIdentityUpsertArgs} args - Arguments to update or create a SharedIdentity.
     * @example
     * // Update or create a SharedIdentity
     * const sharedIdentity = await prisma.sharedIdentity.upsert({
     *   create: {
     *     // ... data to create a SharedIdentity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedIdentity we want to update
     *   }
     * })
     */
    upsert<T extends SharedIdentityUpsertArgs>(args: SelectSubset<T, SharedIdentityUpsertArgs<ExtArgs>>): Prisma__SharedIdentityClient<$Result.GetResult<Prisma.$SharedIdentityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedIdentities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityCountArgs} args - Arguments to filter SharedIdentities to count.
     * @example
     * // Count the number of SharedIdentities
     * const count = await prisma.sharedIdentity.count({
     *   where: {
     *     // ... the filter for the SharedIdentities we want to count
     *   }
     * })
    **/
    count<T extends SharedIdentityCountArgs>(
      args?: Subset<T, SharedIdentityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedIdentityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedIdentityAggregateArgs>(args: Subset<T, SharedIdentityAggregateArgs>): Prisma.PrismaPromise<GetSharedIdentityAggregateType<T>>

    /**
     * Group by SharedIdentity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedIdentityGroupByArgs} args - Group by arguments.
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
      T extends SharedIdentityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedIdentityGroupByArgs['orderBy'] }
        : { orderBy?: SharedIdentityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedIdentityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedIdentityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedIdentity model
   */
  readonly fields: SharedIdentityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedIdentity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedIdentityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    identity<T extends IdentityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdentityDefaultArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SharedIdentity model
   */
  interface SharedIdentityFieldRefs {
    readonly id: FieldRef<"SharedIdentity", 'Int'>
    readonly ownerId: FieldRef<"SharedIdentity", 'Int'>
    readonly viewerId: FieldRef<"SharedIdentity", 'Int'>
    readonly identityId: FieldRef<"SharedIdentity", 'Int'>
    readonly context: FieldRef<"SharedIdentity", 'String'>
    readonly canView: FieldRef<"SharedIdentity", 'Boolean'>
    readonly canRequest: FieldRef<"SharedIdentity", 'Boolean'>
    readonly sharedAt: FieldRef<"SharedIdentity", 'DateTime'>
    readonly expiresAt: FieldRef<"SharedIdentity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharedIdentity findUnique
   */
  export type SharedIdentityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * Filter, which SharedIdentity to fetch.
     */
    where: SharedIdentityWhereUniqueInput
  }

  /**
   * SharedIdentity findUniqueOrThrow
   */
  export type SharedIdentityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * Filter, which SharedIdentity to fetch.
     */
    where: SharedIdentityWhereUniqueInput
  }

  /**
   * SharedIdentity findFirst
   */
  export type SharedIdentityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * Filter, which SharedIdentity to fetch.
     */
    where?: SharedIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedIdentities to fetch.
     */
    orderBy?: SharedIdentityOrderByWithRelationInput | SharedIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedIdentities.
     */
    cursor?: SharedIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedIdentities.
     */
    distinct?: SharedIdentityScalarFieldEnum | SharedIdentityScalarFieldEnum[]
  }

  /**
   * SharedIdentity findFirstOrThrow
   */
  export type SharedIdentityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * Filter, which SharedIdentity to fetch.
     */
    where?: SharedIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedIdentities to fetch.
     */
    orderBy?: SharedIdentityOrderByWithRelationInput | SharedIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedIdentities.
     */
    cursor?: SharedIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedIdentities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedIdentities.
     */
    distinct?: SharedIdentityScalarFieldEnum | SharedIdentityScalarFieldEnum[]
  }

  /**
   * SharedIdentity findMany
   */
  export type SharedIdentityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * Filter, which SharedIdentities to fetch.
     */
    where?: SharedIdentityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedIdentities to fetch.
     */
    orderBy?: SharedIdentityOrderByWithRelationInput | SharedIdentityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedIdentities.
     */
    cursor?: SharedIdentityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedIdentities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedIdentities.
     */
    skip?: number
    distinct?: SharedIdentityScalarFieldEnum | SharedIdentityScalarFieldEnum[]
  }

  /**
   * SharedIdentity create
   */
  export type SharedIdentityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedIdentity.
     */
    data: XOR<SharedIdentityCreateInput, SharedIdentityUncheckedCreateInput>
  }

  /**
   * SharedIdentity createMany
   */
  export type SharedIdentityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedIdentities.
     */
    data: SharedIdentityCreateManyInput | SharedIdentityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedIdentity createManyAndReturn
   */
  export type SharedIdentityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * The data used to create many SharedIdentities.
     */
    data: SharedIdentityCreateManyInput | SharedIdentityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedIdentity update
   */
  export type SharedIdentityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedIdentity.
     */
    data: XOR<SharedIdentityUpdateInput, SharedIdentityUncheckedUpdateInput>
    /**
     * Choose, which SharedIdentity to update.
     */
    where: SharedIdentityWhereUniqueInput
  }

  /**
   * SharedIdentity updateMany
   */
  export type SharedIdentityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedIdentities.
     */
    data: XOR<SharedIdentityUpdateManyMutationInput, SharedIdentityUncheckedUpdateManyInput>
    /**
     * Filter which SharedIdentities to update
     */
    where?: SharedIdentityWhereInput
    /**
     * Limit how many SharedIdentities to update.
     */
    limit?: number
  }

  /**
   * SharedIdentity updateManyAndReturn
   */
  export type SharedIdentityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * The data used to update SharedIdentities.
     */
    data: XOR<SharedIdentityUpdateManyMutationInput, SharedIdentityUncheckedUpdateManyInput>
    /**
     * Filter which SharedIdentities to update
     */
    where?: SharedIdentityWhereInput
    /**
     * Limit how many SharedIdentities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedIdentity upsert
   */
  export type SharedIdentityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedIdentity to update in case it exists.
     */
    where: SharedIdentityWhereUniqueInput
    /**
     * In case the SharedIdentity found by the `where` argument doesn't exist, create a new SharedIdentity with this data.
     */
    create: XOR<SharedIdentityCreateInput, SharedIdentityUncheckedCreateInput>
    /**
     * In case the SharedIdentity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedIdentityUpdateInput, SharedIdentityUncheckedUpdateInput>
  }

  /**
   * SharedIdentity delete
   */
  export type SharedIdentityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
    /**
     * Filter which SharedIdentity to delete.
     */
    where: SharedIdentityWhereUniqueInput
  }

  /**
   * SharedIdentity deleteMany
   */
  export type SharedIdentityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedIdentities to delete
     */
    where?: SharedIdentityWhereInput
    /**
     * Limit how many SharedIdentities to delete.
     */
    limit?: number
  }

  /**
   * SharedIdentity without action
   */
  export type SharedIdentityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedIdentity
     */
    select?: SharedIdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedIdentity
     */
    omit?: SharedIdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedIdentityInclude<ExtArgs> | null
  }


  /**
   * Model SharedLink
   */

  export type AggregateSharedLink = {
    _count: SharedLinkCountAggregateOutputType | null
    _avg: SharedLinkAvgAggregateOutputType | null
    _sum: SharedLinkSumAggregateOutputType | null
    _min: SharedLinkMinAggregateOutputType | null
    _max: SharedLinkMaxAggregateOutputType | null
  }

  export type SharedLinkAvgAggregateOutputType = {
    ownerId: number | null
    identityId: number | null
    accessLimit: number | null
    accessCount: number | null
  }

  export type SharedLinkSumAggregateOutputType = {
    ownerId: number | null
    identityId: number | null
    accessLimit: number | null
    accessCount: number | null
  }

  export type SharedLinkMinAggregateOutputType = {
    id: string | null
    ownerId: number | null
    identityId: number | null
    context: string | null
    name: string | null
    isActive: boolean | null
    expiresAt: Date | null
    accessLimit: number | null
    accessCount: number | null
    requireAuth: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedLinkMaxAggregateOutputType = {
    id: string | null
    ownerId: number | null
    identityId: number | null
    context: string | null
    name: string | null
    isActive: boolean | null
    expiresAt: Date | null
    accessLimit: number | null
    accessCount: number | null
    requireAuth: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharedLinkCountAggregateOutputType = {
    id: number
    ownerId: number
    identityId: number
    context: number
    name: number
    isActive: number
    expiresAt: number
    accessLimit: number
    accessCount: number
    requireAuth: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharedLinkAvgAggregateInputType = {
    ownerId?: true
    identityId?: true
    accessLimit?: true
    accessCount?: true
  }

  export type SharedLinkSumAggregateInputType = {
    ownerId?: true
    identityId?: true
    accessLimit?: true
    accessCount?: true
  }

  export type SharedLinkMinAggregateInputType = {
    id?: true
    ownerId?: true
    identityId?: true
    context?: true
    name?: true
    isActive?: true
    expiresAt?: true
    accessLimit?: true
    accessCount?: true
    requireAuth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedLinkMaxAggregateInputType = {
    id?: true
    ownerId?: true
    identityId?: true
    context?: true
    name?: true
    isActive?: true
    expiresAt?: true
    accessLimit?: true
    accessCount?: true
    requireAuth?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharedLinkCountAggregateInputType = {
    id?: true
    ownerId?: true
    identityId?: true
    context?: true
    name?: true
    isActive?: true
    expiresAt?: true
    accessLimit?: true
    accessCount?: true
    requireAuth?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharedLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedLink to aggregate.
     */
    where?: SharedLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinks to fetch.
     */
    orderBy?: SharedLinkOrderByWithRelationInput | SharedLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedLinks
    **/
    _count?: true | SharedLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedLinkMaxAggregateInputType
  }

  export type GetSharedLinkAggregateType<T extends SharedLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedLink[P]>
      : GetScalarType<T[P], AggregateSharedLink[P]>
  }




  export type SharedLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedLinkWhereInput
    orderBy?: SharedLinkOrderByWithAggregationInput | SharedLinkOrderByWithAggregationInput[]
    by: SharedLinkScalarFieldEnum[] | SharedLinkScalarFieldEnum
    having?: SharedLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedLinkCountAggregateInputType | true
    _avg?: SharedLinkAvgAggregateInputType
    _sum?: SharedLinkSumAggregateInputType
    _min?: SharedLinkMinAggregateInputType
    _max?: SharedLinkMaxAggregateInputType
  }

  export type SharedLinkGroupByOutputType = {
    id: string
    ownerId: number
    identityId: number
    context: string
    name: string | null
    isActive: boolean
    expiresAt: Date | null
    accessLimit: number | null
    accessCount: number
    requireAuth: boolean
    createdAt: Date
    updatedAt: Date
    _count: SharedLinkCountAggregateOutputType | null
    _avg: SharedLinkAvgAggregateOutputType | null
    _sum: SharedLinkSumAggregateOutputType | null
    _min: SharedLinkMinAggregateOutputType | null
    _max: SharedLinkMaxAggregateOutputType | null
  }

  type GetSharedLinkGroupByPayload<T extends SharedLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SharedLinkGroupByOutputType[P]>
        }
      >
    >


  export type SharedLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    identityId?: boolean
    context?: boolean
    name?: boolean
    isActive?: boolean
    expiresAt?: boolean
    accessLimit?: boolean
    accessCount?: boolean
    requireAuth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
    accesses?: boolean | SharedLink$accessesArgs<ExtArgs>
    _count?: boolean | SharedLinkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedLink"]>

  export type SharedLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    identityId?: boolean
    context?: boolean
    name?: boolean
    isActive?: boolean
    expiresAt?: boolean
    accessLimit?: boolean
    accessCount?: boolean
    requireAuth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedLink"]>

  export type SharedLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    identityId?: boolean
    context?: boolean
    name?: boolean
    isActive?: boolean
    expiresAt?: boolean
    accessLimit?: boolean
    accessCount?: boolean
    requireAuth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedLink"]>

  export type SharedLinkSelectScalar = {
    id?: boolean
    ownerId?: boolean
    identityId?: boolean
    context?: boolean
    name?: boolean
    isActive?: boolean
    expiresAt?: boolean
    accessLimit?: boolean
    accessCount?: boolean
    requireAuth?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SharedLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "identityId" | "context" | "name" | "isActive" | "expiresAt" | "accessLimit" | "accessCount" | "requireAuth" | "createdAt" | "updatedAt", ExtArgs["result"]["sharedLink"]>
  export type SharedLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
    accesses?: boolean | SharedLink$accessesArgs<ExtArgs>
    _count?: boolean | SharedLinkCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SharedLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }
  export type SharedLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityDefaultArgs<ExtArgs>
  }

  export type $SharedLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedLink"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      identity: Prisma.$IdentityPayload<ExtArgs>
      accesses: Prisma.$SharedLinkAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: number
      identityId: number
      context: string
      name: string | null
      isActive: boolean
      expiresAt: Date | null
      accessLimit: number | null
      accessCount: number
      requireAuth: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sharedLink"]>
    composites: {}
  }

  type SharedLinkGetPayload<S extends boolean | null | undefined | SharedLinkDefaultArgs> = $Result.GetResult<Prisma.$SharedLinkPayload, S>

  type SharedLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedLinkCountAggregateInputType | true
    }

  export interface SharedLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedLink'], meta: { name: 'SharedLink' } }
    /**
     * Find zero or one SharedLink that matches the filter.
     * @param {SharedLinkFindUniqueArgs} args - Arguments to find a SharedLink
     * @example
     * // Get one SharedLink
     * const sharedLink = await prisma.sharedLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedLinkFindUniqueArgs>(args: SelectSubset<T, SharedLinkFindUniqueArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedLinkFindUniqueOrThrowArgs} args - Arguments to find a SharedLink
     * @example
     * // Get one SharedLink
     * const sharedLink = await prisma.sharedLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkFindFirstArgs} args - Arguments to find a SharedLink
     * @example
     * // Get one SharedLink
     * const sharedLink = await prisma.sharedLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedLinkFindFirstArgs>(args?: SelectSubset<T, SharedLinkFindFirstArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkFindFirstOrThrowArgs} args - Arguments to find a SharedLink
     * @example
     * // Get one SharedLink
     * const sharedLink = await prisma.sharedLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedLinks
     * const sharedLinks = await prisma.sharedLink.findMany()
     * 
     * // Get first 10 SharedLinks
     * const sharedLinks = await prisma.sharedLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedLinkWithIdOnly = await prisma.sharedLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedLinkFindManyArgs>(args?: SelectSubset<T, SharedLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedLink.
     * @param {SharedLinkCreateArgs} args - Arguments to create a SharedLink.
     * @example
     * // Create one SharedLink
     * const SharedLink = await prisma.sharedLink.create({
     *   data: {
     *     // ... data to create a SharedLink
     *   }
     * })
     * 
     */
    create<T extends SharedLinkCreateArgs>(args: SelectSubset<T, SharedLinkCreateArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedLinks.
     * @param {SharedLinkCreateManyArgs} args - Arguments to create many SharedLinks.
     * @example
     * // Create many SharedLinks
     * const sharedLink = await prisma.sharedLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedLinkCreateManyArgs>(args?: SelectSubset<T, SharedLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedLinks and returns the data saved in the database.
     * @param {SharedLinkCreateManyAndReturnArgs} args - Arguments to create many SharedLinks.
     * @example
     * // Create many SharedLinks
     * const sharedLink = await prisma.sharedLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedLinks and only return the `id`
     * const sharedLinkWithIdOnly = await prisma.sharedLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedLink.
     * @param {SharedLinkDeleteArgs} args - Arguments to delete one SharedLink.
     * @example
     * // Delete one SharedLink
     * const SharedLink = await prisma.sharedLink.delete({
     *   where: {
     *     // ... filter to delete one SharedLink
     *   }
     * })
     * 
     */
    delete<T extends SharedLinkDeleteArgs>(args: SelectSubset<T, SharedLinkDeleteArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedLink.
     * @param {SharedLinkUpdateArgs} args - Arguments to update one SharedLink.
     * @example
     * // Update one SharedLink
     * const sharedLink = await prisma.sharedLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedLinkUpdateArgs>(args: SelectSubset<T, SharedLinkUpdateArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedLinks.
     * @param {SharedLinkDeleteManyArgs} args - Arguments to filter SharedLinks to delete.
     * @example
     * // Delete a few SharedLinks
     * const { count } = await prisma.sharedLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedLinkDeleteManyArgs>(args?: SelectSubset<T, SharedLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedLinks
     * const sharedLink = await prisma.sharedLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedLinkUpdateManyArgs>(args: SelectSubset<T, SharedLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedLinks and returns the data updated in the database.
     * @param {SharedLinkUpdateManyAndReturnArgs} args - Arguments to update many SharedLinks.
     * @example
     * // Update many SharedLinks
     * const sharedLink = await prisma.sharedLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedLinks and only return the `id`
     * const sharedLinkWithIdOnly = await prisma.sharedLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends SharedLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedLink.
     * @param {SharedLinkUpsertArgs} args - Arguments to update or create a SharedLink.
     * @example
     * // Update or create a SharedLink
     * const sharedLink = await prisma.sharedLink.upsert({
     *   create: {
     *     // ... data to create a SharedLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedLink we want to update
     *   }
     * })
     */
    upsert<T extends SharedLinkUpsertArgs>(args: SelectSubset<T, SharedLinkUpsertArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkCountArgs} args - Arguments to filter SharedLinks to count.
     * @example
     * // Count the number of SharedLinks
     * const count = await prisma.sharedLink.count({
     *   where: {
     *     // ... the filter for the SharedLinks we want to count
     *   }
     * })
    **/
    count<T extends SharedLinkCountArgs>(
      args?: Subset<T, SharedLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedLinkAggregateArgs>(args: Subset<T, SharedLinkAggregateArgs>): Prisma.PrismaPromise<GetSharedLinkAggregateType<T>>

    /**
     * Group by SharedLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkGroupByArgs} args - Group by arguments.
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
      T extends SharedLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedLinkGroupByArgs['orderBy'] }
        : { orderBy?: SharedLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedLink model
   */
  readonly fields: SharedLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    identity<T extends IdentityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IdentityDefaultArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accesses<T extends SharedLink$accessesArgs<ExtArgs> = {}>(args?: Subset<T, SharedLink$accessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SharedLink model
   */
  interface SharedLinkFieldRefs {
    readonly id: FieldRef<"SharedLink", 'String'>
    readonly ownerId: FieldRef<"SharedLink", 'Int'>
    readonly identityId: FieldRef<"SharedLink", 'Int'>
    readonly context: FieldRef<"SharedLink", 'String'>
    readonly name: FieldRef<"SharedLink", 'String'>
    readonly isActive: FieldRef<"SharedLink", 'Boolean'>
    readonly expiresAt: FieldRef<"SharedLink", 'DateTime'>
    readonly accessLimit: FieldRef<"SharedLink", 'Int'>
    readonly accessCount: FieldRef<"SharedLink", 'Int'>
    readonly requireAuth: FieldRef<"SharedLink", 'Boolean'>
    readonly createdAt: FieldRef<"SharedLink", 'DateTime'>
    readonly updatedAt: FieldRef<"SharedLink", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharedLink findUnique
   */
  export type SharedLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * Filter, which SharedLink to fetch.
     */
    where: SharedLinkWhereUniqueInput
  }

  /**
   * SharedLink findUniqueOrThrow
   */
  export type SharedLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * Filter, which SharedLink to fetch.
     */
    where: SharedLinkWhereUniqueInput
  }

  /**
   * SharedLink findFirst
   */
  export type SharedLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * Filter, which SharedLink to fetch.
     */
    where?: SharedLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinks to fetch.
     */
    orderBy?: SharedLinkOrderByWithRelationInput | SharedLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedLinks.
     */
    cursor?: SharedLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedLinks.
     */
    distinct?: SharedLinkScalarFieldEnum | SharedLinkScalarFieldEnum[]
  }

  /**
   * SharedLink findFirstOrThrow
   */
  export type SharedLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * Filter, which SharedLink to fetch.
     */
    where?: SharedLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinks to fetch.
     */
    orderBy?: SharedLinkOrderByWithRelationInput | SharedLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedLinks.
     */
    cursor?: SharedLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedLinks.
     */
    distinct?: SharedLinkScalarFieldEnum | SharedLinkScalarFieldEnum[]
  }

  /**
   * SharedLink findMany
   */
  export type SharedLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * Filter, which SharedLinks to fetch.
     */
    where?: SharedLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinks to fetch.
     */
    orderBy?: SharedLinkOrderByWithRelationInput | SharedLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedLinks.
     */
    cursor?: SharedLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinks.
     */
    skip?: number
    distinct?: SharedLinkScalarFieldEnum | SharedLinkScalarFieldEnum[]
  }

  /**
   * SharedLink create
   */
  export type SharedLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedLink.
     */
    data: XOR<SharedLinkCreateInput, SharedLinkUncheckedCreateInput>
  }

  /**
   * SharedLink createMany
   */
  export type SharedLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedLinks.
     */
    data: SharedLinkCreateManyInput | SharedLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedLink createManyAndReturn
   */
  export type SharedLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SharedLinks.
     */
    data: SharedLinkCreateManyInput | SharedLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedLink update
   */
  export type SharedLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedLink.
     */
    data: XOR<SharedLinkUpdateInput, SharedLinkUncheckedUpdateInput>
    /**
     * Choose, which SharedLink to update.
     */
    where: SharedLinkWhereUniqueInput
  }

  /**
   * SharedLink updateMany
   */
  export type SharedLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedLinks.
     */
    data: XOR<SharedLinkUpdateManyMutationInput, SharedLinkUncheckedUpdateManyInput>
    /**
     * Filter which SharedLinks to update
     */
    where?: SharedLinkWhereInput
    /**
     * Limit how many SharedLinks to update.
     */
    limit?: number
  }

  /**
   * SharedLink updateManyAndReturn
   */
  export type SharedLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * The data used to update SharedLinks.
     */
    data: XOR<SharedLinkUpdateManyMutationInput, SharedLinkUncheckedUpdateManyInput>
    /**
     * Filter which SharedLinks to update
     */
    where?: SharedLinkWhereInput
    /**
     * Limit how many SharedLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedLink upsert
   */
  export type SharedLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedLink to update in case it exists.
     */
    where: SharedLinkWhereUniqueInput
    /**
     * In case the SharedLink found by the `where` argument doesn't exist, create a new SharedLink with this data.
     */
    create: XOR<SharedLinkCreateInput, SharedLinkUncheckedCreateInput>
    /**
     * In case the SharedLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedLinkUpdateInput, SharedLinkUncheckedUpdateInput>
  }

  /**
   * SharedLink delete
   */
  export type SharedLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
    /**
     * Filter which SharedLink to delete.
     */
    where: SharedLinkWhereUniqueInput
  }

  /**
   * SharedLink deleteMany
   */
  export type SharedLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedLinks to delete
     */
    where?: SharedLinkWhereInput
    /**
     * Limit how many SharedLinks to delete.
     */
    limit?: number
  }

  /**
   * SharedLink.accesses
   */
  export type SharedLink$accessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    where?: SharedLinkAccessWhereInput
    orderBy?: SharedLinkAccessOrderByWithRelationInput | SharedLinkAccessOrderByWithRelationInput[]
    cursor?: SharedLinkAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SharedLinkAccessScalarFieldEnum | SharedLinkAccessScalarFieldEnum[]
  }

  /**
   * SharedLink without action
   */
  export type SharedLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLink
     */
    select?: SharedLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLink
     */
    omit?: SharedLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkInclude<ExtArgs> | null
  }


  /**
   * Model SharedLinkAccess
   */

  export type AggregateSharedLinkAccess = {
    _count: SharedLinkAccessCountAggregateOutputType | null
    _avg: SharedLinkAccessAvgAggregateOutputType | null
    _sum: SharedLinkAccessSumAggregateOutputType | null
    _min: SharedLinkAccessMinAggregateOutputType | null
    _max: SharedLinkAccessMaxAggregateOutputType | null
  }

  export type SharedLinkAccessAvgAggregateOutputType = {
    id: number | null
  }

  export type SharedLinkAccessSumAggregateOutputType = {
    id: number | null
  }

  export type SharedLinkAccessMinAggregateOutputType = {
    id: number | null
    sharedLinkId: string | null
    viewerIp: string | null
    viewerAgent: string | null
    accessedAt: Date | null
  }

  export type SharedLinkAccessMaxAggregateOutputType = {
    id: number | null
    sharedLinkId: string | null
    viewerIp: string | null
    viewerAgent: string | null
    accessedAt: Date | null
  }

  export type SharedLinkAccessCountAggregateOutputType = {
    id: number
    sharedLinkId: number
    viewerIp: number
    viewerAgent: number
    accessedAt: number
    _all: number
  }


  export type SharedLinkAccessAvgAggregateInputType = {
    id?: true
  }

  export type SharedLinkAccessSumAggregateInputType = {
    id?: true
  }

  export type SharedLinkAccessMinAggregateInputType = {
    id?: true
    sharedLinkId?: true
    viewerIp?: true
    viewerAgent?: true
    accessedAt?: true
  }

  export type SharedLinkAccessMaxAggregateInputType = {
    id?: true
    sharedLinkId?: true
    viewerIp?: true
    viewerAgent?: true
    accessedAt?: true
  }

  export type SharedLinkAccessCountAggregateInputType = {
    id?: true
    sharedLinkId?: true
    viewerIp?: true
    viewerAgent?: true
    accessedAt?: true
    _all?: true
  }

  export type SharedLinkAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedLinkAccess to aggregate.
     */
    where?: SharedLinkAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinkAccesses to fetch.
     */
    orderBy?: SharedLinkAccessOrderByWithRelationInput | SharedLinkAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharedLinkAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinkAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinkAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharedLinkAccesses
    **/
    _count?: true | SharedLinkAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SharedLinkAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SharedLinkAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharedLinkAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharedLinkAccessMaxAggregateInputType
  }

  export type GetSharedLinkAccessAggregateType<T extends SharedLinkAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateSharedLinkAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharedLinkAccess[P]>
      : GetScalarType<T[P], AggregateSharedLinkAccess[P]>
  }




  export type SharedLinkAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharedLinkAccessWhereInput
    orderBy?: SharedLinkAccessOrderByWithAggregationInput | SharedLinkAccessOrderByWithAggregationInput[]
    by: SharedLinkAccessScalarFieldEnum[] | SharedLinkAccessScalarFieldEnum
    having?: SharedLinkAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharedLinkAccessCountAggregateInputType | true
    _avg?: SharedLinkAccessAvgAggregateInputType
    _sum?: SharedLinkAccessSumAggregateInputType
    _min?: SharedLinkAccessMinAggregateInputType
    _max?: SharedLinkAccessMaxAggregateInputType
  }

  export type SharedLinkAccessGroupByOutputType = {
    id: number
    sharedLinkId: string
    viewerIp: string | null
    viewerAgent: string | null
    accessedAt: Date
    _count: SharedLinkAccessCountAggregateOutputType | null
    _avg: SharedLinkAccessAvgAggregateOutputType | null
    _sum: SharedLinkAccessSumAggregateOutputType | null
    _min: SharedLinkAccessMinAggregateOutputType | null
    _max: SharedLinkAccessMaxAggregateOutputType | null
  }

  type GetSharedLinkAccessGroupByPayload<T extends SharedLinkAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharedLinkAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharedLinkAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharedLinkAccessGroupByOutputType[P]>
            : GetScalarType<T[P], SharedLinkAccessGroupByOutputType[P]>
        }
      >
    >


  export type SharedLinkAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedLinkId?: boolean
    viewerIp?: boolean
    viewerAgent?: boolean
    accessedAt?: boolean
    sharedLink?: boolean | SharedLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedLinkAccess"]>

  export type SharedLinkAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedLinkId?: boolean
    viewerIp?: boolean
    viewerAgent?: boolean
    accessedAt?: boolean
    sharedLink?: boolean | SharedLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedLinkAccess"]>

  export type SharedLinkAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sharedLinkId?: boolean
    viewerIp?: boolean
    viewerAgent?: boolean
    accessedAt?: boolean
    sharedLink?: boolean | SharedLinkDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sharedLinkAccess"]>

  export type SharedLinkAccessSelectScalar = {
    id?: boolean
    sharedLinkId?: boolean
    viewerIp?: boolean
    viewerAgent?: boolean
    accessedAt?: boolean
  }

  export type SharedLinkAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sharedLinkId" | "viewerIp" | "viewerAgent" | "accessedAt", ExtArgs["result"]["sharedLinkAccess"]>
  export type SharedLinkAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedLink?: boolean | SharedLinkDefaultArgs<ExtArgs>
  }
  export type SharedLinkAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedLink?: boolean | SharedLinkDefaultArgs<ExtArgs>
  }
  export type SharedLinkAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sharedLink?: boolean | SharedLinkDefaultArgs<ExtArgs>
  }

  export type $SharedLinkAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharedLinkAccess"
    objects: {
      sharedLink: Prisma.$SharedLinkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sharedLinkId: string
      viewerIp: string | null
      viewerAgent: string | null
      accessedAt: Date
    }, ExtArgs["result"]["sharedLinkAccess"]>
    composites: {}
  }

  type SharedLinkAccessGetPayload<S extends boolean | null | undefined | SharedLinkAccessDefaultArgs> = $Result.GetResult<Prisma.$SharedLinkAccessPayload, S>

  type SharedLinkAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharedLinkAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharedLinkAccessCountAggregateInputType | true
    }

  export interface SharedLinkAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharedLinkAccess'], meta: { name: 'SharedLinkAccess' } }
    /**
     * Find zero or one SharedLinkAccess that matches the filter.
     * @param {SharedLinkAccessFindUniqueArgs} args - Arguments to find a SharedLinkAccess
     * @example
     * // Get one SharedLinkAccess
     * const sharedLinkAccess = await prisma.sharedLinkAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharedLinkAccessFindUniqueArgs>(args: SelectSubset<T, SharedLinkAccessFindUniqueArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharedLinkAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharedLinkAccessFindUniqueOrThrowArgs} args - Arguments to find a SharedLinkAccess
     * @example
     * // Get one SharedLinkAccess
     * const sharedLinkAccess = await prisma.sharedLinkAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharedLinkAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, SharedLinkAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedLinkAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessFindFirstArgs} args - Arguments to find a SharedLinkAccess
     * @example
     * // Get one SharedLinkAccess
     * const sharedLinkAccess = await prisma.sharedLinkAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharedLinkAccessFindFirstArgs>(args?: SelectSubset<T, SharedLinkAccessFindFirstArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharedLinkAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessFindFirstOrThrowArgs} args - Arguments to find a SharedLinkAccess
     * @example
     * // Get one SharedLinkAccess
     * const sharedLinkAccess = await prisma.sharedLinkAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharedLinkAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, SharedLinkAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharedLinkAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharedLinkAccesses
     * const sharedLinkAccesses = await prisma.sharedLinkAccess.findMany()
     * 
     * // Get first 10 SharedLinkAccesses
     * const sharedLinkAccesses = await prisma.sharedLinkAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharedLinkAccessWithIdOnly = await prisma.sharedLinkAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharedLinkAccessFindManyArgs>(args?: SelectSubset<T, SharedLinkAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharedLinkAccess.
     * @param {SharedLinkAccessCreateArgs} args - Arguments to create a SharedLinkAccess.
     * @example
     * // Create one SharedLinkAccess
     * const SharedLinkAccess = await prisma.sharedLinkAccess.create({
     *   data: {
     *     // ... data to create a SharedLinkAccess
     *   }
     * })
     * 
     */
    create<T extends SharedLinkAccessCreateArgs>(args: SelectSubset<T, SharedLinkAccessCreateArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharedLinkAccesses.
     * @param {SharedLinkAccessCreateManyArgs} args - Arguments to create many SharedLinkAccesses.
     * @example
     * // Create many SharedLinkAccesses
     * const sharedLinkAccess = await prisma.sharedLinkAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharedLinkAccessCreateManyArgs>(args?: SelectSubset<T, SharedLinkAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharedLinkAccesses and returns the data saved in the database.
     * @param {SharedLinkAccessCreateManyAndReturnArgs} args - Arguments to create many SharedLinkAccesses.
     * @example
     * // Create many SharedLinkAccesses
     * const sharedLinkAccess = await prisma.sharedLinkAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharedLinkAccesses and only return the `id`
     * const sharedLinkAccessWithIdOnly = await prisma.sharedLinkAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharedLinkAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, SharedLinkAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharedLinkAccess.
     * @param {SharedLinkAccessDeleteArgs} args - Arguments to delete one SharedLinkAccess.
     * @example
     * // Delete one SharedLinkAccess
     * const SharedLinkAccess = await prisma.sharedLinkAccess.delete({
     *   where: {
     *     // ... filter to delete one SharedLinkAccess
     *   }
     * })
     * 
     */
    delete<T extends SharedLinkAccessDeleteArgs>(args: SelectSubset<T, SharedLinkAccessDeleteArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharedLinkAccess.
     * @param {SharedLinkAccessUpdateArgs} args - Arguments to update one SharedLinkAccess.
     * @example
     * // Update one SharedLinkAccess
     * const sharedLinkAccess = await prisma.sharedLinkAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharedLinkAccessUpdateArgs>(args: SelectSubset<T, SharedLinkAccessUpdateArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharedLinkAccesses.
     * @param {SharedLinkAccessDeleteManyArgs} args - Arguments to filter SharedLinkAccesses to delete.
     * @example
     * // Delete a few SharedLinkAccesses
     * const { count } = await prisma.sharedLinkAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharedLinkAccessDeleteManyArgs>(args?: SelectSubset<T, SharedLinkAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedLinkAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharedLinkAccesses
     * const sharedLinkAccess = await prisma.sharedLinkAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharedLinkAccessUpdateManyArgs>(args: SelectSubset<T, SharedLinkAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharedLinkAccesses and returns the data updated in the database.
     * @param {SharedLinkAccessUpdateManyAndReturnArgs} args - Arguments to update many SharedLinkAccesses.
     * @example
     * // Update many SharedLinkAccesses
     * const sharedLinkAccess = await prisma.sharedLinkAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharedLinkAccesses and only return the `id`
     * const sharedLinkAccessWithIdOnly = await prisma.sharedLinkAccess.updateManyAndReturn({
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
    updateManyAndReturn<T extends SharedLinkAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, SharedLinkAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharedLinkAccess.
     * @param {SharedLinkAccessUpsertArgs} args - Arguments to update or create a SharedLinkAccess.
     * @example
     * // Update or create a SharedLinkAccess
     * const sharedLinkAccess = await prisma.sharedLinkAccess.upsert({
     *   create: {
     *     // ... data to create a SharedLinkAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharedLinkAccess we want to update
     *   }
     * })
     */
    upsert<T extends SharedLinkAccessUpsertArgs>(args: SelectSubset<T, SharedLinkAccessUpsertArgs<ExtArgs>>): Prisma__SharedLinkAccessClient<$Result.GetResult<Prisma.$SharedLinkAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharedLinkAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessCountArgs} args - Arguments to filter SharedLinkAccesses to count.
     * @example
     * // Count the number of SharedLinkAccesses
     * const count = await prisma.sharedLinkAccess.count({
     *   where: {
     *     // ... the filter for the SharedLinkAccesses we want to count
     *   }
     * })
    **/
    count<T extends SharedLinkAccessCountArgs>(
      args?: Subset<T, SharedLinkAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharedLinkAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharedLinkAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharedLinkAccessAggregateArgs>(args: Subset<T, SharedLinkAccessAggregateArgs>): Prisma.PrismaPromise<GetSharedLinkAccessAggregateType<T>>

    /**
     * Group by SharedLinkAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharedLinkAccessGroupByArgs} args - Group by arguments.
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
      T extends SharedLinkAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharedLinkAccessGroupByArgs['orderBy'] }
        : { orderBy?: SharedLinkAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharedLinkAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharedLinkAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharedLinkAccess model
   */
  readonly fields: SharedLinkAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharedLinkAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharedLinkAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sharedLink<T extends SharedLinkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SharedLinkDefaultArgs<ExtArgs>>): Prisma__SharedLinkClient<$Result.GetResult<Prisma.$SharedLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SharedLinkAccess model
   */
  interface SharedLinkAccessFieldRefs {
    readonly id: FieldRef<"SharedLinkAccess", 'Int'>
    readonly sharedLinkId: FieldRef<"SharedLinkAccess", 'String'>
    readonly viewerIp: FieldRef<"SharedLinkAccess", 'String'>
    readonly viewerAgent: FieldRef<"SharedLinkAccess", 'String'>
    readonly accessedAt: FieldRef<"SharedLinkAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharedLinkAccess findUnique
   */
  export type SharedLinkAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedLinkAccess to fetch.
     */
    where: SharedLinkAccessWhereUniqueInput
  }

  /**
   * SharedLinkAccess findUniqueOrThrow
   */
  export type SharedLinkAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedLinkAccess to fetch.
     */
    where: SharedLinkAccessWhereUniqueInput
  }

  /**
   * SharedLinkAccess findFirst
   */
  export type SharedLinkAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedLinkAccess to fetch.
     */
    where?: SharedLinkAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinkAccesses to fetch.
     */
    orderBy?: SharedLinkAccessOrderByWithRelationInput | SharedLinkAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedLinkAccesses.
     */
    cursor?: SharedLinkAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinkAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinkAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedLinkAccesses.
     */
    distinct?: SharedLinkAccessScalarFieldEnum | SharedLinkAccessScalarFieldEnum[]
  }

  /**
   * SharedLinkAccess findFirstOrThrow
   */
  export type SharedLinkAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedLinkAccess to fetch.
     */
    where?: SharedLinkAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinkAccesses to fetch.
     */
    orderBy?: SharedLinkAccessOrderByWithRelationInput | SharedLinkAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharedLinkAccesses.
     */
    cursor?: SharedLinkAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinkAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinkAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharedLinkAccesses.
     */
    distinct?: SharedLinkAccessScalarFieldEnum | SharedLinkAccessScalarFieldEnum[]
  }

  /**
   * SharedLinkAccess findMany
   */
  export type SharedLinkAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * Filter, which SharedLinkAccesses to fetch.
     */
    where?: SharedLinkAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharedLinkAccesses to fetch.
     */
    orderBy?: SharedLinkAccessOrderByWithRelationInput | SharedLinkAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharedLinkAccesses.
     */
    cursor?: SharedLinkAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharedLinkAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharedLinkAccesses.
     */
    skip?: number
    distinct?: SharedLinkAccessScalarFieldEnum | SharedLinkAccessScalarFieldEnum[]
  }

  /**
   * SharedLinkAccess create
   */
  export type SharedLinkAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a SharedLinkAccess.
     */
    data: XOR<SharedLinkAccessCreateInput, SharedLinkAccessUncheckedCreateInput>
  }

  /**
   * SharedLinkAccess createMany
   */
  export type SharedLinkAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharedLinkAccesses.
     */
    data: SharedLinkAccessCreateManyInput | SharedLinkAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharedLinkAccess createManyAndReturn
   */
  export type SharedLinkAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * The data used to create many SharedLinkAccesses.
     */
    data: SharedLinkAccessCreateManyInput | SharedLinkAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedLinkAccess update
   */
  export type SharedLinkAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a SharedLinkAccess.
     */
    data: XOR<SharedLinkAccessUpdateInput, SharedLinkAccessUncheckedUpdateInput>
    /**
     * Choose, which SharedLinkAccess to update.
     */
    where: SharedLinkAccessWhereUniqueInput
  }

  /**
   * SharedLinkAccess updateMany
   */
  export type SharedLinkAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharedLinkAccesses.
     */
    data: XOR<SharedLinkAccessUpdateManyMutationInput, SharedLinkAccessUncheckedUpdateManyInput>
    /**
     * Filter which SharedLinkAccesses to update
     */
    where?: SharedLinkAccessWhereInput
    /**
     * Limit how many SharedLinkAccesses to update.
     */
    limit?: number
  }

  /**
   * SharedLinkAccess updateManyAndReturn
   */
  export type SharedLinkAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * The data used to update SharedLinkAccesses.
     */
    data: XOR<SharedLinkAccessUpdateManyMutationInput, SharedLinkAccessUncheckedUpdateManyInput>
    /**
     * Filter which SharedLinkAccesses to update
     */
    where?: SharedLinkAccessWhereInput
    /**
     * Limit how many SharedLinkAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SharedLinkAccess upsert
   */
  export type SharedLinkAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the SharedLinkAccess to update in case it exists.
     */
    where: SharedLinkAccessWhereUniqueInput
    /**
     * In case the SharedLinkAccess found by the `where` argument doesn't exist, create a new SharedLinkAccess with this data.
     */
    create: XOR<SharedLinkAccessCreateInput, SharedLinkAccessUncheckedCreateInput>
    /**
     * In case the SharedLinkAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharedLinkAccessUpdateInput, SharedLinkAccessUncheckedUpdateInput>
  }

  /**
   * SharedLinkAccess delete
   */
  export type SharedLinkAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
    /**
     * Filter which SharedLinkAccess to delete.
     */
    where: SharedLinkAccessWhereUniqueInput
  }

  /**
   * SharedLinkAccess deleteMany
   */
  export type SharedLinkAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharedLinkAccesses to delete
     */
    where?: SharedLinkAccessWhereInput
    /**
     * Limit how many SharedLinkAccesses to delete.
     */
    limit?: number
  }

  /**
   * SharedLinkAccess without action
   */
  export type SharedLinkAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharedLinkAccess
     */
    select?: SharedLinkAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharedLinkAccess
     */
    omit?: SharedLinkAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SharedLinkAccessInclude<ExtArgs> | null
  }


  /**
   * Model IdentityRequest
   */

  export type AggregateIdentityRequest = {
    _count: IdentityRequestCountAggregateOutputType | null
    _avg: IdentityRequestAvgAggregateOutputType | null
    _sum: IdentityRequestSumAggregateOutputType | null
    _min: IdentityRequestMinAggregateOutputType | null
    _max: IdentityRequestMaxAggregateOutputType | null
  }

  export type IdentityRequestAvgAggregateOutputType = {
    id: number | null
    requesterId: number | null
    targetId: number | null
    identityId: number | null
  }

  export type IdentityRequestSumAggregateOutputType = {
    id: number | null
    requesterId: number | null
    targetId: number | null
    identityId: number | null
  }

  export type IdentityRequestMinAggregateOutputType = {
    id: number | null
    requesterId: number | null
    targetId: number | null
    identityId: number | null
    context: string | null
    message: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    respondedAt: Date | null
  }

  export type IdentityRequestMaxAggregateOutputType = {
    id: number | null
    requesterId: number | null
    targetId: number | null
    identityId: number | null
    context: string | null
    message: string | null
    status: $Enums.RequestStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    respondedAt: Date | null
  }

  export type IdentityRequestCountAggregateOutputType = {
    id: number
    requesterId: number
    targetId: number
    identityId: number
    context: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    respondedAt: number
    _all: number
  }


  export type IdentityRequestAvgAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    identityId?: true
  }

  export type IdentityRequestSumAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    identityId?: true
  }

  export type IdentityRequestMinAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    identityId?: true
    context?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    respondedAt?: true
  }

  export type IdentityRequestMaxAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    identityId?: true
    context?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    respondedAt?: true
  }

  export type IdentityRequestCountAggregateInputType = {
    id?: true
    requesterId?: true
    targetId?: true
    identityId?: true
    context?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    respondedAt?: true
    _all?: true
  }

  export type IdentityRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityRequest to aggregate.
     */
    where?: IdentityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityRequests to fetch.
     */
    orderBy?: IdentityRequestOrderByWithRelationInput | IdentityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IdentityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IdentityRequests
    **/
    _count?: true | IdentityRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IdentityRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IdentityRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IdentityRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IdentityRequestMaxAggregateInputType
  }

  export type GetIdentityRequestAggregateType<T extends IdentityRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateIdentityRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIdentityRequest[P]>
      : GetScalarType<T[P], AggregateIdentityRequest[P]>
  }




  export type IdentityRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IdentityRequestWhereInput
    orderBy?: IdentityRequestOrderByWithAggregationInput | IdentityRequestOrderByWithAggregationInput[]
    by: IdentityRequestScalarFieldEnum[] | IdentityRequestScalarFieldEnum
    having?: IdentityRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IdentityRequestCountAggregateInputType | true
    _avg?: IdentityRequestAvgAggregateInputType
    _sum?: IdentityRequestSumAggregateInputType
    _min?: IdentityRequestMinAggregateInputType
    _max?: IdentityRequestMaxAggregateInputType
  }

  export type IdentityRequestGroupByOutputType = {
    id: number
    requesterId: number
    targetId: number
    identityId: number | null
    context: string
    message: string | null
    status: $Enums.RequestStatus
    createdAt: Date
    updatedAt: Date
    respondedAt: Date | null
    _count: IdentityRequestCountAggregateOutputType | null
    _avg: IdentityRequestAvgAggregateOutputType | null
    _sum: IdentityRequestSumAggregateOutputType | null
    _min: IdentityRequestMinAggregateOutputType | null
    _max: IdentityRequestMaxAggregateOutputType | null
  }

  type GetIdentityRequestGroupByPayload<T extends IdentityRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IdentityRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IdentityRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IdentityRequestGroupByOutputType[P]>
            : GetScalarType<T[P], IdentityRequestGroupByOutputType[P]>
        }
      >
    >


  export type IdentityRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    identityId?: boolean
    context?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respondedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityRequest$identityArgs<ExtArgs>
  }, ExtArgs["result"]["identityRequest"]>

  export type IdentityRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    identityId?: boolean
    context?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respondedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityRequest$identityArgs<ExtArgs>
  }, ExtArgs["result"]["identityRequest"]>

  export type IdentityRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    identityId?: boolean
    context?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respondedAt?: boolean
    requester?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityRequest$identityArgs<ExtArgs>
  }, ExtArgs["result"]["identityRequest"]>

  export type IdentityRequestSelectScalar = {
    id?: boolean
    requesterId?: boolean
    targetId?: boolean
    identityId?: boolean
    context?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    respondedAt?: boolean
  }

  export type IdentityRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requesterId" | "targetId" | "identityId" | "context" | "message" | "status" | "createdAt" | "updatedAt" | "respondedAt", ExtArgs["result"]["identityRequest"]>
  export type IdentityRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityRequest$identityArgs<ExtArgs>
  }
  export type IdentityRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityRequest$identityArgs<ExtArgs>
  }
  export type IdentityRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requester?: boolean | UserDefaultArgs<ExtArgs>
    identity?: boolean | IdentityRequest$identityArgs<ExtArgs>
  }

  export type $IdentityRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IdentityRequest"
    objects: {
      requester: Prisma.$UserPayload<ExtArgs>
      identity: Prisma.$IdentityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      requesterId: number
      targetId: number
      identityId: number | null
      context: string
      message: string | null
      status: $Enums.RequestStatus
      createdAt: Date
      updatedAt: Date
      respondedAt: Date | null
    }, ExtArgs["result"]["identityRequest"]>
    composites: {}
  }

  type IdentityRequestGetPayload<S extends boolean | null | undefined | IdentityRequestDefaultArgs> = $Result.GetResult<Prisma.$IdentityRequestPayload, S>

  type IdentityRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IdentityRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IdentityRequestCountAggregateInputType | true
    }

  export interface IdentityRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IdentityRequest'], meta: { name: 'IdentityRequest' } }
    /**
     * Find zero or one IdentityRequest that matches the filter.
     * @param {IdentityRequestFindUniqueArgs} args - Arguments to find a IdentityRequest
     * @example
     * // Get one IdentityRequest
     * const identityRequest = await prisma.identityRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IdentityRequestFindUniqueArgs>(args: SelectSubset<T, IdentityRequestFindUniqueArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IdentityRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IdentityRequestFindUniqueOrThrowArgs} args - Arguments to find a IdentityRequest
     * @example
     * // Get one IdentityRequest
     * const identityRequest = await prisma.identityRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IdentityRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, IdentityRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestFindFirstArgs} args - Arguments to find a IdentityRequest
     * @example
     * // Get one IdentityRequest
     * const identityRequest = await prisma.identityRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IdentityRequestFindFirstArgs>(args?: SelectSubset<T, IdentityRequestFindFirstArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IdentityRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestFindFirstOrThrowArgs} args - Arguments to find a IdentityRequest
     * @example
     * // Get one IdentityRequest
     * const identityRequest = await prisma.identityRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IdentityRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, IdentityRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IdentityRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IdentityRequests
     * const identityRequests = await prisma.identityRequest.findMany()
     * 
     * // Get first 10 IdentityRequests
     * const identityRequests = await prisma.identityRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const identityRequestWithIdOnly = await prisma.identityRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IdentityRequestFindManyArgs>(args?: SelectSubset<T, IdentityRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IdentityRequest.
     * @param {IdentityRequestCreateArgs} args - Arguments to create a IdentityRequest.
     * @example
     * // Create one IdentityRequest
     * const IdentityRequest = await prisma.identityRequest.create({
     *   data: {
     *     // ... data to create a IdentityRequest
     *   }
     * })
     * 
     */
    create<T extends IdentityRequestCreateArgs>(args: SelectSubset<T, IdentityRequestCreateArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IdentityRequests.
     * @param {IdentityRequestCreateManyArgs} args - Arguments to create many IdentityRequests.
     * @example
     * // Create many IdentityRequests
     * const identityRequest = await prisma.identityRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IdentityRequestCreateManyArgs>(args?: SelectSubset<T, IdentityRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IdentityRequests and returns the data saved in the database.
     * @param {IdentityRequestCreateManyAndReturnArgs} args - Arguments to create many IdentityRequests.
     * @example
     * // Create many IdentityRequests
     * const identityRequest = await prisma.identityRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IdentityRequests and only return the `id`
     * const identityRequestWithIdOnly = await prisma.identityRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IdentityRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, IdentityRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IdentityRequest.
     * @param {IdentityRequestDeleteArgs} args - Arguments to delete one IdentityRequest.
     * @example
     * // Delete one IdentityRequest
     * const IdentityRequest = await prisma.identityRequest.delete({
     *   where: {
     *     // ... filter to delete one IdentityRequest
     *   }
     * })
     * 
     */
    delete<T extends IdentityRequestDeleteArgs>(args: SelectSubset<T, IdentityRequestDeleteArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IdentityRequest.
     * @param {IdentityRequestUpdateArgs} args - Arguments to update one IdentityRequest.
     * @example
     * // Update one IdentityRequest
     * const identityRequest = await prisma.identityRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IdentityRequestUpdateArgs>(args: SelectSubset<T, IdentityRequestUpdateArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IdentityRequests.
     * @param {IdentityRequestDeleteManyArgs} args - Arguments to filter IdentityRequests to delete.
     * @example
     * // Delete a few IdentityRequests
     * const { count } = await prisma.identityRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IdentityRequestDeleteManyArgs>(args?: SelectSubset<T, IdentityRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IdentityRequests
     * const identityRequest = await prisma.identityRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IdentityRequestUpdateManyArgs>(args: SelectSubset<T, IdentityRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IdentityRequests and returns the data updated in the database.
     * @param {IdentityRequestUpdateManyAndReturnArgs} args - Arguments to update many IdentityRequests.
     * @example
     * // Update many IdentityRequests
     * const identityRequest = await prisma.identityRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IdentityRequests and only return the `id`
     * const identityRequestWithIdOnly = await prisma.identityRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends IdentityRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, IdentityRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IdentityRequest.
     * @param {IdentityRequestUpsertArgs} args - Arguments to update or create a IdentityRequest.
     * @example
     * // Update or create a IdentityRequest
     * const identityRequest = await prisma.identityRequest.upsert({
     *   create: {
     *     // ... data to create a IdentityRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IdentityRequest we want to update
     *   }
     * })
     */
    upsert<T extends IdentityRequestUpsertArgs>(args: SelectSubset<T, IdentityRequestUpsertArgs<ExtArgs>>): Prisma__IdentityRequestClient<$Result.GetResult<Prisma.$IdentityRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IdentityRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestCountArgs} args - Arguments to filter IdentityRequests to count.
     * @example
     * // Count the number of IdentityRequests
     * const count = await prisma.identityRequest.count({
     *   where: {
     *     // ... the filter for the IdentityRequests we want to count
     *   }
     * })
    **/
    count<T extends IdentityRequestCountArgs>(
      args?: Subset<T, IdentityRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IdentityRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IdentityRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IdentityRequestAggregateArgs>(args: Subset<T, IdentityRequestAggregateArgs>): Prisma.PrismaPromise<GetIdentityRequestAggregateType<T>>

    /**
     * Group by IdentityRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IdentityRequestGroupByArgs} args - Group by arguments.
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
      T extends IdentityRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IdentityRequestGroupByArgs['orderBy'] }
        : { orderBy?: IdentityRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IdentityRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIdentityRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IdentityRequest model
   */
  readonly fields: IdentityRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IdentityRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IdentityRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requester<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    identity<T extends IdentityRequest$identityArgs<ExtArgs> = {}>(args?: Subset<T, IdentityRequest$identityArgs<ExtArgs>>): Prisma__IdentityClient<$Result.GetResult<Prisma.$IdentityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the IdentityRequest model
   */
  interface IdentityRequestFieldRefs {
    readonly id: FieldRef<"IdentityRequest", 'Int'>
    readonly requesterId: FieldRef<"IdentityRequest", 'Int'>
    readonly targetId: FieldRef<"IdentityRequest", 'Int'>
    readonly identityId: FieldRef<"IdentityRequest", 'Int'>
    readonly context: FieldRef<"IdentityRequest", 'String'>
    readonly message: FieldRef<"IdentityRequest", 'String'>
    readonly status: FieldRef<"IdentityRequest", 'RequestStatus'>
    readonly createdAt: FieldRef<"IdentityRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"IdentityRequest", 'DateTime'>
    readonly respondedAt: FieldRef<"IdentityRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IdentityRequest findUnique
   */
  export type IdentityRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * Filter, which IdentityRequest to fetch.
     */
    where: IdentityRequestWhereUniqueInput
  }

  /**
   * IdentityRequest findUniqueOrThrow
   */
  export type IdentityRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * Filter, which IdentityRequest to fetch.
     */
    where: IdentityRequestWhereUniqueInput
  }

  /**
   * IdentityRequest findFirst
   */
  export type IdentityRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * Filter, which IdentityRequest to fetch.
     */
    where?: IdentityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityRequests to fetch.
     */
    orderBy?: IdentityRequestOrderByWithRelationInput | IdentityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityRequests.
     */
    cursor?: IdentityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityRequests.
     */
    distinct?: IdentityRequestScalarFieldEnum | IdentityRequestScalarFieldEnum[]
  }

  /**
   * IdentityRequest findFirstOrThrow
   */
  export type IdentityRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * Filter, which IdentityRequest to fetch.
     */
    where?: IdentityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityRequests to fetch.
     */
    orderBy?: IdentityRequestOrderByWithRelationInput | IdentityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IdentityRequests.
     */
    cursor?: IdentityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IdentityRequests.
     */
    distinct?: IdentityRequestScalarFieldEnum | IdentityRequestScalarFieldEnum[]
  }

  /**
   * IdentityRequest findMany
   */
  export type IdentityRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * Filter, which IdentityRequests to fetch.
     */
    where?: IdentityRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IdentityRequests to fetch.
     */
    orderBy?: IdentityRequestOrderByWithRelationInput | IdentityRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IdentityRequests.
     */
    cursor?: IdentityRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IdentityRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IdentityRequests.
     */
    skip?: number
    distinct?: IdentityRequestScalarFieldEnum | IdentityRequestScalarFieldEnum[]
  }

  /**
   * IdentityRequest create
   */
  export type IdentityRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a IdentityRequest.
     */
    data: XOR<IdentityRequestCreateInput, IdentityRequestUncheckedCreateInput>
  }

  /**
   * IdentityRequest createMany
   */
  export type IdentityRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IdentityRequests.
     */
    data: IdentityRequestCreateManyInput | IdentityRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IdentityRequest createManyAndReturn
   */
  export type IdentityRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * The data used to create many IdentityRequests.
     */
    data: IdentityRequestCreateManyInput | IdentityRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentityRequest update
   */
  export type IdentityRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a IdentityRequest.
     */
    data: XOR<IdentityRequestUpdateInput, IdentityRequestUncheckedUpdateInput>
    /**
     * Choose, which IdentityRequest to update.
     */
    where: IdentityRequestWhereUniqueInput
  }

  /**
   * IdentityRequest updateMany
   */
  export type IdentityRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IdentityRequests.
     */
    data: XOR<IdentityRequestUpdateManyMutationInput, IdentityRequestUncheckedUpdateManyInput>
    /**
     * Filter which IdentityRequests to update
     */
    where?: IdentityRequestWhereInput
    /**
     * Limit how many IdentityRequests to update.
     */
    limit?: number
  }

  /**
   * IdentityRequest updateManyAndReturn
   */
  export type IdentityRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * The data used to update IdentityRequests.
     */
    data: XOR<IdentityRequestUpdateManyMutationInput, IdentityRequestUncheckedUpdateManyInput>
    /**
     * Filter which IdentityRequests to update
     */
    where?: IdentityRequestWhereInput
    /**
     * Limit how many IdentityRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IdentityRequest upsert
   */
  export type IdentityRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the IdentityRequest to update in case it exists.
     */
    where: IdentityRequestWhereUniqueInput
    /**
     * In case the IdentityRequest found by the `where` argument doesn't exist, create a new IdentityRequest with this data.
     */
    create: XOR<IdentityRequestCreateInput, IdentityRequestUncheckedCreateInput>
    /**
     * In case the IdentityRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IdentityRequestUpdateInput, IdentityRequestUncheckedUpdateInput>
  }

  /**
   * IdentityRequest delete
   */
  export type IdentityRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
    /**
     * Filter which IdentityRequest to delete.
     */
    where: IdentityRequestWhereUniqueInput
  }

  /**
   * IdentityRequest deleteMany
   */
  export type IdentityRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IdentityRequests to delete
     */
    where?: IdentityRequestWhereInput
    /**
     * Limit how many IdentityRequests to delete.
     */
    limit?: number
  }

  /**
   * IdentityRequest.identity
   */
  export type IdentityRequest$identityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Identity
     */
    select?: IdentitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Identity
     */
    omit?: IdentityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityInclude<ExtArgs> | null
    where?: IdentityWhereInput
  }

  /**
   * IdentityRequest without action
   */
  export type IdentityRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IdentityRequest
     */
    select?: IdentityRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IdentityRequest
     */
    omit?: IdentityRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IdentityRequestInclude<ExtArgs> | null
  }


  /**
   * Model Context
   */

  export type AggregateContext = {
    _count: ContextCountAggregateOutputType | null
    _avg: ContextAvgAggregateOutputType | null
    _sum: ContextSumAggregateOutputType | null
    _min: ContextMinAggregateOutputType | null
    _max: ContextMaxAggregateOutputType | null
  }

  export type ContextAvgAggregateOutputType = {
    id: number | null
  }

  export type ContextSumAggregateOutputType = {
    id: number | null
  }

  export type ContextMinAggregateOutputType = {
    id: number | null
    name: string | null
    displayName: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ContextMaxAggregateOutputType = {
    id: number | null
    name: string | null
    displayName: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ContextCountAggregateOutputType = {
    id: number
    name: number
    displayName: number
    description: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ContextAvgAggregateInputType = {
    id?: true
  }

  export type ContextSumAggregateInputType = {
    id?: true
  }

  export type ContextMinAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    isActive?: true
    createdAt?: true
  }

  export type ContextMaxAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    isActive?: true
    createdAt?: true
  }

  export type ContextCountAggregateInputType = {
    id?: true
    name?: true
    displayName?: true
    description?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ContextAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Context to aggregate.
     */
    where?: ContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contexts to fetch.
     */
    orderBy?: ContextOrderByWithRelationInput | ContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contexts
    **/
    _count?: true | ContextCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContextAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContextSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContextMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContextMaxAggregateInputType
  }

  export type GetContextAggregateType<T extends ContextAggregateArgs> = {
        [P in keyof T & keyof AggregateContext]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContext[P]>
      : GetScalarType<T[P], AggregateContext[P]>
  }




  export type ContextGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContextWhereInput
    orderBy?: ContextOrderByWithAggregationInput | ContextOrderByWithAggregationInput[]
    by: ContextScalarFieldEnum[] | ContextScalarFieldEnum
    having?: ContextScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContextCountAggregateInputType | true
    _avg?: ContextAvgAggregateInputType
    _sum?: ContextSumAggregateInputType
    _min?: ContextMinAggregateInputType
    _max?: ContextMaxAggregateInputType
  }

  export type ContextGroupByOutputType = {
    id: number
    name: string
    displayName: string
    description: string
    isActive: boolean
    createdAt: Date
    _count: ContextCountAggregateOutputType | null
    _avg: ContextAvgAggregateOutputType | null
    _sum: ContextSumAggregateOutputType | null
    _min: ContextMinAggregateOutputType | null
    _max: ContextMaxAggregateOutputType | null
  }

  type GetContextGroupByPayload<T extends ContextGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContextGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContextGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContextGroupByOutputType[P]>
            : GetScalarType<T[P], ContextGroupByOutputType[P]>
        }
      >
    >


  export type ContextSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["context"]>

  export type ContextSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["context"]>

  export type ContextSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["context"]>

  export type ContextSelectScalar = {
    id?: boolean
    name?: boolean
    displayName?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ContextOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "displayName" | "description" | "isActive" | "createdAt", ExtArgs["result"]["context"]>

  export type $ContextPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Context"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      displayName: string
      description: string
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["context"]>
    composites: {}
  }

  type ContextGetPayload<S extends boolean | null | undefined | ContextDefaultArgs> = $Result.GetResult<Prisma.$ContextPayload, S>

  type ContextCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContextFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContextCountAggregateInputType | true
    }

  export interface ContextDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Context'], meta: { name: 'Context' } }
    /**
     * Find zero or one Context that matches the filter.
     * @param {ContextFindUniqueArgs} args - Arguments to find a Context
     * @example
     * // Get one Context
     * const context = await prisma.context.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContextFindUniqueArgs>(args: SelectSubset<T, ContextFindUniqueArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Context that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContextFindUniqueOrThrowArgs} args - Arguments to find a Context
     * @example
     * // Get one Context
     * const context = await prisma.context.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContextFindUniqueOrThrowArgs>(args: SelectSubset<T, ContextFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Context that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextFindFirstArgs} args - Arguments to find a Context
     * @example
     * // Get one Context
     * const context = await prisma.context.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContextFindFirstArgs>(args?: SelectSubset<T, ContextFindFirstArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Context that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextFindFirstOrThrowArgs} args - Arguments to find a Context
     * @example
     * // Get one Context
     * const context = await prisma.context.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContextFindFirstOrThrowArgs>(args?: SelectSubset<T, ContextFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contexts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contexts
     * const contexts = await prisma.context.findMany()
     * 
     * // Get first 10 Contexts
     * const contexts = await prisma.context.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contextWithIdOnly = await prisma.context.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContextFindManyArgs>(args?: SelectSubset<T, ContextFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Context.
     * @param {ContextCreateArgs} args - Arguments to create a Context.
     * @example
     * // Create one Context
     * const Context = await prisma.context.create({
     *   data: {
     *     // ... data to create a Context
     *   }
     * })
     * 
     */
    create<T extends ContextCreateArgs>(args: SelectSubset<T, ContextCreateArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contexts.
     * @param {ContextCreateManyArgs} args - Arguments to create many Contexts.
     * @example
     * // Create many Contexts
     * const context = await prisma.context.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContextCreateManyArgs>(args?: SelectSubset<T, ContextCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contexts and returns the data saved in the database.
     * @param {ContextCreateManyAndReturnArgs} args - Arguments to create many Contexts.
     * @example
     * // Create many Contexts
     * const context = await prisma.context.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contexts and only return the `id`
     * const contextWithIdOnly = await prisma.context.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContextCreateManyAndReturnArgs>(args?: SelectSubset<T, ContextCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Context.
     * @param {ContextDeleteArgs} args - Arguments to delete one Context.
     * @example
     * // Delete one Context
     * const Context = await prisma.context.delete({
     *   where: {
     *     // ... filter to delete one Context
     *   }
     * })
     * 
     */
    delete<T extends ContextDeleteArgs>(args: SelectSubset<T, ContextDeleteArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Context.
     * @param {ContextUpdateArgs} args - Arguments to update one Context.
     * @example
     * // Update one Context
     * const context = await prisma.context.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContextUpdateArgs>(args: SelectSubset<T, ContextUpdateArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contexts.
     * @param {ContextDeleteManyArgs} args - Arguments to filter Contexts to delete.
     * @example
     * // Delete a few Contexts
     * const { count } = await prisma.context.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContextDeleteManyArgs>(args?: SelectSubset<T, ContextDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contexts
     * const context = await prisma.context.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContextUpdateManyArgs>(args: SelectSubset<T, ContextUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contexts and returns the data updated in the database.
     * @param {ContextUpdateManyAndReturnArgs} args - Arguments to update many Contexts.
     * @example
     * // Update many Contexts
     * const context = await prisma.context.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contexts and only return the `id`
     * const contextWithIdOnly = await prisma.context.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContextUpdateManyAndReturnArgs>(args: SelectSubset<T, ContextUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Context.
     * @param {ContextUpsertArgs} args - Arguments to update or create a Context.
     * @example
     * // Update or create a Context
     * const context = await prisma.context.upsert({
     *   create: {
     *     // ... data to create a Context
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Context we want to update
     *   }
     * })
     */
    upsert<T extends ContextUpsertArgs>(args: SelectSubset<T, ContextUpsertArgs<ExtArgs>>): Prisma__ContextClient<$Result.GetResult<Prisma.$ContextPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contexts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextCountArgs} args - Arguments to filter Contexts to count.
     * @example
     * // Count the number of Contexts
     * const count = await prisma.context.count({
     *   where: {
     *     // ... the filter for the Contexts we want to count
     *   }
     * })
    **/
    count<T extends ContextCountArgs>(
      args?: Subset<T, ContextCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContextCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Context.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContextAggregateArgs>(args: Subset<T, ContextAggregateArgs>): Prisma.PrismaPromise<GetContextAggregateType<T>>

    /**
     * Group by Context.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContextGroupByArgs} args - Group by arguments.
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
      T extends ContextGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContextGroupByArgs['orderBy'] }
        : { orderBy?: ContextGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContextGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContextGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Context model
   */
  readonly fields: ContextFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Context.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContextClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Context model
   */
  interface ContextFieldRefs {
    readonly id: FieldRef<"Context", 'Int'>
    readonly name: FieldRef<"Context", 'String'>
    readonly displayName: FieldRef<"Context", 'String'>
    readonly description: FieldRef<"Context", 'String'>
    readonly isActive: FieldRef<"Context", 'Boolean'>
    readonly createdAt: FieldRef<"Context", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Context findUnique
   */
  export type ContextFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * Filter, which Context to fetch.
     */
    where: ContextWhereUniqueInput
  }

  /**
   * Context findUniqueOrThrow
   */
  export type ContextFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * Filter, which Context to fetch.
     */
    where: ContextWhereUniqueInput
  }

  /**
   * Context findFirst
   */
  export type ContextFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * Filter, which Context to fetch.
     */
    where?: ContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contexts to fetch.
     */
    orderBy?: ContextOrderByWithRelationInput | ContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contexts.
     */
    cursor?: ContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contexts.
     */
    distinct?: ContextScalarFieldEnum | ContextScalarFieldEnum[]
  }

  /**
   * Context findFirstOrThrow
   */
  export type ContextFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * Filter, which Context to fetch.
     */
    where?: ContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contexts to fetch.
     */
    orderBy?: ContextOrderByWithRelationInput | ContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contexts.
     */
    cursor?: ContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contexts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contexts.
     */
    distinct?: ContextScalarFieldEnum | ContextScalarFieldEnum[]
  }

  /**
   * Context findMany
   */
  export type ContextFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * Filter, which Contexts to fetch.
     */
    where?: ContextWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contexts to fetch.
     */
    orderBy?: ContextOrderByWithRelationInput | ContextOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contexts.
     */
    cursor?: ContextWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contexts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contexts.
     */
    skip?: number
    distinct?: ContextScalarFieldEnum | ContextScalarFieldEnum[]
  }

  /**
   * Context create
   */
  export type ContextCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * The data needed to create a Context.
     */
    data: XOR<ContextCreateInput, ContextUncheckedCreateInput>
  }

  /**
   * Context createMany
   */
  export type ContextCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contexts.
     */
    data: ContextCreateManyInput | ContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Context createManyAndReturn
   */
  export type ContextCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * The data used to create many Contexts.
     */
    data: ContextCreateManyInput | ContextCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Context update
   */
  export type ContextUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * The data needed to update a Context.
     */
    data: XOR<ContextUpdateInput, ContextUncheckedUpdateInput>
    /**
     * Choose, which Context to update.
     */
    where: ContextWhereUniqueInput
  }

  /**
   * Context updateMany
   */
  export type ContextUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contexts.
     */
    data: XOR<ContextUpdateManyMutationInput, ContextUncheckedUpdateManyInput>
    /**
     * Filter which Contexts to update
     */
    where?: ContextWhereInput
    /**
     * Limit how many Contexts to update.
     */
    limit?: number
  }

  /**
   * Context updateManyAndReturn
   */
  export type ContextUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * The data used to update Contexts.
     */
    data: XOR<ContextUpdateManyMutationInput, ContextUncheckedUpdateManyInput>
    /**
     * Filter which Contexts to update
     */
    where?: ContextWhereInput
    /**
     * Limit how many Contexts to update.
     */
    limit?: number
  }

  /**
   * Context upsert
   */
  export type ContextUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * The filter to search for the Context to update in case it exists.
     */
    where: ContextWhereUniqueInput
    /**
     * In case the Context found by the `where` argument doesn't exist, create a new Context with this data.
     */
    create: XOR<ContextCreateInput, ContextUncheckedCreateInput>
    /**
     * In case the Context was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContextUpdateInput, ContextUncheckedUpdateInput>
  }

  /**
   * Context delete
   */
  export type ContextDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
    /**
     * Filter which Context to delete.
     */
    where: ContextWhereUniqueInput
  }

  /**
   * Context deleteMany
   */
  export type ContextDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contexts to delete
     */
    where?: ContextWhereInput
    /**
     * Limit how many Contexts to delete.
     */
    limit?: number
  }

  /**
   * Context without action
   */
  export type ContextDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Context
     */
    select?: ContextSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Context
     */
    omit?: ContextOmit<ExtArgs> | null
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
    email: 'email',
    passwordHash: 'passwordHash',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const IdentityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    isDefault: 'isDefault',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IdentityScalarFieldEnum = (typeof IdentityScalarFieldEnum)[keyof typeof IdentityScalarFieldEnum]


  export const IdentityAttributeScalarFieldEnum: {
    id: 'id',
    identityId: 'identityId',
    key: 'key',
    value: 'value',
    isPublic: 'isPublic',
    isVisible: 'isVisible',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IdentityAttributeScalarFieldEnum = (typeof IdentityAttributeScalarFieldEnum)[keyof typeof IdentityAttributeScalarFieldEnum]


  export const SharedIdentityScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    viewerId: 'viewerId',
    identityId: 'identityId',
    context: 'context',
    canView: 'canView',
    canRequest: 'canRequest',
    sharedAt: 'sharedAt',
    expiresAt: 'expiresAt'
  };

  export type SharedIdentityScalarFieldEnum = (typeof SharedIdentityScalarFieldEnum)[keyof typeof SharedIdentityScalarFieldEnum]


  export const SharedLinkScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    identityId: 'identityId',
    context: 'context',
    name: 'name',
    isActive: 'isActive',
    expiresAt: 'expiresAt',
    accessLimit: 'accessLimit',
    accessCount: 'accessCount',
    requireAuth: 'requireAuth',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SharedLinkScalarFieldEnum = (typeof SharedLinkScalarFieldEnum)[keyof typeof SharedLinkScalarFieldEnum]


  export const SharedLinkAccessScalarFieldEnum: {
    id: 'id',
    sharedLinkId: 'sharedLinkId',
    viewerIp: 'viewerIp',
    viewerAgent: 'viewerAgent',
    accessedAt: 'accessedAt'
  };

  export type SharedLinkAccessScalarFieldEnum = (typeof SharedLinkAccessScalarFieldEnum)[keyof typeof SharedLinkAccessScalarFieldEnum]


  export const IdentityRequestScalarFieldEnum: {
    id: 'id',
    requesterId: 'requesterId',
    targetId: 'targetId',
    identityId: 'identityId',
    context: 'context',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    respondedAt: 'respondedAt'
  };

  export type IdentityRequestScalarFieldEnum = (typeof IdentityRequestScalarFieldEnum)[keyof typeof IdentityRequestScalarFieldEnum]


  export const ContextScalarFieldEnum: {
    id: 'id',
    name: 'name',
    displayName: 'displayName',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ContextScalarFieldEnum = (typeof ContextScalarFieldEnum)[keyof typeof ContextScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


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
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    identities?: IdentityListRelationFilter
    sharedIdentities?: SharedIdentityListRelationFilter
    identityRequests?: IdentityRequestListRelationFilter
    sharedLinks?: SharedLinkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    identities?: IdentityOrderByRelationAggregateInput
    sharedIdentities?: SharedIdentityOrderByRelationAggregateInput
    identityRequests?: IdentityRequestOrderByRelationAggregateInput
    sharedLinks?: SharedLinkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    identities?: IdentityListRelationFilter
    sharedIdentities?: SharedIdentityListRelationFilter
    identityRequests?: IdentityRequestListRelationFilter
    sharedLinks?: SharedLinkListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: IntWithAggregatesFilter<"Session"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type IdentityWhereInput = {
    AND?: IdentityWhereInput | IdentityWhereInput[]
    OR?: IdentityWhereInput[]
    NOT?: IdentityWhereInput | IdentityWhereInput[]
    id?: IntFilter<"Identity"> | number
    userId?: IntFilter<"Identity"> | number
    name?: StringFilter<"Identity"> | string
    description?: StringNullableFilter<"Identity"> | string | null
    isDefault?: BoolFilter<"Identity"> | boolean
    isActive?: BoolFilter<"Identity"> | boolean
    createdAt?: DateTimeFilter<"Identity"> | Date | string
    updatedAt?: DateTimeFilter<"Identity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attributes?: IdentityAttributeListRelationFilter
    sharedWith?: SharedIdentityListRelationFilter
    requests?: IdentityRequestListRelationFilter
    sharedLinks?: SharedLinkListRelationFilter
  }

  export type IdentityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    attributes?: IdentityAttributeOrderByRelationAggregateInput
    sharedWith?: SharedIdentityOrderByRelationAggregateInput
    requests?: IdentityRequestOrderByRelationAggregateInput
    sharedLinks?: SharedLinkOrderByRelationAggregateInput
  }

  export type IdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_name?: IdentityUserIdNameCompoundUniqueInput
    AND?: IdentityWhereInput | IdentityWhereInput[]
    OR?: IdentityWhereInput[]
    NOT?: IdentityWhereInput | IdentityWhereInput[]
    userId?: IntFilter<"Identity"> | number
    name?: StringFilter<"Identity"> | string
    description?: StringNullableFilter<"Identity"> | string | null
    isDefault?: BoolFilter<"Identity"> | boolean
    isActive?: BoolFilter<"Identity"> | boolean
    createdAt?: DateTimeFilter<"Identity"> | Date | string
    updatedAt?: DateTimeFilter<"Identity"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    attributes?: IdentityAttributeListRelationFilter
    sharedWith?: SharedIdentityListRelationFilter
    requests?: IdentityRequestListRelationFilter
    sharedLinks?: SharedLinkListRelationFilter
  }, "id" | "userId_name">

  export type IdentityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IdentityCountOrderByAggregateInput
    _avg?: IdentityAvgOrderByAggregateInput
    _max?: IdentityMaxOrderByAggregateInput
    _min?: IdentityMinOrderByAggregateInput
    _sum?: IdentitySumOrderByAggregateInput
  }

  export type IdentityScalarWhereWithAggregatesInput = {
    AND?: IdentityScalarWhereWithAggregatesInput | IdentityScalarWhereWithAggregatesInput[]
    OR?: IdentityScalarWhereWithAggregatesInput[]
    NOT?: IdentityScalarWhereWithAggregatesInput | IdentityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Identity"> | number
    userId?: IntWithAggregatesFilter<"Identity"> | number
    name?: StringWithAggregatesFilter<"Identity"> | string
    description?: StringNullableWithAggregatesFilter<"Identity"> | string | null
    isDefault?: BoolWithAggregatesFilter<"Identity"> | boolean
    isActive?: BoolWithAggregatesFilter<"Identity"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Identity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Identity"> | Date | string
  }

  export type IdentityAttributeWhereInput = {
    AND?: IdentityAttributeWhereInput | IdentityAttributeWhereInput[]
    OR?: IdentityAttributeWhereInput[]
    NOT?: IdentityAttributeWhereInput | IdentityAttributeWhereInput[]
    id?: IntFilter<"IdentityAttribute"> | number
    identityId?: IntFilter<"IdentityAttribute"> | number
    key?: StringFilter<"IdentityAttribute"> | string
    value?: StringFilter<"IdentityAttribute"> | string
    isPublic?: BoolFilter<"IdentityAttribute"> | boolean
    isVisible?: BoolFilter<"IdentityAttribute"> | boolean
    createdAt?: DateTimeFilter<"IdentityAttribute"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityAttribute"> | Date | string
    identity?: XOR<IdentityScalarRelationFilter, IdentityWhereInput>
  }

  export type IdentityAttributeOrderByWithRelationInput = {
    id?: SortOrder
    identityId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    isPublic?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    identity?: IdentityOrderByWithRelationInput
  }

  export type IdentityAttributeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    identityId_key?: IdentityAttributeIdentityIdKeyCompoundUniqueInput
    AND?: IdentityAttributeWhereInput | IdentityAttributeWhereInput[]
    OR?: IdentityAttributeWhereInput[]
    NOT?: IdentityAttributeWhereInput | IdentityAttributeWhereInput[]
    identityId?: IntFilter<"IdentityAttribute"> | number
    key?: StringFilter<"IdentityAttribute"> | string
    value?: StringFilter<"IdentityAttribute"> | string
    isPublic?: BoolFilter<"IdentityAttribute"> | boolean
    isVisible?: BoolFilter<"IdentityAttribute"> | boolean
    createdAt?: DateTimeFilter<"IdentityAttribute"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityAttribute"> | Date | string
    identity?: XOR<IdentityScalarRelationFilter, IdentityWhereInput>
  }, "id" | "identityId_key">

  export type IdentityAttributeOrderByWithAggregationInput = {
    id?: SortOrder
    identityId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    isPublic?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IdentityAttributeCountOrderByAggregateInput
    _avg?: IdentityAttributeAvgOrderByAggregateInput
    _max?: IdentityAttributeMaxOrderByAggregateInput
    _min?: IdentityAttributeMinOrderByAggregateInput
    _sum?: IdentityAttributeSumOrderByAggregateInput
  }

  export type IdentityAttributeScalarWhereWithAggregatesInput = {
    AND?: IdentityAttributeScalarWhereWithAggregatesInput | IdentityAttributeScalarWhereWithAggregatesInput[]
    OR?: IdentityAttributeScalarWhereWithAggregatesInput[]
    NOT?: IdentityAttributeScalarWhereWithAggregatesInput | IdentityAttributeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IdentityAttribute"> | number
    identityId?: IntWithAggregatesFilter<"IdentityAttribute"> | number
    key?: StringWithAggregatesFilter<"IdentityAttribute"> | string
    value?: StringWithAggregatesFilter<"IdentityAttribute"> | string
    isPublic?: BoolWithAggregatesFilter<"IdentityAttribute"> | boolean
    isVisible?: BoolWithAggregatesFilter<"IdentityAttribute"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"IdentityAttribute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IdentityAttribute"> | Date | string
  }

  export type SharedIdentityWhereInput = {
    AND?: SharedIdentityWhereInput | SharedIdentityWhereInput[]
    OR?: SharedIdentityWhereInput[]
    NOT?: SharedIdentityWhereInput | SharedIdentityWhereInput[]
    id?: IntFilter<"SharedIdentity"> | number
    ownerId?: IntFilter<"SharedIdentity"> | number
    viewerId?: IntFilter<"SharedIdentity"> | number
    identityId?: IntFilter<"SharedIdentity"> | number
    context?: StringFilter<"SharedIdentity"> | string
    canView?: BoolFilter<"SharedIdentity"> | boolean
    canRequest?: BoolFilter<"SharedIdentity"> | boolean
    sharedAt?: DateTimeFilter<"SharedIdentity"> | Date | string
    expiresAt?: DateTimeNullableFilter<"SharedIdentity"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    identity?: XOR<IdentityScalarRelationFilter, IdentityWhereInput>
  }

  export type SharedIdentityOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    canView?: SortOrder
    canRequest?: SortOrder
    sharedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    owner?: UserOrderByWithRelationInput
    identity?: IdentityOrderByWithRelationInput
  }

  export type SharedIdentityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ownerId_viewerId_identityId_context?: SharedIdentityOwnerIdViewerIdIdentityIdContextCompoundUniqueInput
    AND?: SharedIdentityWhereInput | SharedIdentityWhereInput[]
    OR?: SharedIdentityWhereInput[]
    NOT?: SharedIdentityWhereInput | SharedIdentityWhereInput[]
    ownerId?: IntFilter<"SharedIdentity"> | number
    viewerId?: IntFilter<"SharedIdentity"> | number
    identityId?: IntFilter<"SharedIdentity"> | number
    context?: StringFilter<"SharedIdentity"> | string
    canView?: BoolFilter<"SharedIdentity"> | boolean
    canRequest?: BoolFilter<"SharedIdentity"> | boolean
    sharedAt?: DateTimeFilter<"SharedIdentity"> | Date | string
    expiresAt?: DateTimeNullableFilter<"SharedIdentity"> | Date | string | null
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    identity?: XOR<IdentityScalarRelationFilter, IdentityWhereInput>
  }, "id" | "ownerId_viewerId_identityId_context">

  export type SharedIdentityOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    canView?: SortOrder
    canRequest?: SortOrder
    sharedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    _count?: SharedIdentityCountOrderByAggregateInput
    _avg?: SharedIdentityAvgOrderByAggregateInput
    _max?: SharedIdentityMaxOrderByAggregateInput
    _min?: SharedIdentityMinOrderByAggregateInput
    _sum?: SharedIdentitySumOrderByAggregateInput
  }

  export type SharedIdentityScalarWhereWithAggregatesInput = {
    AND?: SharedIdentityScalarWhereWithAggregatesInput | SharedIdentityScalarWhereWithAggregatesInput[]
    OR?: SharedIdentityScalarWhereWithAggregatesInput[]
    NOT?: SharedIdentityScalarWhereWithAggregatesInput | SharedIdentityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SharedIdentity"> | number
    ownerId?: IntWithAggregatesFilter<"SharedIdentity"> | number
    viewerId?: IntWithAggregatesFilter<"SharedIdentity"> | number
    identityId?: IntWithAggregatesFilter<"SharedIdentity"> | number
    context?: StringWithAggregatesFilter<"SharedIdentity"> | string
    canView?: BoolWithAggregatesFilter<"SharedIdentity"> | boolean
    canRequest?: BoolWithAggregatesFilter<"SharedIdentity"> | boolean
    sharedAt?: DateTimeWithAggregatesFilter<"SharedIdentity"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"SharedIdentity"> | Date | string | null
  }

  export type SharedLinkWhereInput = {
    AND?: SharedLinkWhereInput | SharedLinkWhereInput[]
    OR?: SharedLinkWhereInput[]
    NOT?: SharedLinkWhereInput | SharedLinkWhereInput[]
    id?: StringFilter<"SharedLink"> | string
    ownerId?: IntFilter<"SharedLink"> | number
    identityId?: IntFilter<"SharedLink"> | number
    context?: StringFilter<"SharedLink"> | string
    name?: StringNullableFilter<"SharedLink"> | string | null
    isActive?: BoolFilter<"SharedLink"> | boolean
    expiresAt?: DateTimeNullableFilter<"SharedLink"> | Date | string | null
    accessLimit?: IntNullableFilter<"SharedLink"> | number | null
    accessCount?: IntFilter<"SharedLink"> | number
    requireAuth?: BoolFilter<"SharedLink"> | boolean
    createdAt?: DateTimeFilter<"SharedLink"> | Date | string
    updatedAt?: DateTimeFilter<"SharedLink"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    identity?: XOR<IdentityScalarRelationFilter, IdentityWhereInput>
    accesses?: SharedLinkAccessListRelationFilter
  }

  export type SharedLinkOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    accessLimit?: SortOrderInput | SortOrder
    accessCount?: SortOrder
    requireAuth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    identity?: IdentityOrderByWithRelationInput
    accesses?: SharedLinkAccessOrderByRelationAggregateInput
  }

  export type SharedLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SharedLinkWhereInput | SharedLinkWhereInput[]
    OR?: SharedLinkWhereInput[]
    NOT?: SharedLinkWhereInput | SharedLinkWhereInput[]
    ownerId?: IntFilter<"SharedLink"> | number
    identityId?: IntFilter<"SharedLink"> | number
    context?: StringFilter<"SharedLink"> | string
    name?: StringNullableFilter<"SharedLink"> | string | null
    isActive?: BoolFilter<"SharedLink"> | boolean
    expiresAt?: DateTimeNullableFilter<"SharedLink"> | Date | string | null
    accessLimit?: IntNullableFilter<"SharedLink"> | number | null
    accessCount?: IntFilter<"SharedLink"> | number
    requireAuth?: BoolFilter<"SharedLink"> | boolean
    createdAt?: DateTimeFilter<"SharedLink"> | Date | string
    updatedAt?: DateTimeFilter<"SharedLink"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    identity?: XOR<IdentityScalarRelationFilter, IdentityWhereInput>
    accesses?: SharedLinkAccessListRelationFilter
  }, "id">

  export type SharedLinkOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    name?: SortOrderInput | SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    accessLimit?: SortOrderInput | SortOrder
    accessCount?: SortOrder
    requireAuth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SharedLinkCountOrderByAggregateInput
    _avg?: SharedLinkAvgOrderByAggregateInput
    _max?: SharedLinkMaxOrderByAggregateInput
    _min?: SharedLinkMinOrderByAggregateInput
    _sum?: SharedLinkSumOrderByAggregateInput
  }

  export type SharedLinkScalarWhereWithAggregatesInput = {
    AND?: SharedLinkScalarWhereWithAggregatesInput | SharedLinkScalarWhereWithAggregatesInput[]
    OR?: SharedLinkScalarWhereWithAggregatesInput[]
    NOT?: SharedLinkScalarWhereWithAggregatesInput | SharedLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharedLink"> | string
    ownerId?: IntWithAggregatesFilter<"SharedLink"> | number
    identityId?: IntWithAggregatesFilter<"SharedLink"> | number
    context?: StringWithAggregatesFilter<"SharedLink"> | string
    name?: StringNullableWithAggregatesFilter<"SharedLink"> | string | null
    isActive?: BoolWithAggregatesFilter<"SharedLink"> | boolean
    expiresAt?: DateTimeNullableWithAggregatesFilter<"SharedLink"> | Date | string | null
    accessLimit?: IntNullableWithAggregatesFilter<"SharedLink"> | number | null
    accessCount?: IntWithAggregatesFilter<"SharedLink"> | number
    requireAuth?: BoolWithAggregatesFilter<"SharedLink"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SharedLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SharedLink"> | Date | string
  }

  export type SharedLinkAccessWhereInput = {
    AND?: SharedLinkAccessWhereInput | SharedLinkAccessWhereInput[]
    OR?: SharedLinkAccessWhereInput[]
    NOT?: SharedLinkAccessWhereInput | SharedLinkAccessWhereInput[]
    id?: IntFilter<"SharedLinkAccess"> | number
    sharedLinkId?: StringFilter<"SharedLinkAccess"> | string
    viewerIp?: StringNullableFilter<"SharedLinkAccess"> | string | null
    viewerAgent?: StringNullableFilter<"SharedLinkAccess"> | string | null
    accessedAt?: DateTimeFilter<"SharedLinkAccess"> | Date | string
    sharedLink?: XOR<SharedLinkScalarRelationFilter, SharedLinkWhereInput>
  }

  export type SharedLinkAccessOrderByWithRelationInput = {
    id?: SortOrder
    sharedLinkId?: SortOrder
    viewerIp?: SortOrderInput | SortOrder
    viewerAgent?: SortOrderInput | SortOrder
    accessedAt?: SortOrder
    sharedLink?: SharedLinkOrderByWithRelationInput
  }

  export type SharedLinkAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SharedLinkAccessWhereInput | SharedLinkAccessWhereInput[]
    OR?: SharedLinkAccessWhereInput[]
    NOT?: SharedLinkAccessWhereInput | SharedLinkAccessWhereInput[]
    sharedLinkId?: StringFilter<"SharedLinkAccess"> | string
    viewerIp?: StringNullableFilter<"SharedLinkAccess"> | string | null
    viewerAgent?: StringNullableFilter<"SharedLinkAccess"> | string | null
    accessedAt?: DateTimeFilter<"SharedLinkAccess"> | Date | string
    sharedLink?: XOR<SharedLinkScalarRelationFilter, SharedLinkWhereInput>
  }, "id">

  export type SharedLinkAccessOrderByWithAggregationInput = {
    id?: SortOrder
    sharedLinkId?: SortOrder
    viewerIp?: SortOrderInput | SortOrder
    viewerAgent?: SortOrderInput | SortOrder
    accessedAt?: SortOrder
    _count?: SharedLinkAccessCountOrderByAggregateInput
    _avg?: SharedLinkAccessAvgOrderByAggregateInput
    _max?: SharedLinkAccessMaxOrderByAggregateInput
    _min?: SharedLinkAccessMinOrderByAggregateInput
    _sum?: SharedLinkAccessSumOrderByAggregateInput
  }

  export type SharedLinkAccessScalarWhereWithAggregatesInput = {
    AND?: SharedLinkAccessScalarWhereWithAggregatesInput | SharedLinkAccessScalarWhereWithAggregatesInput[]
    OR?: SharedLinkAccessScalarWhereWithAggregatesInput[]
    NOT?: SharedLinkAccessScalarWhereWithAggregatesInput | SharedLinkAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SharedLinkAccess"> | number
    sharedLinkId?: StringWithAggregatesFilter<"SharedLinkAccess"> | string
    viewerIp?: StringNullableWithAggregatesFilter<"SharedLinkAccess"> | string | null
    viewerAgent?: StringNullableWithAggregatesFilter<"SharedLinkAccess"> | string | null
    accessedAt?: DateTimeWithAggregatesFilter<"SharedLinkAccess"> | Date | string
  }

  export type IdentityRequestWhereInput = {
    AND?: IdentityRequestWhereInput | IdentityRequestWhereInput[]
    OR?: IdentityRequestWhereInput[]
    NOT?: IdentityRequestWhereInput | IdentityRequestWhereInput[]
    id?: IntFilter<"IdentityRequest"> | number
    requesterId?: IntFilter<"IdentityRequest"> | number
    targetId?: IntFilter<"IdentityRequest"> | number
    identityId?: IntNullableFilter<"IdentityRequest"> | number | null
    context?: StringFilter<"IdentityRequest"> | string
    message?: StringNullableFilter<"IdentityRequest"> | string | null
    status?: EnumRequestStatusFilter<"IdentityRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"IdentityRequest"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"IdentityRequest"> | Date | string | null
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    identity?: XOR<IdentityNullableScalarRelationFilter, IdentityWhereInput> | null
  }

  export type IdentityRequestOrderByWithRelationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrderInput | SortOrder
    context?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    requester?: UserOrderByWithRelationInput
    identity?: IdentityOrderByWithRelationInput
  }

  export type IdentityRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    requesterId_targetId_context?: IdentityRequestRequesterIdTargetIdContextCompoundUniqueInput
    AND?: IdentityRequestWhereInput | IdentityRequestWhereInput[]
    OR?: IdentityRequestWhereInput[]
    NOT?: IdentityRequestWhereInput | IdentityRequestWhereInput[]
    requesterId?: IntFilter<"IdentityRequest"> | number
    targetId?: IntFilter<"IdentityRequest"> | number
    identityId?: IntNullableFilter<"IdentityRequest"> | number | null
    context?: StringFilter<"IdentityRequest"> | string
    message?: StringNullableFilter<"IdentityRequest"> | string | null
    status?: EnumRequestStatusFilter<"IdentityRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"IdentityRequest"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"IdentityRequest"> | Date | string | null
    requester?: XOR<UserScalarRelationFilter, UserWhereInput>
    identity?: XOR<IdentityNullableScalarRelationFilter, IdentityWhereInput> | null
  }, "id" | "requesterId_targetId_context">

  export type IdentityRequestOrderByWithAggregationInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrderInput | SortOrder
    context?: SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respondedAt?: SortOrderInput | SortOrder
    _count?: IdentityRequestCountOrderByAggregateInput
    _avg?: IdentityRequestAvgOrderByAggregateInput
    _max?: IdentityRequestMaxOrderByAggregateInput
    _min?: IdentityRequestMinOrderByAggregateInput
    _sum?: IdentityRequestSumOrderByAggregateInput
  }

  export type IdentityRequestScalarWhereWithAggregatesInput = {
    AND?: IdentityRequestScalarWhereWithAggregatesInput | IdentityRequestScalarWhereWithAggregatesInput[]
    OR?: IdentityRequestScalarWhereWithAggregatesInput[]
    NOT?: IdentityRequestScalarWhereWithAggregatesInput | IdentityRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IdentityRequest"> | number
    requesterId?: IntWithAggregatesFilter<"IdentityRequest"> | number
    targetId?: IntWithAggregatesFilter<"IdentityRequest"> | number
    identityId?: IntNullableWithAggregatesFilter<"IdentityRequest"> | number | null
    context?: StringWithAggregatesFilter<"IdentityRequest"> | string
    message?: StringNullableWithAggregatesFilter<"IdentityRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"IdentityRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeWithAggregatesFilter<"IdentityRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IdentityRequest"> | Date | string
    respondedAt?: DateTimeNullableWithAggregatesFilter<"IdentityRequest"> | Date | string | null
  }

  export type ContextWhereInput = {
    AND?: ContextWhereInput | ContextWhereInput[]
    OR?: ContextWhereInput[]
    NOT?: ContextWhereInput | ContextWhereInput[]
    id?: IntFilter<"Context"> | number
    name?: StringFilter<"Context"> | string
    displayName?: StringFilter<"Context"> | string
    description?: StringFilter<"Context"> | string
    isActive?: BoolFilter<"Context"> | boolean
    createdAt?: DateTimeFilter<"Context"> | Date | string
  }

  export type ContextOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ContextWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ContextWhereInput | ContextWhereInput[]
    OR?: ContextWhereInput[]
    NOT?: ContextWhereInput | ContextWhereInput[]
    displayName?: StringFilter<"Context"> | string
    description?: StringFilter<"Context"> | string
    isActive?: BoolFilter<"Context"> | boolean
    createdAt?: DateTimeFilter<"Context"> | Date | string
  }, "id" | "name">

  export type ContextOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ContextCountOrderByAggregateInput
    _avg?: ContextAvgOrderByAggregateInput
    _max?: ContextMaxOrderByAggregateInput
    _min?: ContextMinOrderByAggregateInput
    _sum?: ContextSumOrderByAggregateInput
  }

  export type ContextScalarWhereWithAggregatesInput = {
    AND?: ContextScalarWhereWithAggregatesInput | ContextScalarWhereWithAggregatesInput[]
    OR?: ContextScalarWhereWithAggregatesInput[]
    NOT?: ContextScalarWhereWithAggregatesInput | ContextScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Context"> | number
    name?: StringWithAggregatesFilter<"Context"> | string
    displayName?: StringWithAggregatesFilter<"Context"> | string
    description?: StringWithAggregatesFilter<"Context"> | string
    isActive?: BoolWithAggregatesFilter<"Context"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Context"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    identities?: IdentityCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    identities?: IdentityUncheckedCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityUncheckedCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestUncheckedCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    identities?: IdentityUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUncheckedUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUncheckedUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    userId: number
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    userId: number
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityCreateInput = {
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIdentitiesInput
    attributes?: IdentityAttributeCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: IdentityAttributeUncheckedCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityUncheckedCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestUncheckedCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdentitiesNestedInput
    attributes?: IdentityAttributeUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: IdentityAttributeUncheckedUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUncheckedUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUncheckedUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityCreateManyInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityAttributeCreateInput = {
    key: string
    value: string
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    identity: IdentityCreateNestedOneWithoutAttributesInput
  }

  export type IdentityAttributeUncheckedCreateInput = {
    id?: number
    identityId: number
    key: string
    value: string
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityAttributeUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneRequiredWithoutAttributesNestedInput
  }

  export type IdentityAttributeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityAttributeCreateManyInput = {
    id?: number
    identityId: number
    key: string
    value: string
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityAttributeUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityAttributeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedIdentityCreateInput = {
    viewerId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
    owner: UserCreateNestedOneWithoutSharedIdentitiesInput
    identity: IdentityCreateNestedOneWithoutSharedWithInput
  }

  export type SharedIdentityUncheckedCreateInput = {
    id?: number
    ownerId: number
    viewerId: number
    identityId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SharedIdentityUpdateInput = {
    viewerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutSharedIdentitiesNestedInput
    identity?: IdentityUpdateOneRequiredWithoutSharedWithNestedInput
  }

  export type SharedIdentityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    viewerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedIdentityCreateManyInput = {
    id?: number
    ownerId: number
    viewerId: number
    identityId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SharedIdentityUpdateManyMutationInput = {
    viewerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedIdentityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    viewerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedLinkCreateInput = {
    id?: string
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSharedLinksInput
    identity: IdentityCreateNestedOneWithoutSharedLinksInput
    accesses?: SharedLinkAccessCreateNestedManyWithoutSharedLinkInput
  }

  export type SharedLinkUncheckedCreateInput = {
    id?: string
    ownerId: number
    identityId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: SharedLinkAccessUncheckedCreateNestedManyWithoutSharedLinkInput
  }

  export type SharedLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSharedLinksNestedInput
    identity?: IdentityUpdateOneRequiredWithoutSharedLinksNestedInput
    accesses?: SharedLinkAccessUpdateManyWithoutSharedLinkNestedInput
  }

  export type SharedLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: SharedLinkAccessUncheckedUpdateManyWithoutSharedLinkNestedInput
  }

  export type SharedLinkCreateManyInput = {
    id?: string
    ownerId: number
    identityId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkAccessCreateInput = {
    viewerIp?: string | null
    viewerAgent?: string | null
    accessedAt?: Date | string
    sharedLink: SharedLinkCreateNestedOneWithoutAccessesInput
  }

  export type SharedLinkAccessUncheckedCreateInput = {
    id?: number
    sharedLinkId: string
    viewerIp?: string | null
    viewerAgent?: string | null
    accessedAt?: Date | string
  }

  export type SharedLinkAccessUpdateInput = {
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedLink?: SharedLinkUpdateOneRequiredWithoutAccessesNestedInput
  }

  export type SharedLinkAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedLinkId?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkAccessCreateManyInput = {
    id?: number
    sharedLinkId: string
    viewerIp?: string | null
    viewerAgent?: string | null
    accessedAt?: Date | string
  }

  export type SharedLinkAccessUpdateManyMutationInput = {
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sharedLinkId?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityRequestCreateInput = {
    targetId: number
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
    requester: UserCreateNestedOneWithoutIdentityRequestsInput
    identity?: IdentityCreateNestedOneWithoutRequestsInput
  }

  export type IdentityRequestUncheckedCreateInput = {
    id?: number
    requesterId: number
    targetId: number
    identityId?: number | null
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type IdentityRequestUpdateInput = {
    targetId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requester?: UserUpdateOneRequiredWithoutIdentityRequestsNestedInput
    identity?: IdentityUpdateOneWithoutRequestsNestedInput
  }

  export type IdentityRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    identityId?: NullableIntFieldUpdateOperationsInput | number | null
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityRequestCreateManyInput = {
    id?: number
    requesterId: number
    targetId: number
    identityId?: number | null
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type IdentityRequestUpdateManyMutationInput = {
    targetId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    identityId?: NullableIntFieldUpdateOperationsInput | number | null
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContextCreateInput = {
    name: string
    displayName: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ContextUncheckedCreateInput = {
    id?: number
    name: string
    displayName: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ContextUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContextUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContextCreateManyInput = {
    id?: number
    name: string
    displayName: string
    description: string
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ContextUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContextUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type IdentityListRelationFilter = {
    every?: IdentityWhereInput
    some?: IdentityWhereInput
    none?: IdentityWhereInput
  }

  export type SharedIdentityListRelationFilter = {
    every?: SharedIdentityWhereInput
    some?: SharedIdentityWhereInput
    none?: SharedIdentityWhereInput
  }

  export type IdentityRequestListRelationFilter = {
    every?: IdentityRequestWhereInput
    some?: IdentityRequestWhereInput
    none?: IdentityRequestWhereInput
  }

  export type SharedLinkListRelationFilter = {
    every?: SharedLinkWhereInput
    some?: SharedLinkWhereInput
    none?: SharedLinkWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdentityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedIdentityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdentityRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    userId?: SortOrder
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

  export type IdentityAttributeListRelationFilter = {
    every?: IdentityAttributeWhereInput
    some?: IdentityAttributeWhereInput
    none?: IdentityAttributeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IdentityAttributeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IdentityUserIdNameCompoundUniqueInput = {
    userId: number
    name: string
  }

  export type IdentityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isDefault?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentitySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type IdentityScalarRelationFilter = {
    is?: IdentityWhereInput
    isNot?: IdentityWhereInput
  }

  export type IdentityAttributeIdentityIdKeyCompoundUniqueInput = {
    identityId: number
    key: string
  }

  export type IdentityAttributeCountOrderByAggregateInput = {
    id?: SortOrder
    identityId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    isPublic?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityAttributeAvgOrderByAggregateInput = {
    id?: SortOrder
    identityId?: SortOrder
  }

  export type IdentityAttributeMaxOrderByAggregateInput = {
    id?: SortOrder
    identityId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    isPublic?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityAttributeMinOrderByAggregateInput = {
    id?: SortOrder
    identityId?: SortOrder
    key?: SortOrder
    value?: SortOrder
    isPublic?: SortOrder
    isVisible?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IdentityAttributeSumOrderByAggregateInput = {
    id?: SortOrder
    identityId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SharedIdentityOwnerIdViewerIdIdentityIdContextCompoundUniqueInput = {
    ownerId: number
    viewerId: number
    identityId: number
    context: string
  }

  export type SharedIdentityCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    canView?: SortOrder
    canRequest?: SortOrder
    sharedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SharedIdentityAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
  }

  export type SharedIdentityMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    canView?: SortOrder
    canRequest?: SortOrder
    sharedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SharedIdentityMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    canView?: SortOrder
    canRequest?: SortOrder
    sharedAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type SharedIdentitySumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    viewerId?: SortOrder
    identityId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type SharedLinkAccessListRelationFilter = {
    every?: SharedLinkAccessWhereInput
    some?: SharedLinkAccessWhereInput
    none?: SharedLinkAccessWhereInput
  }

  export type SharedLinkAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SharedLinkCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    accessLimit?: SortOrder
    accessCount?: SortOrder
    requireAuth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharedLinkAvgOrderByAggregateInput = {
    ownerId?: SortOrder
    identityId?: SortOrder
    accessLimit?: SortOrder
    accessCount?: SortOrder
  }

  export type SharedLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    accessLimit?: SortOrder
    accessCount?: SortOrder
    requireAuth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharedLinkMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    expiresAt?: SortOrder
    accessLimit?: SortOrder
    accessCount?: SortOrder
    requireAuth?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharedLinkSumOrderByAggregateInput = {
    ownerId?: SortOrder
    identityId?: SortOrder
    accessLimit?: SortOrder
    accessCount?: SortOrder
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

  export type SharedLinkScalarRelationFilter = {
    is?: SharedLinkWhereInput
    isNot?: SharedLinkWhereInput
  }

  export type SharedLinkAccessCountOrderByAggregateInput = {
    id?: SortOrder
    sharedLinkId?: SortOrder
    viewerIp?: SortOrder
    viewerAgent?: SortOrder
    accessedAt?: SortOrder
  }

  export type SharedLinkAccessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SharedLinkAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    sharedLinkId?: SortOrder
    viewerIp?: SortOrder
    viewerAgent?: SortOrder
    accessedAt?: SortOrder
  }

  export type SharedLinkAccessMinOrderByAggregateInput = {
    id?: SortOrder
    sharedLinkId?: SortOrder
    viewerIp?: SortOrder
    viewerAgent?: SortOrder
    accessedAt?: SortOrder
  }

  export type SharedLinkAccessSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type IdentityNullableScalarRelationFilter = {
    is?: IdentityWhereInput | null
    isNot?: IdentityWhereInput | null
  }

  export type IdentityRequestRequesterIdTargetIdContextCompoundUniqueInput = {
    requesterId: number
    targetId: number
    context: string
  }

  export type IdentityRequestCountOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type IdentityRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrder
  }

  export type IdentityRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type IdentityRequestMinOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrder
    context?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    respondedAt?: SortOrder
  }

  export type IdentityRequestSumOrderByAggregateInput = {
    id?: SortOrder
    requesterId?: SortOrder
    targetId?: SortOrder
    identityId?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ContextCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ContextAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ContextMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ContextMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ContextSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type IdentityCreateNestedManyWithoutUserInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput> | IdentityCreateWithoutUserInput[] | IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput | IdentityCreateOrConnectWithoutUserInput[]
    createMany?: IdentityCreateManyUserInputEnvelope
    connect?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
  }

  export type SharedIdentityCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SharedIdentityCreateWithoutOwnerInput, SharedIdentityUncheckedCreateWithoutOwnerInput> | SharedIdentityCreateWithoutOwnerInput[] | SharedIdentityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutOwnerInput | SharedIdentityCreateOrConnectWithoutOwnerInput[]
    createMany?: SharedIdentityCreateManyOwnerInputEnvelope
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
  }

  export type IdentityRequestCreateNestedManyWithoutRequesterInput = {
    create?: XOR<IdentityRequestCreateWithoutRequesterInput, IdentityRequestUncheckedCreateWithoutRequesterInput> | IdentityRequestCreateWithoutRequesterInput[] | IdentityRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutRequesterInput | IdentityRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: IdentityRequestCreateManyRequesterInputEnvelope
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
  }

  export type SharedLinkCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SharedLinkCreateWithoutOwnerInput, SharedLinkUncheckedCreateWithoutOwnerInput> | SharedLinkCreateWithoutOwnerInput[] | SharedLinkUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutOwnerInput | SharedLinkCreateOrConnectWithoutOwnerInput[]
    createMany?: SharedLinkCreateManyOwnerInputEnvelope
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type IdentityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput> | IdentityCreateWithoutUserInput[] | IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput | IdentityCreateOrConnectWithoutUserInput[]
    createMany?: IdentityCreateManyUserInputEnvelope
    connect?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
  }

  export type SharedIdentityUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SharedIdentityCreateWithoutOwnerInput, SharedIdentityUncheckedCreateWithoutOwnerInput> | SharedIdentityCreateWithoutOwnerInput[] | SharedIdentityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutOwnerInput | SharedIdentityCreateOrConnectWithoutOwnerInput[]
    createMany?: SharedIdentityCreateManyOwnerInputEnvelope
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
  }

  export type IdentityRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: XOR<IdentityRequestCreateWithoutRequesterInput, IdentityRequestUncheckedCreateWithoutRequesterInput> | IdentityRequestCreateWithoutRequesterInput[] | IdentityRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutRequesterInput | IdentityRequestCreateOrConnectWithoutRequesterInput[]
    createMany?: IdentityRequestCreateManyRequesterInputEnvelope
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
  }

  export type SharedLinkUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<SharedLinkCreateWithoutOwnerInput, SharedLinkUncheckedCreateWithoutOwnerInput> | SharedLinkCreateWithoutOwnerInput[] | SharedLinkUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutOwnerInput | SharedLinkCreateOrConnectWithoutOwnerInput[]
    createMany?: SharedLinkCreateManyOwnerInputEnvelope
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IdentityUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput> | IdentityCreateWithoutUserInput[] | IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput | IdentityCreateOrConnectWithoutUserInput[]
    upsert?: IdentityUpsertWithWhereUniqueWithoutUserInput | IdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdentityCreateManyUserInputEnvelope
    set?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    disconnect?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    delete?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    connect?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    update?: IdentityUpdateWithWhereUniqueWithoutUserInput | IdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdentityUpdateManyWithWhereWithoutUserInput | IdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdentityScalarWhereInput | IdentityScalarWhereInput[]
  }

  export type SharedIdentityUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SharedIdentityCreateWithoutOwnerInput, SharedIdentityUncheckedCreateWithoutOwnerInput> | SharedIdentityCreateWithoutOwnerInput[] | SharedIdentityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutOwnerInput | SharedIdentityCreateOrConnectWithoutOwnerInput[]
    upsert?: SharedIdentityUpsertWithWhereUniqueWithoutOwnerInput | SharedIdentityUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SharedIdentityCreateManyOwnerInputEnvelope
    set?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    disconnect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    delete?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    update?: SharedIdentityUpdateWithWhereUniqueWithoutOwnerInput | SharedIdentityUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SharedIdentityUpdateManyWithWhereWithoutOwnerInput | SharedIdentityUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SharedIdentityScalarWhereInput | SharedIdentityScalarWhereInput[]
  }

  export type IdentityRequestUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<IdentityRequestCreateWithoutRequesterInput, IdentityRequestUncheckedCreateWithoutRequesterInput> | IdentityRequestCreateWithoutRequesterInput[] | IdentityRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutRequesterInput | IdentityRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: IdentityRequestUpsertWithWhereUniqueWithoutRequesterInput | IdentityRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: IdentityRequestCreateManyRequesterInputEnvelope
    set?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    disconnect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    delete?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    update?: IdentityRequestUpdateWithWhereUniqueWithoutRequesterInput | IdentityRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: IdentityRequestUpdateManyWithWhereWithoutRequesterInput | IdentityRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: IdentityRequestScalarWhereInput | IdentityRequestScalarWhereInput[]
  }

  export type SharedLinkUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SharedLinkCreateWithoutOwnerInput, SharedLinkUncheckedCreateWithoutOwnerInput> | SharedLinkCreateWithoutOwnerInput[] | SharedLinkUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutOwnerInput | SharedLinkCreateOrConnectWithoutOwnerInput[]
    upsert?: SharedLinkUpsertWithWhereUniqueWithoutOwnerInput | SharedLinkUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SharedLinkCreateManyOwnerInputEnvelope
    set?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    disconnect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    delete?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    update?: SharedLinkUpdateWithWhereUniqueWithoutOwnerInput | SharedLinkUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SharedLinkUpdateManyWithWhereWithoutOwnerInput | SharedLinkUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SharedLinkScalarWhereInput | SharedLinkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type IdentityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput> | IdentityCreateWithoutUserInput[] | IdentityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IdentityCreateOrConnectWithoutUserInput | IdentityCreateOrConnectWithoutUserInput[]
    upsert?: IdentityUpsertWithWhereUniqueWithoutUserInput | IdentityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IdentityCreateManyUserInputEnvelope
    set?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    disconnect?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    delete?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    connect?: IdentityWhereUniqueInput | IdentityWhereUniqueInput[]
    update?: IdentityUpdateWithWhereUniqueWithoutUserInput | IdentityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IdentityUpdateManyWithWhereWithoutUserInput | IdentityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IdentityScalarWhereInput | IdentityScalarWhereInput[]
  }

  export type SharedIdentityUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SharedIdentityCreateWithoutOwnerInput, SharedIdentityUncheckedCreateWithoutOwnerInput> | SharedIdentityCreateWithoutOwnerInput[] | SharedIdentityUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutOwnerInput | SharedIdentityCreateOrConnectWithoutOwnerInput[]
    upsert?: SharedIdentityUpsertWithWhereUniqueWithoutOwnerInput | SharedIdentityUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SharedIdentityCreateManyOwnerInputEnvelope
    set?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    disconnect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    delete?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    update?: SharedIdentityUpdateWithWhereUniqueWithoutOwnerInput | SharedIdentityUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SharedIdentityUpdateManyWithWhereWithoutOwnerInput | SharedIdentityUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SharedIdentityScalarWhereInput | SharedIdentityScalarWhereInput[]
  }

  export type IdentityRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: XOR<IdentityRequestCreateWithoutRequesterInput, IdentityRequestUncheckedCreateWithoutRequesterInput> | IdentityRequestCreateWithoutRequesterInput[] | IdentityRequestUncheckedCreateWithoutRequesterInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutRequesterInput | IdentityRequestCreateOrConnectWithoutRequesterInput[]
    upsert?: IdentityRequestUpsertWithWhereUniqueWithoutRequesterInput | IdentityRequestUpsertWithWhereUniqueWithoutRequesterInput[]
    createMany?: IdentityRequestCreateManyRequesterInputEnvelope
    set?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    disconnect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    delete?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    update?: IdentityRequestUpdateWithWhereUniqueWithoutRequesterInput | IdentityRequestUpdateWithWhereUniqueWithoutRequesterInput[]
    updateMany?: IdentityRequestUpdateManyWithWhereWithoutRequesterInput | IdentityRequestUpdateManyWithWhereWithoutRequesterInput[]
    deleteMany?: IdentityRequestScalarWhereInput | IdentityRequestScalarWhereInput[]
  }

  export type SharedLinkUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<SharedLinkCreateWithoutOwnerInput, SharedLinkUncheckedCreateWithoutOwnerInput> | SharedLinkCreateWithoutOwnerInput[] | SharedLinkUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutOwnerInput | SharedLinkCreateOrConnectWithoutOwnerInput[]
    upsert?: SharedLinkUpsertWithWhereUniqueWithoutOwnerInput | SharedLinkUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: SharedLinkCreateManyOwnerInputEnvelope
    set?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    disconnect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    delete?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    update?: SharedLinkUpdateWithWhereUniqueWithoutOwnerInput | SharedLinkUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: SharedLinkUpdateManyWithWhereWithoutOwnerInput | SharedLinkUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: SharedLinkScalarWhereInput | SharedLinkScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutIdentitiesInput = {
    create?: XOR<UserCreateWithoutIdentitiesInput, UserUncheckedCreateWithoutIdentitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput
    connect?: UserWhereUniqueInput
  }

  export type IdentityAttributeCreateNestedManyWithoutIdentityInput = {
    create?: XOR<IdentityAttributeCreateWithoutIdentityInput, IdentityAttributeUncheckedCreateWithoutIdentityInput> | IdentityAttributeCreateWithoutIdentityInput[] | IdentityAttributeUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityAttributeCreateOrConnectWithoutIdentityInput | IdentityAttributeCreateOrConnectWithoutIdentityInput[]
    createMany?: IdentityAttributeCreateManyIdentityInputEnvelope
    connect?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
  }

  export type SharedIdentityCreateNestedManyWithoutIdentityInput = {
    create?: XOR<SharedIdentityCreateWithoutIdentityInput, SharedIdentityUncheckedCreateWithoutIdentityInput> | SharedIdentityCreateWithoutIdentityInput[] | SharedIdentityUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutIdentityInput | SharedIdentityCreateOrConnectWithoutIdentityInput[]
    createMany?: SharedIdentityCreateManyIdentityInputEnvelope
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
  }

  export type IdentityRequestCreateNestedManyWithoutIdentityInput = {
    create?: XOR<IdentityRequestCreateWithoutIdentityInput, IdentityRequestUncheckedCreateWithoutIdentityInput> | IdentityRequestCreateWithoutIdentityInput[] | IdentityRequestUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutIdentityInput | IdentityRequestCreateOrConnectWithoutIdentityInput[]
    createMany?: IdentityRequestCreateManyIdentityInputEnvelope
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
  }

  export type SharedLinkCreateNestedManyWithoutIdentityInput = {
    create?: XOR<SharedLinkCreateWithoutIdentityInput, SharedLinkUncheckedCreateWithoutIdentityInput> | SharedLinkCreateWithoutIdentityInput[] | SharedLinkUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutIdentityInput | SharedLinkCreateOrConnectWithoutIdentityInput[]
    createMany?: SharedLinkCreateManyIdentityInputEnvelope
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
  }

  export type IdentityAttributeUncheckedCreateNestedManyWithoutIdentityInput = {
    create?: XOR<IdentityAttributeCreateWithoutIdentityInput, IdentityAttributeUncheckedCreateWithoutIdentityInput> | IdentityAttributeCreateWithoutIdentityInput[] | IdentityAttributeUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityAttributeCreateOrConnectWithoutIdentityInput | IdentityAttributeCreateOrConnectWithoutIdentityInput[]
    createMany?: IdentityAttributeCreateManyIdentityInputEnvelope
    connect?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
  }

  export type SharedIdentityUncheckedCreateNestedManyWithoutIdentityInput = {
    create?: XOR<SharedIdentityCreateWithoutIdentityInput, SharedIdentityUncheckedCreateWithoutIdentityInput> | SharedIdentityCreateWithoutIdentityInput[] | SharedIdentityUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutIdentityInput | SharedIdentityCreateOrConnectWithoutIdentityInput[]
    createMany?: SharedIdentityCreateManyIdentityInputEnvelope
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
  }

  export type IdentityRequestUncheckedCreateNestedManyWithoutIdentityInput = {
    create?: XOR<IdentityRequestCreateWithoutIdentityInput, IdentityRequestUncheckedCreateWithoutIdentityInput> | IdentityRequestCreateWithoutIdentityInput[] | IdentityRequestUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutIdentityInput | IdentityRequestCreateOrConnectWithoutIdentityInput[]
    createMany?: IdentityRequestCreateManyIdentityInputEnvelope
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
  }

  export type SharedLinkUncheckedCreateNestedManyWithoutIdentityInput = {
    create?: XOR<SharedLinkCreateWithoutIdentityInput, SharedLinkUncheckedCreateWithoutIdentityInput> | SharedLinkCreateWithoutIdentityInput[] | SharedLinkUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutIdentityInput | SharedLinkCreateOrConnectWithoutIdentityInput[]
    createMany?: SharedLinkCreateManyIdentityInputEnvelope
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutIdentitiesNestedInput = {
    create?: XOR<UserCreateWithoutIdentitiesInput, UserUncheckedCreateWithoutIdentitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdentitiesInput
    upsert?: UserUpsertWithoutIdentitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIdentitiesInput, UserUpdateWithoutIdentitiesInput>, UserUncheckedUpdateWithoutIdentitiesInput>
  }

  export type IdentityAttributeUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<IdentityAttributeCreateWithoutIdentityInput, IdentityAttributeUncheckedCreateWithoutIdentityInput> | IdentityAttributeCreateWithoutIdentityInput[] | IdentityAttributeUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityAttributeCreateOrConnectWithoutIdentityInput | IdentityAttributeCreateOrConnectWithoutIdentityInput[]
    upsert?: IdentityAttributeUpsertWithWhereUniqueWithoutIdentityInput | IdentityAttributeUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: IdentityAttributeCreateManyIdentityInputEnvelope
    set?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    disconnect?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    delete?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    connect?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    update?: IdentityAttributeUpdateWithWhereUniqueWithoutIdentityInput | IdentityAttributeUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: IdentityAttributeUpdateManyWithWhereWithoutIdentityInput | IdentityAttributeUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: IdentityAttributeScalarWhereInput | IdentityAttributeScalarWhereInput[]
  }

  export type SharedIdentityUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<SharedIdentityCreateWithoutIdentityInput, SharedIdentityUncheckedCreateWithoutIdentityInput> | SharedIdentityCreateWithoutIdentityInput[] | SharedIdentityUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutIdentityInput | SharedIdentityCreateOrConnectWithoutIdentityInput[]
    upsert?: SharedIdentityUpsertWithWhereUniqueWithoutIdentityInput | SharedIdentityUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: SharedIdentityCreateManyIdentityInputEnvelope
    set?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    disconnect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    delete?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    update?: SharedIdentityUpdateWithWhereUniqueWithoutIdentityInput | SharedIdentityUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: SharedIdentityUpdateManyWithWhereWithoutIdentityInput | SharedIdentityUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: SharedIdentityScalarWhereInput | SharedIdentityScalarWhereInput[]
  }

  export type IdentityRequestUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<IdentityRequestCreateWithoutIdentityInput, IdentityRequestUncheckedCreateWithoutIdentityInput> | IdentityRequestCreateWithoutIdentityInput[] | IdentityRequestUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutIdentityInput | IdentityRequestCreateOrConnectWithoutIdentityInput[]
    upsert?: IdentityRequestUpsertWithWhereUniqueWithoutIdentityInput | IdentityRequestUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: IdentityRequestCreateManyIdentityInputEnvelope
    set?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    disconnect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    delete?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    update?: IdentityRequestUpdateWithWhereUniqueWithoutIdentityInput | IdentityRequestUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: IdentityRequestUpdateManyWithWhereWithoutIdentityInput | IdentityRequestUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: IdentityRequestScalarWhereInput | IdentityRequestScalarWhereInput[]
  }

  export type SharedLinkUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<SharedLinkCreateWithoutIdentityInput, SharedLinkUncheckedCreateWithoutIdentityInput> | SharedLinkCreateWithoutIdentityInput[] | SharedLinkUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutIdentityInput | SharedLinkCreateOrConnectWithoutIdentityInput[]
    upsert?: SharedLinkUpsertWithWhereUniqueWithoutIdentityInput | SharedLinkUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: SharedLinkCreateManyIdentityInputEnvelope
    set?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    disconnect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    delete?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    update?: SharedLinkUpdateWithWhereUniqueWithoutIdentityInput | SharedLinkUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: SharedLinkUpdateManyWithWhereWithoutIdentityInput | SharedLinkUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: SharedLinkScalarWhereInput | SharedLinkScalarWhereInput[]
  }

  export type IdentityAttributeUncheckedUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<IdentityAttributeCreateWithoutIdentityInput, IdentityAttributeUncheckedCreateWithoutIdentityInput> | IdentityAttributeCreateWithoutIdentityInput[] | IdentityAttributeUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityAttributeCreateOrConnectWithoutIdentityInput | IdentityAttributeCreateOrConnectWithoutIdentityInput[]
    upsert?: IdentityAttributeUpsertWithWhereUniqueWithoutIdentityInput | IdentityAttributeUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: IdentityAttributeCreateManyIdentityInputEnvelope
    set?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    disconnect?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    delete?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    connect?: IdentityAttributeWhereUniqueInput | IdentityAttributeWhereUniqueInput[]
    update?: IdentityAttributeUpdateWithWhereUniqueWithoutIdentityInput | IdentityAttributeUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: IdentityAttributeUpdateManyWithWhereWithoutIdentityInput | IdentityAttributeUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: IdentityAttributeScalarWhereInput | IdentityAttributeScalarWhereInput[]
  }

  export type SharedIdentityUncheckedUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<SharedIdentityCreateWithoutIdentityInput, SharedIdentityUncheckedCreateWithoutIdentityInput> | SharedIdentityCreateWithoutIdentityInput[] | SharedIdentityUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedIdentityCreateOrConnectWithoutIdentityInput | SharedIdentityCreateOrConnectWithoutIdentityInput[]
    upsert?: SharedIdentityUpsertWithWhereUniqueWithoutIdentityInput | SharedIdentityUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: SharedIdentityCreateManyIdentityInputEnvelope
    set?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    disconnect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    delete?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    connect?: SharedIdentityWhereUniqueInput | SharedIdentityWhereUniqueInput[]
    update?: SharedIdentityUpdateWithWhereUniqueWithoutIdentityInput | SharedIdentityUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: SharedIdentityUpdateManyWithWhereWithoutIdentityInput | SharedIdentityUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: SharedIdentityScalarWhereInput | SharedIdentityScalarWhereInput[]
  }

  export type IdentityRequestUncheckedUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<IdentityRequestCreateWithoutIdentityInput, IdentityRequestUncheckedCreateWithoutIdentityInput> | IdentityRequestCreateWithoutIdentityInput[] | IdentityRequestUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: IdentityRequestCreateOrConnectWithoutIdentityInput | IdentityRequestCreateOrConnectWithoutIdentityInput[]
    upsert?: IdentityRequestUpsertWithWhereUniqueWithoutIdentityInput | IdentityRequestUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: IdentityRequestCreateManyIdentityInputEnvelope
    set?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    disconnect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    delete?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    connect?: IdentityRequestWhereUniqueInput | IdentityRequestWhereUniqueInput[]
    update?: IdentityRequestUpdateWithWhereUniqueWithoutIdentityInput | IdentityRequestUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: IdentityRequestUpdateManyWithWhereWithoutIdentityInput | IdentityRequestUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: IdentityRequestScalarWhereInput | IdentityRequestScalarWhereInput[]
  }

  export type SharedLinkUncheckedUpdateManyWithoutIdentityNestedInput = {
    create?: XOR<SharedLinkCreateWithoutIdentityInput, SharedLinkUncheckedCreateWithoutIdentityInput> | SharedLinkCreateWithoutIdentityInput[] | SharedLinkUncheckedCreateWithoutIdentityInput[]
    connectOrCreate?: SharedLinkCreateOrConnectWithoutIdentityInput | SharedLinkCreateOrConnectWithoutIdentityInput[]
    upsert?: SharedLinkUpsertWithWhereUniqueWithoutIdentityInput | SharedLinkUpsertWithWhereUniqueWithoutIdentityInput[]
    createMany?: SharedLinkCreateManyIdentityInputEnvelope
    set?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    disconnect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    delete?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    connect?: SharedLinkWhereUniqueInput | SharedLinkWhereUniqueInput[]
    update?: SharedLinkUpdateWithWhereUniqueWithoutIdentityInput | SharedLinkUpdateWithWhereUniqueWithoutIdentityInput[]
    updateMany?: SharedLinkUpdateManyWithWhereWithoutIdentityInput | SharedLinkUpdateManyWithWhereWithoutIdentityInput[]
    deleteMany?: SharedLinkScalarWhereInput | SharedLinkScalarWhereInput[]
  }

  export type IdentityCreateNestedOneWithoutAttributesInput = {
    create?: XOR<IdentityCreateWithoutAttributesInput, IdentityUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutAttributesInput
    connect?: IdentityWhereUniqueInput
  }

  export type IdentityUpdateOneRequiredWithoutAttributesNestedInput = {
    create?: XOR<IdentityCreateWithoutAttributesInput, IdentityUncheckedCreateWithoutAttributesInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutAttributesInput
    upsert?: IdentityUpsertWithoutAttributesInput
    connect?: IdentityWhereUniqueInput
    update?: XOR<XOR<IdentityUpdateToOneWithWhereWithoutAttributesInput, IdentityUpdateWithoutAttributesInput>, IdentityUncheckedUpdateWithoutAttributesInput>
  }

  export type UserCreateNestedOneWithoutSharedIdentitiesInput = {
    create?: XOR<UserCreateWithoutSharedIdentitiesInput, UserUncheckedCreateWithoutSharedIdentitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedIdentitiesInput
    connect?: UserWhereUniqueInput
  }

  export type IdentityCreateNestedOneWithoutSharedWithInput = {
    create?: XOR<IdentityCreateWithoutSharedWithInput, IdentityUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutSharedWithInput
    connect?: IdentityWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutSharedIdentitiesNestedInput = {
    create?: XOR<UserCreateWithoutSharedIdentitiesInput, UserUncheckedCreateWithoutSharedIdentitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedIdentitiesInput
    upsert?: UserUpsertWithoutSharedIdentitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedIdentitiesInput, UserUpdateWithoutSharedIdentitiesInput>, UserUncheckedUpdateWithoutSharedIdentitiesInput>
  }

  export type IdentityUpdateOneRequiredWithoutSharedWithNestedInput = {
    create?: XOR<IdentityCreateWithoutSharedWithInput, IdentityUncheckedCreateWithoutSharedWithInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutSharedWithInput
    upsert?: IdentityUpsertWithoutSharedWithInput
    connect?: IdentityWhereUniqueInput
    update?: XOR<XOR<IdentityUpdateToOneWithWhereWithoutSharedWithInput, IdentityUpdateWithoutSharedWithInput>, IdentityUncheckedUpdateWithoutSharedWithInput>
  }

  export type UserCreateNestedOneWithoutSharedLinksInput = {
    create?: XOR<UserCreateWithoutSharedLinksInput, UserUncheckedCreateWithoutSharedLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedLinksInput
    connect?: UserWhereUniqueInput
  }

  export type IdentityCreateNestedOneWithoutSharedLinksInput = {
    create?: XOR<IdentityCreateWithoutSharedLinksInput, IdentityUncheckedCreateWithoutSharedLinksInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutSharedLinksInput
    connect?: IdentityWhereUniqueInput
  }

  export type SharedLinkAccessCreateNestedManyWithoutSharedLinkInput = {
    create?: XOR<SharedLinkAccessCreateWithoutSharedLinkInput, SharedLinkAccessUncheckedCreateWithoutSharedLinkInput> | SharedLinkAccessCreateWithoutSharedLinkInput[] | SharedLinkAccessUncheckedCreateWithoutSharedLinkInput[]
    connectOrCreate?: SharedLinkAccessCreateOrConnectWithoutSharedLinkInput | SharedLinkAccessCreateOrConnectWithoutSharedLinkInput[]
    createMany?: SharedLinkAccessCreateManySharedLinkInputEnvelope
    connect?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
  }

  export type SharedLinkAccessUncheckedCreateNestedManyWithoutSharedLinkInput = {
    create?: XOR<SharedLinkAccessCreateWithoutSharedLinkInput, SharedLinkAccessUncheckedCreateWithoutSharedLinkInput> | SharedLinkAccessCreateWithoutSharedLinkInput[] | SharedLinkAccessUncheckedCreateWithoutSharedLinkInput[]
    connectOrCreate?: SharedLinkAccessCreateOrConnectWithoutSharedLinkInput | SharedLinkAccessCreateOrConnectWithoutSharedLinkInput[]
    createMany?: SharedLinkAccessCreateManySharedLinkInputEnvelope
    connect?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSharedLinksNestedInput = {
    create?: XOR<UserCreateWithoutSharedLinksInput, UserUncheckedCreateWithoutSharedLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutSharedLinksInput
    upsert?: UserUpsertWithoutSharedLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSharedLinksInput, UserUpdateWithoutSharedLinksInput>, UserUncheckedUpdateWithoutSharedLinksInput>
  }

  export type IdentityUpdateOneRequiredWithoutSharedLinksNestedInput = {
    create?: XOR<IdentityCreateWithoutSharedLinksInput, IdentityUncheckedCreateWithoutSharedLinksInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutSharedLinksInput
    upsert?: IdentityUpsertWithoutSharedLinksInput
    connect?: IdentityWhereUniqueInput
    update?: XOR<XOR<IdentityUpdateToOneWithWhereWithoutSharedLinksInput, IdentityUpdateWithoutSharedLinksInput>, IdentityUncheckedUpdateWithoutSharedLinksInput>
  }

  export type SharedLinkAccessUpdateManyWithoutSharedLinkNestedInput = {
    create?: XOR<SharedLinkAccessCreateWithoutSharedLinkInput, SharedLinkAccessUncheckedCreateWithoutSharedLinkInput> | SharedLinkAccessCreateWithoutSharedLinkInput[] | SharedLinkAccessUncheckedCreateWithoutSharedLinkInput[]
    connectOrCreate?: SharedLinkAccessCreateOrConnectWithoutSharedLinkInput | SharedLinkAccessCreateOrConnectWithoutSharedLinkInput[]
    upsert?: SharedLinkAccessUpsertWithWhereUniqueWithoutSharedLinkInput | SharedLinkAccessUpsertWithWhereUniqueWithoutSharedLinkInput[]
    createMany?: SharedLinkAccessCreateManySharedLinkInputEnvelope
    set?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    disconnect?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    delete?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    connect?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    update?: SharedLinkAccessUpdateWithWhereUniqueWithoutSharedLinkInput | SharedLinkAccessUpdateWithWhereUniqueWithoutSharedLinkInput[]
    updateMany?: SharedLinkAccessUpdateManyWithWhereWithoutSharedLinkInput | SharedLinkAccessUpdateManyWithWhereWithoutSharedLinkInput[]
    deleteMany?: SharedLinkAccessScalarWhereInput | SharedLinkAccessScalarWhereInput[]
  }

  export type SharedLinkAccessUncheckedUpdateManyWithoutSharedLinkNestedInput = {
    create?: XOR<SharedLinkAccessCreateWithoutSharedLinkInput, SharedLinkAccessUncheckedCreateWithoutSharedLinkInput> | SharedLinkAccessCreateWithoutSharedLinkInput[] | SharedLinkAccessUncheckedCreateWithoutSharedLinkInput[]
    connectOrCreate?: SharedLinkAccessCreateOrConnectWithoutSharedLinkInput | SharedLinkAccessCreateOrConnectWithoutSharedLinkInput[]
    upsert?: SharedLinkAccessUpsertWithWhereUniqueWithoutSharedLinkInput | SharedLinkAccessUpsertWithWhereUniqueWithoutSharedLinkInput[]
    createMany?: SharedLinkAccessCreateManySharedLinkInputEnvelope
    set?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    disconnect?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    delete?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    connect?: SharedLinkAccessWhereUniqueInput | SharedLinkAccessWhereUniqueInput[]
    update?: SharedLinkAccessUpdateWithWhereUniqueWithoutSharedLinkInput | SharedLinkAccessUpdateWithWhereUniqueWithoutSharedLinkInput[]
    updateMany?: SharedLinkAccessUpdateManyWithWhereWithoutSharedLinkInput | SharedLinkAccessUpdateManyWithWhereWithoutSharedLinkInput[]
    deleteMany?: SharedLinkAccessScalarWhereInput | SharedLinkAccessScalarWhereInput[]
  }

  export type SharedLinkCreateNestedOneWithoutAccessesInput = {
    create?: XOR<SharedLinkCreateWithoutAccessesInput, SharedLinkUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: SharedLinkCreateOrConnectWithoutAccessesInput
    connect?: SharedLinkWhereUniqueInput
  }

  export type SharedLinkUpdateOneRequiredWithoutAccessesNestedInput = {
    create?: XOR<SharedLinkCreateWithoutAccessesInput, SharedLinkUncheckedCreateWithoutAccessesInput>
    connectOrCreate?: SharedLinkCreateOrConnectWithoutAccessesInput
    upsert?: SharedLinkUpsertWithoutAccessesInput
    connect?: SharedLinkWhereUniqueInput
    update?: XOR<XOR<SharedLinkUpdateToOneWithWhereWithoutAccessesInput, SharedLinkUpdateWithoutAccessesInput>, SharedLinkUncheckedUpdateWithoutAccessesInput>
  }

  export type UserCreateNestedOneWithoutIdentityRequestsInput = {
    create?: XOR<UserCreateWithoutIdentityRequestsInput, UserUncheckedCreateWithoutIdentityRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdentityRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type IdentityCreateNestedOneWithoutRequestsInput = {
    create?: XOR<IdentityCreateWithoutRequestsInput, IdentityUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutRequestsInput
    connect?: IdentityWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutIdentityRequestsNestedInput = {
    create?: XOR<UserCreateWithoutIdentityRequestsInput, UserUncheckedCreateWithoutIdentityRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIdentityRequestsInput
    upsert?: UserUpsertWithoutIdentityRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIdentityRequestsInput, UserUpdateWithoutIdentityRequestsInput>, UserUncheckedUpdateWithoutIdentityRequestsInput>
  }

  export type IdentityUpdateOneWithoutRequestsNestedInput = {
    create?: XOR<IdentityCreateWithoutRequestsInput, IdentityUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: IdentityCreateOrConnectWithoutRequestsInput
    upsert?: IdentityUpsertWithoutRequestsInput
    disconnect?: IdentityWhereInput | boolean
    delete?: IdentityWhereInput | boolean
    connect?: IdentityWhereUniqueInput
    update?: XOR<XOR<IdentityUpdateToOneWithWhereWithoutRequestsInput, IdentityUpdateWithoutRequestsInput>, IdentityUncheckedUpdateWithoutRequestsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IdentityCreateWithoutUserInput = {
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: IdentityAttributeCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: IdentityAttributeUncheckedCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityUncheckedCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestUncheckedCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutIdentityInput
  }

  export type IdentityCreateOrConnectWithoutUserInput = {
    where: IdentityWhereUniqueInput
    create: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
  }

  export type IdentityCreateManyUserInputEnvelope = {
    data: IdentityCreateManyUserInput | IdentityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SharedIdentityCreateWithoutOwnerInput = {
    viewerId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
    identity: IdentityCreateNestedOneWithoutSharedWithInput
  }

  export type SharedIdentityUncheckedCreateWithoutOwnerInput = {
    id?: number
    viewerId: number
    identityId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SharedIdentityCreateOrConnectWithoutOwnerInput = {
    where: SharedIdentityWhereUniqueInput
    create: XOR<SharedIdentityCreateWithoutOwnerInput, SharedIdentityUncheckedCreateWithoutOwnerInput>
  }

  export type SharedIdentityCreateManyOwnerInputEnvelope = {
    data: SharedIdentityCreateManyOwnerInput | SharedIdentityCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type IdentityRequestCreateWithoutRequesterInput = {
    targetId: number
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
    identity?: IdentityCreateNestedOneWithoutRequestsInput
  }

  export type IdentityRequestUncheckedCreateWithoutRequesterInput = {
    id?: number
    targetId: number
    identityId?: number | null
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type IdentityRequestCreateOrConnectWithoutRequesterInput = {
    where: IdentityRequestWhereUniqueInput
    create: XOR<IdentityRequestCreateWithoutRequesterInput, IdentityRequestUncheckedCreateWithoutRequesterInput>
  }

  export type IdentityRequestCreateManyRequesterInputEnvelope = {
    data: IdentityRequestCreateManyRequesterInput | IdentityRequestCreateManyRequesterInput[]
    skipDuplicates?: boolean
  }

  export type SharedLinkCreateWithoutOwnerInput = {
    id?: string
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    identity: IdentityCreateNestedOneWithoutSharedLinksInput
    accesses?: SharedLinkAccessCreateNestedManyWithoutSharedLinkInput
  }

  export type SharedLinkUncheckedCreateWithoutOwnerInput = {
    id?: string
    identityId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: SharedLinkAccessUncheckedCreateNestedManyWithoutSharedLinkInput
  }

  export type SharedLinkCreateOrConnectWithoutOwnerInput = {
    where: SharedLinkWhereUniqueInput
    create: XOR<SharedLinkCreateWithoutOwnerInput, SharedLinkUncheckedCreateWithoutOwnerInput>
  }

  export type SharedLinkCreateManyOwnerInputEnvelope = {
    data: SharedLinkCreateManyOwnerInput | SharedLinkCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: IntFilter<"Session"> | number
    expiresAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type IdentityUpsertWithWhereUniqueWithoutUserInput = {
    where: IdentityWhereUniqueInput
    update: XOR<IdentityUpdateWithoutUserInput, IdentityUncheckedUpdateWithoutUserInput>
    create: XOR<IdentityCreateWithoutUserInput, IdentityUncheckedCreateWithoutUserInput>
  }

  export type IdentityUpdateWithWhereUniqueWithoutUserInput = {
    where: IdentityWhereUniqueInput
    data: XOR<IdentityUpdateWithoutUserInput, IdentityUncheckedUpdateWithoutUserInput>
  }

  export type IdentityUpdateManyWithWhereWithoutUserInput = {
    where: IdentityScalarWhereInput
    data: XOR<IdentityUpdateManyMutationInput, IdentityUncheckedUpdateManyWithoutUserInput>
  }

  export type IdentityScalarWhereInput = {
    AND?: IdentityScalarWhereInput | IdentityScalarWhereInput[]
    OR?: IdentityScalarWhereInput[]
    NOT?: IdentityScalarWhereInput | IdentityScalarWhereInput[]
    id?: IntFilter<"Identity"> | number
    userId?: IntFilter<"Identity"> | number
    name?: StringFilter<"Identity"> | string
    description?: StringNullableFilter<"Identity"> | string | null
    isDefault?: BoolFilter<"Identity"> | boolean
    isActive?: BoolFilter<"Identity"> | boolean
    createdAt?: DateTimeFilter<"Identity"> | Date | string
    updatedAt?: DateTimeFilter<"Identity"> | Date | string
  }

  export type SharedIdentityUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SharedIdentityWhereUniqueInput
    update: XOR<SharedIdentityUpdateWithoutOwnerInput, SharedIdentityUncheckedUpdateWithoutOwnerInput>
    create: XOR<SharedIdentityCreateWithoutOwnerInput, SharedIdentityUncheckedCreateWithoutOwnerInput>
  }

  export type SharedIdentityUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SharedIdentityWhereUniqueInput
    data: XOR<SharedIdentityUpdateWithoutOwnerInput, SharedIdentityUncheckedUpdateWithoutOwnerInput>
  }

  export type SharedIdentityUpdateManyWithWhereWithoutOwnerInput = {
    where: SharedIdentityScalarWhereInput
    data: XOR<SharedIdentityUpdateManyMutationInput, SharedIdentityUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SharedIdentityScalarWhereInput = {
    AND?: SharedIdentityScalarWhereInput | SharedIdentityScalarWhereInput[]
    OR?: SharedIdentityScalarWhereInput[]
    NOT?: SharedIdentityScalarWhereInput | SharedIdentityScalarWhereInput[]
    id?: IntFilter<"SharedIdentity"> | number
    ownerId?: IntFilter<"SharedIdentity"> | number
    viewerId?: IntFilter<"SharedIdentity"> | number
    identityId?: IntFilter<"SharedIdentity"> | number
    context?: StringFilter<"SharedIdentity"> | string
    canView?: BoolFilter<"SharedIdentity"> | boolean
    canRequest?: BoolFilter<"SharedIdentity"> | boolean
    sharedAt?: DateTimeFilter<"SharedIdentity"> | Date | string
    expiresAt?: DateTimeNullableFilter<"SharedIdentity"> | Date | string | null
  }

  export type IdentityRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: IdentityRequestWhereUniqueInput
    update: XOR<IdentityRequestUpdateWithoutRequesterInput, IdentityRequestUncheckedUpdateWithoutRequesterInput>
    create: XOR<IdentityRequestCreateWithoutRequesterInput, IdentityRequestUncheckedCreateWithoutRequesterInput>
  }

  export type IdentityRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: IdentityRequestWhereUniqueInput
    data: XOR<IdentityRequestUpdateWithoutRequesterInput, IdentityRequestUncheckedUpdateWithoutRequesterInput>
  }

  export type IdentityRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: IdentityRequestScalarWhereInput
    data: XOR<IdentityRequestUpdateManyMutationInput, IdentityRequestUncheckedUpdateManyWithoutRequesterInput>
  }

  export type IdentityRequestScalarWhereInput = {
    AND?: IdentityRequestScalarWhereInput | IdentityRequestScalarWhereInput[]
    OR?: IdentityRequestScalarWhereInput[]
    NOT?: IdentityRequestScalarWhereInput | IdentityRequestScalarWhereInput[]
    id?: IntFilter<"IdentityRequest"> | number
    requesterId?: IntFilter<"IdentityRequest"> | number
    targetId?: IntFilter<"IdentityRequest"> | number
    identityId?: IntNullableFilter<"IdentityRequest"> | number | null
    context?: StringFilter<"IdentityRequest"> | string
    message?: StringNullableFilter<"IdentityRequest"> | string | null
    status?: EnumRequestStatusFilter<"IdentityRequest"> | $Enums.RequestStatus
    createdAt?: DateTimeFilter<"IdentityRequest"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityRequest"> | Date | string
    respondedAt?: DateTimeNullableFilter<"IdentityRequest"> | Date | string | null
  }

  export type SharedLinkUpsertWithWhereUniqueWithoutOwnerInput = {
    where: SharedLinkWhereUniqueInput
    update: XOR<SharedLinkUpdateWithoutOwnerInput, SharedLinkUncheckedUpdateWithoutOwnerInput>
    create: XOR<SharedLinkCreateWithoutOwnerInput, SharedLinkUncheckedCreateWithoutOwnerInput>
  }

  export type SharedLinkUpdateWithWhereUniqueWithoutOwnerInput = {
    where: SharedLinkWhereUniqueInput
    data: XOR<SharedLinkUpdateWithoutOwnerInput, SharedLinkUncheckedUpdateWithoutOwnerInput>
  }

  export type SharedLinkUpdateManyWithWhereWithoutOwnerInput = {
    where: SharedLinkScalarWhereInput
    data: XOR<SharedLinkUpdateManyMutationInput, SharedLinkUncheckedUpdateManyWithoutOwnerInput>
  }

  export type SharedLinkScalarWhereInput = {
    AND?: SharedLinkScalarWhereInput | SharedLinkScalarWhereInput[]
    OR?: SharedLinkScalarWhereInput[]
    NOT?: SharedLinkScalarWhereInput | SharedLinkScalarWhereInput[]
    id?: StringFilter<"SharedLink"> | string
    ownerId?: IntFilter<"SharedLink"> | number
    identityId?: IntFilter<"SharedLink"> | number
    context?: StringFilter<"SharedLink"> | string
    name?: StringNullableFilter<"SharedLink"> | string | null
    isActive?: BoolFilter<"SharedLink"> | boolean
    expiresAt?: DateTimeNullableFilter<"SharedLink"> | Date | string | null
    accessLimit?: IntNullableFilter<"SharedLink"> | number | null
    accessCount?: IntFilter<"SharedLink"> | number
    requireAuth?: BoolFilter<"SharedLink"> | boolean
    createdAt?: DateTimeFilter<"SharedLink"> | Date | string
    updatedAt?: DateTimeFilter<"SharedLink"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    identities?: IdentityCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    identities?: IdentityUncheckedCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityUncheckedCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestUncheckedCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identities?: IdentityUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUncheckedUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUncheckedUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UserCreateWithoutIdentitiesInput = {
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutIdentitiesInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityUncheckedCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestUncheckedCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutIdentitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdentitiesInput, UserUncheckedCreateWithoutIdentitiesInput>
  }

  export type IdentityAttributeCreateWithoutIdentityInput = {
    key: string
    value: string
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityAttributeUncheckedCreateWithoutIdentityInput = {
    id?: number
    key: string
    value: string
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityAttributeCreateOrConnectWithoutIdentityInput = {
    where: IdentityAttributeWhereUniqueInput
    create: XOR<IdentityAttributeCreateWithoutIdentityInput, IdentityAttributeUncheckedCreateWithoutIdentityInput>
  }

  export type IdentityAttributeCreateManyIdentityInputEnvelope = {
    data: IdentityAttributeCreateManyIdentityInput | IdentityAttributeCreateManyIdentityInput[]
    skipDuplicates?: boolean
  }

  export type SharedIdentityCreateWithoutIdentityInput = {
    viewerId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
    owner: UserCreateNestedOneWithoutSharedIdentitiesInput
  }

  export type SharedIdentityUncheckedCreateWithoutIdentityInput = {
    id?: number
    ownerId: number
    viewerId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type SharedIdentityCreateOrConnectWithoutIdentityInput = {
    where: SharedIdentityWhereUniqueInput
    create: XOR<SharedIdentityCreateWithoutIdentityInput, SharedIdentityUncheckedCreateWithoutIdentityInput>
  }

  export type SharedIdentityCreateManyIdentityInputEnvelope = {
    data: SharedIdentityCreateManyIdentityInput | SharedIdentityCreateManyIdentityInput[]
    skipDuplicates?: boolean
  }

  export type IdentityRequestCreateWithoutIdentityInput = {
    targetId: number
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
    requester: UserCreateNestedOneWithoutIdentityRequestsInput
  }

  export type IdentityRequestUncheckedCreateWithoutIdentityInput = {
    id?: number
    requesterId: number
    targetId: number
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type IdentityRequestCreateOrConnectWithoutIdentityInput = {
    where: IdentityRequestWhereUniqueInput
    create: XOR<IdentityRequestCreateWithoutIdentityInput, IdentityRequestUncheckedCreateWithoutIdentityInput>
  }

  export type IdentityRequestCreateManyIdentityInputEnvelope = {
    data: IdentityRequestCreateManyIdentityInput | IdentityRequestCreateManyIdentityInput[]
    skipDuplicates?: boolean
  }

  export type SharedLinkCreateWithoutIdentityInput = {
    id?: string
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSharedLinksInput
    accesses?: SharedLinkAccessCreateNestedManyWithoutSharedLinkInput
  }

  export type SharedLinkUncheckedCreateWithoutIdentityInput = {
    id?: string
    ownerId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accesses?: SharedLinkAccessUncheckedCreateNestedManyWithoutSharedLinkInput
  }

  export type SharedLinkCreateOrConnectWithoutIdentityInput = {
    where: SharedLinkWhereUniqueInput
    create: XOR<SharedLinkCreateWithoutIdentityInput, SharedLinkUncheckedCreateWithoutIdentityInput>
  }

  export type SharedLinkCreateManyIdentityInputEnvelope = {
    data: SharedLinkCreateManyIdentityInput | SharedLinkCreateManyIdentityInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutIdentitiesInput = {
    update: XOR<UserUpdateWithoutIdentitiesInput, UserUncheckedUpdateWithoutIdentitiesInput>
    create: XOR<UserCreateWithoutIdentitiesInput, UserUncheckedCreateWithoutIdentitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdentitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdentitiesInput, UserUncheckedUpdateWithoutIdentitiesInput>
  }

  export type UserUpdateWithoutIdentitiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutIdentitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUncheckedUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUncheckedUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type IdentityAttributeUpsertWithWhereUniqueWithoutIdentityInput = {
    where: IdentityAttributeWhereUniqueInput
    update: XOR<IdentityAttributeUpdateWithoutIdentityInput, IdentityAttributeUncheckedUpdateWithoutIdentityInput>
    create: XOR<IdentityAttributeCreateWithoutIdentityInput, IdentityAttributeUncheckedCreateWithoutIdentityInput>
  }

  export type IdentityAttributeUpdateWithWhereUniqueWithoutIdentityInput = {
    where: IdentityAttributeWhereUniqueInput
    data: XOR<IdentityAttributeUpdateWithoutIdentityInput, IdentityAttributeUncheckedUpdateWithoutIdentityInput>
  }

  export type IdentityAttributeUpdateManyWithWhereWithoutIdentityInput = {
    where: IdentityAttributeScalarWhereInput
    data: XOR<IdentityAttributeUpdateManyMutationInput, IdentityAttributeUncheckedUpdateManyWithoutIdentityInput>
  }

  export type IdentityAttributeScalarWhereInput = {
    AND?: IdentityAttributeScalarWhereInput | IdentityAttributeScalarWhereInput[]
    OR?: IdentityAttributeScalarWhereInput[]
    NOT?: IdentityAttributeScalarWhereInput | IdentityAttributeScalarWhereInput[]
    id?: IntFilter<"IdentityAttribute"> | number
    identityId?: IntFilter<"IdentityAttribute"> | number
    key?: StringFilter<"IdentityAttribute"> | string
    value?: StringFilter<"IdentityAttribute"> | string
    isPublic?: BoolFilter<"IdentityAttribute"> | boolean
    isVisible?: BoolFilter<"IdentityAttribute"> | boolean
    createdAt?: DateTimeFilter<"IdentityAttribute"> | Date | string
    updatedAt?: DateTimeFilter<"IdentityAttribute"> | Date | string
  }

  export type SharedIdentityUpsertWithWhereUniqueWithoutIdentityInput = {
    where: SharedIdentityWhereUniqueInput
    update: XOR<SharedIdentityUpdateWithoutIdentityInput, SharedIdentityUncheckedUpdateWithoutIdentityInput>
    create: XOR<SharedIdentityCreateWithoutIdentityInput, SharedIdentityUncheckedCreateWithoutIdentityInput>
  }

  export type SharedIdentityUpdateWithWhereUniqueWithoutIdentityInput = {
    where: SharedIdentityWhereUniqueInput
    data: XOR<SharedIdentityUpdateWithoutIdentityInput, SharedIdentityUncheckedUpdateWithoutIdentityInput>
  }

  export type SharedIdentityUpdateManyWithWhereWithoutIdentityInput = {
    where: SharedIdentityScalarWhereInput
    data: XOR<SharedIdentityUpdateManyMutationInput, SharedIdentityUncheckedUpdateManyWithoutIdentityInput>
  }

  export type IdentityRequestUpsertWithWhereUniqueWithoutIdentityInput = {
    where: IdentityRequestWhereUniqueInput
    update: XOR<IdentityRequestUpdateWithoutIdentityInput, IdentityRequestUncheckedUpdateWithoutIdentityInput>
    create: XOR<IdentityRequestCreateWithoutIdentityInput, IdentityRequestUncheckedCreateWithoutIdentityInput>
  }

  export type IdentityRequestUpdateWithWhereUniqueWithoutIdentityInput = {
    where: IdentityRequestWhereUniqueInput
    data: XOR<IdentityRequestUpdateWithoutIdentityInput, IdentityRequestUncheckedUpdateWithoutIdentityInput>
  }

  export type IdentityRequestUpdateManyWithWhereWithoutIdentityInput = {
    where: IdentityRequestScalarWhereInput
    data: XOR<IdentityRequestUpdateManyMutationInput, IdentityRequestUncheckedUpdateManyWithoutIdentityInput>
  }

  export type SharedLinkUpsertWithWhereUniqueWithoutIdentityInput = {
    where: SharedLinkWhereUniqueInput
    update: XOR<SharedLinkUpdateWithoutIdentityInput, SharedLinkUncheckedUpdateWithoutIdentityInput>
    create: XOR<SharedLinkCreateWithoutIdentityInput, SharedLinkUncheckedCreateWithoutIdentityInput>
  }

  export type SharedLinkUpdateWithWhereUniqueWithoutIdentityInput = {
    where: SharedLinkWhereUniqueInput
    data: XOR<SharedLinkUpdateWithoutIdentityInput, SharedLinkUncheckedUpdateWithoutIdentityInput>
  }

  export type SharedLinkUpdateManyWithWhereWithoutIdentityInput = {
    where: SharedLinkScalarWhereInput
    data: XOR<SharedLinkUpdateManyMutationInput, SharedLinkUncheckedUpdateManyWithoutIdentityInput>
  }

  export type IdentityCreateWithoutAttributesInput = {
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIdentitiesInput
    sharedWith?: SharedIdentityCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUncheckedCreateWithoutAttributesInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sharedWith?: SharedIdentityUncheckedCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestUncheckedCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutIdentityInput
  }

  export type IdentityCreateOrConnectWithoutAttributesInput = {
    where: IdentityWhereUniqueInput
    create: XOR<IdentityCreateWithoutAttributesInput, IdentityUncheckedCreateWithoutAttributesInput>
  }

  export type IdentityUpsertWithoutAttributesInput = {
    update: XOR<IdentityUpdateWithoutAttributesInput, IdentityUncheckedUpdateWithoutAttributesInput>
    create: XOR<IdentityCreateWithoutAttributesInput, IdentityUncheckedCreateWithoutAttributesInput>
    where?: IdentityWhereInput
  }

  export type IdentityUpdateToOneWithWhereWithoutAttributesInput = {
    where?: IdentityWhereInput
    data: XOR<IdentityUpdateWithoutAttributesInput, IdentityUncheckedUpdateWithoutAttributesInput>
  }

  export type IdentityUpdateWithoutAttributesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdentitiesNestedInput
    sharedWith?: SharedIdentityUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateWithoutAttributesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sharedWith?: SharedIdentityUncheckedUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUncheckedUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutIdentityNestedInput
  }

  export type UserCreateWithoutSharedIdentitiesInput = {
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    identities?: IdentityCreateNestedManyWithoutUserInput
    identityRequests?: IdentityRequestCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSharedIdentitiesInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    identities?: IdentityUncheckedCreateNestedManyWithoutUserInput
    identityRequests?: IdentityRequestUncheckedCreateNestedManyWithoutRequesterInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSharedIdentitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedIdentitiesInput, UserUncheckedCreateWithoutSharedIdentitiesInput>
  }

  export type IdentityCreateWithoutSharedWithInput = {
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIdentitiesInput
    attributes?: IdentityAttributeCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUncheckedCreateWithoutSharedWithInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: IdentityAttributeUncheckedCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestUncheckedCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutIdentityInput
  }

  export type IdentityCreateOrConnectWithoutSharedWithInput = {
    where: IdentityWhereUniqueInput
    create: XOR<IdentityCreateWithoutSharedWithInput, IdentityUncheckedCreateWithoutSharedWithInput>
  }

  export type UserUpsertWithoutSharedIdentitiesInput = {
    update: XOR<UserUpdateWithoutSharedIdentitiesInput, UserUncheckedUpdateWithoutSharedIdentitiesInput>
    create: XOR<UserCreateWithoutSharedIdentitiesInput, UserUncheckedCreateWithoutSharedIdentitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedIdentitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedIdentitiesInput, UserUncheckedUpdateWithoutSharedIdentitiesInput>
  }

  export type UserUpdateWithoutSharedIdentitiesInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    identities?: IdentityUpdateManyWithoutUserNestedInput
    identityRequests?: IdentityRequestUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedIdentitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput
    identityRequests?: IdentityRequestUncheckedUpdateManyWithoutRequesterNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type IdentityUpsertWithoutSharedWithInput = {
    update: XOR<IdentityUpdateWithoutSharedWithInput, IdentityUncheckedUpdateWithoutSharedWithInput>
    create: XOR<IdentityCreateWithoutSharedWithInput, IdentityUncheckedCreateWithoutSharedWithInput>
    where?: IdentityWhereInput
  }

  export type IdentityUpdateToOneWithWhereWithoutSharedWithInput = {
    where?: IdentityWhereInput
    data: XOR<IdentityUpdateWithoutSharedWithInput, IdentityUncheckedUpdateWithoutSharedWithInput>
  }

  export type IdentityUpdateWithoutSharedWithInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdentitiesNestedInput
    attributes?: IdentityAttributeUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateWithoutSharedWithInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: IdentityAttributeUncheckedUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUncheckedUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutIdentityNestedInput
  }

  export type UserCreateWithoutSharedLinksInput = {
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    identities?: IdentityCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestCreateNestedManyWithoutRequesterInput
  }

  export type UserUncheckedCreateWithoutSharedLinksInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    identities?: IdentityUncheckedCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityUncheckedCreateNestedManyWithoutOwnerInput
    identityRequests?: IdentityRequestUncheckedCreateNestedManyWithoutRequesterInput
  }

  export type UserCreateOrConnectWithoutSharedLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSharedLinksInput, UserUncheckedCreateWithoutSharedLinksInput>
  }

  export type IdentityCreateWithoutSharedLinksInput = {
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIdentitiesInput
    attributes?: IdentityAttributeCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUncheckedCreateWithoutSharedLinksInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: IdentityAttributeUncheckedCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityUncheckedCreateNestedManyWithoutIdentityInput
    requests?: IdentityRequestUncheckedCreateNestedManyWithoutIdentityInput
  }

  export type IdentityCreateOrConnectWithoutSharedLinksInput = {
    where: IdentityWhereUniqueInput
    create: XOR<IdentityCreateWithoutSharedLinksInput, IdentityUncheckedCreateWithoutSharedLinksInput>
  }

  export type SharedLinkAccessCreateWithoutSharedLinkInput = {
    viewerIp?: string | null
    viewerAgent?: string | null
    accessedAt?: Date | string
  }

  export type SharedLinkAccessUncheckedCreateWithoutSharedLinkInput = {
    id?: number
    viewerIp?: string | null
    viewerAgent?: string | null
    accessedAt?: Date | string
  }

  export type SharedLinkAccessCreateOrConnectWithoutSharedLinkInput = {
    where: SharedLinkAccessWhereUniqueInput
    create: XOR<SharedLinkAccessCreateWithoutSharedLinkInput, SharedLinkAccessUncheckedCreateWithoutSharedLinkInput>
  }

  export type SharedLinkAccessCreateManySharedLinkInputEnvelope = {
    data: SharedLinkAccessCreateManySharedLinkInput | SharedLinkAccessCreateManySharedLinkInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSharedLinksInput = {
    update: XOR<UserUpdateWithoutSharedLinksInput, UserUncheckedUpdateWithoutSharedLinksInput>
    create: XOR<UserCreateWithoutSharedLinksInput, UserUncheckedCreateWithoutSharedLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSharedLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSharedLinksInput, UserUncheckedUpdateWithoutSharedLinksInput>
  }

  export type UserUpdateWithoutSharedLinksInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    identities?: IdentityUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUpdateManyWithoutRequesterNestedInput
  }

  export type UserUncheckedUpdateWithoutSharedLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUncheckedUpdateManyWithoutOwnerNestedInput
    identityRequests?: IdentityRequestUncheckedUpdateManyWithoutRequesterNestedInput
  }

  export type IdentityUpsertWithoutSharedLinksInput = {
    update: XOR<IdentityUpdateWithoutSharedLinksInput, IdentityUncheckedUpdateWithoutSharedLinksInput>
    create: XOR<IdentityCreateWithoutSharedLinksInput, IdentityUncheckedCreateWithoutSharedLinksInput>
    where?: IdentityWhereInput
  }

  export type IdentityUpdateToOneWithWhereWithoutSharedLinksInput = {
    where?: IdentityWhereInput
    data: XOR<IdentityUpdateWithoutSharedLinksInput, IdentityUncheckedUpdateWithoutSharedLinksInput>
  }

  export type IdentityUpdateWithoutSharedLinksInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdentitiesNestedInput
    attributes?: IdentityAttributeUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateWithoutSharedLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: IdentityAttributeUncheckedUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUncheckedUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUncheckedUpdateManyWithoutIdentityNestedInput
  }

  export type SharedLinkAccessUpsertWithWhereUniqueWithoutSharedLinkInput = {
    where: SharedLinkAccessWhereUniqueInput
    update: XOR<SharedLinkAccessUpdateWithoutSharedLinkInput, SharedLinkAccessUncheckedUpdateWithoutSharedLinkInput>
    create: XOR<SharedLinkAccessCreateWithoutSharedLinkInput, SharedLinkAccessUncheckedCreateWithoutSharedLinkInput>
  }

  export type SharedLinkAccessUpdateWithWhereUniqueWithoutSharedLinkInput = {
    where: SharedLinkAccessWhereUniqueInput
    data: XOR<SharedLinkAccessUpdateWithoutSharedLinkInput, SharedLinkAccessUncheckedUpdateWithoutSharedLinkInput>
  }

  export type SharedLinkAccessUpdateManyWithWhereWithoutSharedLinkInput = {
    where: SharedLinkAccessScalarWhereInput
    data: XOR<SharedLinkAccessUpdateManyMutationInput, SharedLinkAccessUncheckedUpdateManyWithoutSharedLinkInput>
  }

  export type SharedLinkAccessScalarWhereInput = {
    AND?: SharedLinkAccessScalarWhereInput | SharedLinkAccessScalarWhereInput[]
    OR?: SharedLinkAccessScalarWhereInput[]
    NOT?: SharedLinkAccessScalarWhereInput | SharedLinkAccessScalarWhereInput[]
    id?: IntFilter<"SharedLinkAccess"> | number
    sharedLinkId?: StringFilter<"SharedLinkAccess"> | string
    viewerIp?: StringNullableFilter<"SharedLinkAccess"> | string | null
    viewerAgent?: StringNullableFilter<"SharedLinkAccess"> | string | null
    accessedAt?: DateTimeFilter<"SharedLinkAccess"> | Date | string
  }

  export type SharedLinkCreateWithoutAccessesInput = {
    id?: string
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutSharedLinksInput
    identity: IdentityCreateNestedOneWithoutSharedLinksInput
  }

  export type SharedLinkUncheckedCreateWithoutAccessesInput = {
    id?: string
    ownerId: number
    identityId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedLinkCreateOrConnectWithoutAccessesInput = {
    where: SharedLinkWhereUniqueInput
    create: XOR<SharedLinkCreateWithoutAccessesInput, SharedLinkUncheckedCreateWithoutAccessesInput>
  }

  export type SharedLinkUpsertWithoutAccessesInput = {
    update: XOR<SharedLinkUpdateWithoutAccessesInput, SharedLinkUncheckedUpdateWithoutAccessesInput>
    create: XOR<SharedLinkCreateWithoutAccessesInput, SharedLinkUncheckedCreateWithoutAccessesInput>
    where?: SharedLinkWhereInput
  }

  export type SharedLinkUpdateToOneWithWhereWithoutAccessesInput = {
    where?: SharedLinkWhereInput
    data: XOR<SharedLinkUpdateWithoutAccessesInput, SharedLinkUncheckedUpdateWithoutAccessesInput>
  }

  export type SharedLinkUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSharedLinksNestedInput
    identity?: IdentityUpdateOneRequiredWithoutSharedLinksNestedInput
  }

  export type SharedLinkUncheckedUpdateWithoutAccessesInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutIdentityRequestsInput = {
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    identities?: IdentityCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityCreateNestedManyWithoutOwnerInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutIdentityRequestsInput = {
    id?: number
    email: string
    passwordHash: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    identities?: IdentityUncheckedCreateNestedManyWithoutUserInput
    sharedIdentities?: SharedIdentityUncheckedCreateNestedManyWithoutOwnerInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutIdentityRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIdentityRequestsInput, UserUncheckedCreateWithoutIdentityRequestsInput>
  }

  export type IdentityCreateWithoutRequestsInput = {
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutIdentitiesInput
    attributes?: IdentityAttributeCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkCreateNestedManyWithoutIdentityInput
  }

  export type IdentityUncheckedCreateWithoutRequestsInput = {
    id?: number
    userId: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    attributes?: IdentityAttributeUncheckedCreateNestedManyWithoutIdentityInput
    sharedWith?: SharedIdentityUncheckedCreateNestedManyWithoutIdentityInput
    sharedLinks?: SharedLinkUncheckedCreateNestedManyWithoutIdentityInput
  }

  export type IdentityCreateOrConnectWithoutRequestsInput = {
    where: IdentityWhereUniqueInput
    create: XOR<IdentityCreateWithoutRequestsInput, IdentityUncheckedCreateWithoutRequestsInput>
  }

  export type UserUpsertWithoutIdentityRequestsInput = {
    update: XOR<UserUpdateWithoutIdentityRequestsInput, UserUncheckedUpdateWithoutIdentityRequestsInput>
    create: XOR<UserCreateWithoutIdentityRequestsInput, UserUncheckedCreateWithoutIdentityRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIdentityRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIdentityRequestsInput, UserUncheckedUpdateWithoutIdentityRequestsInput>
  }

  export type UserUpdateWithoutIdentityRequestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    identities?: IdentityUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUpdateManyWithoutOwnerNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutIdentityRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    identities?: IdentityUncheckedUpdateManyWithoutUserNestedInput
    sharedIdentities?: SharedIdentityUncheckedUpdateManyWithoutOwnerNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type IdentityUpsertWithoutRequestsInput = {
    update: XOR<IdentityUpdateWithoutRequestsInput, IdentityUncheckedUpdateWithoutRequestsInput>
    create: XOR<IdentityCreateWithoutRequestsInput, IdentityUncheckedCreateWithoutRequestsInput>
    where?: IdentityWhereInput
  }

  export type IdentityUpdateToOneWithWhereWithoutRequestsInput = {
    where?: IdentityWhereInput
    data: XOR<IdentityUpdateWithoutRequestsInput, IdentityUncheckedUpdateWithoutRequestsInput>
  }

  export type IdentityUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIdentitiesNestedInput
    attributes?: IdentityAttributeUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateWithoutRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: IdentityAttributeUncheckedUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUncheckedUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutIdentityNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type IdentityCreateManyUserInput = {
    id?: number
    name: string
    description?: string | null
    isDefault?: boolean
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedIdentityCreateManyOwnerInput = {
    id?: number
    viewerId: number
    identityId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type IdentityRequestCreateManyRequesterInput = {
    id?: number
    targetId: number
    identityId?: number | null
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type SharedLinkCreateManyOwnerInput = {
    id?: string
    identityId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: IdentityAttributeUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attributes?: IdentityAttributeUncheckedUpdateManyWithoutIdentityNestedInput
    sharedWith?: SharedIdentityUncheckedUpdateManyWithoutIdentityNestedInput
    requests?: IdentityRequestUncheckedUpdateManyWithoutIdentityNestedInput
    sharedLinks?: SharedLinkUncheckedUpdateManyWithoutIdentityNestedInput
  }

  export type IdentityUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedIdentityUpdateWithoutOwnerInput = {
    viewerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identity?: IdentityUpdateOneRequiredWithoutSharedWithNestedInput
  }

  export type SharedIdentityUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedIdentityUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewerId?: IntFieldUpdateOperationsInput | number
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityRequestUpdateWithoutRequesterInput = {
    targetId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identity?: IdentityUpdateOneWithoutRequestsNestedInput
  }

  export type IdentityRequestUncheckedUpdateWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    identityId?: NullableIntFieldUpdateOperationsInput | number | null
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    identityId?: NullableIntFieldUpdateOperationsInput | number | null
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedLinkUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    identity?: IdentityUpdateOneRequiredWithoutSharedLinksNestedInput
    accesses?: SharedLinkAccessUpdateManyWithoutSharedLinkNestedInput
  }

  export type SharedLinkUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: SharedLinkAccessUncheckedUpdateManyWithoutSharedLinkNestedInput
  }

  export type SharedLinkUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    identityId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityAttributeCreateManyIdentityInput = {
    id?: number
    key: string
    value: string
    isPublic?: boolean
    isVisible?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharedIdentityCreateManyIdentityInput = {
    id?: number
    ownerId: number
    viewerId: number
    context: string
    canView?: boolean
    canRequest?: boolean
    sharedAt?: Date | string
    expiresAt?: Date | string | null
  }

  export type IdentityRequestCreateManyIdentityInput = {
    id?: number
    requesterId: number
    targetId: number
    context: string
    message?: string | null
    status?: $Enums.RequestStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    respondedAt?: Date | string | null
  }

  export type SharedLinkCreateManyIdentityInput = {
    id?: string
    ownerId: number
    context: string
    name?: string | null
    isActive?: boolean
    expiresAt?: Date | string | null
    accessLimit?: number | null
    accessCount?: number
    requireAuth?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IdentityAttributeUpdateWithoutIdentityInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityAttributeUncheckedUpdateWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IdentityAttributeUncheckedUpdateManyWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedIdentityUpdateWithoutIdentityInput = {
    viewerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    owner?: UserUpdateOneRequiredWithoutSharedIdentitiesNestedInput
  }

  export type SharedIdentityUncheckedUpdateWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    viewerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedIdentityUncheckedUpdateManyWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    viewerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    canView?: BoolFieldUpdateOperationsInput | boolean
    canRequest?: BoolFieldUpdateOperationsInput | boolean
    sharedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityRequestUpdateWithoutIdentityInput = {
    targetId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    requester?: UserUpdateOneRequiredWithoutIdentityRequestsNestedInput
  }

  export type IdentityRequestUncheckedUpdateWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IdentityRequestUncheckedUpdateManyWithoutIdentityInput = {
    id?: IntFieldUpdateOperationsInput | number
    requesterId?: IntFieldUpdateOperationsInput | number
    targetId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    respondedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SharedLinkUpdateWithoutIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutSharedLinksNestedInput
    accesses?: SharedLinkAccessUpdateManyWithoutSharedLinkNestedInput
  }

  export type SharedLinkUncheckedUpdateWithoutIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accesses?: SharedLinkAccessUncheckedUpdateManyWithoutSharedLinkNestedInput
  }

  export type SharedLinkUncheckedUpdateManyWithoutIdentityInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: IntFieldUpdateOperationsInput | number
    context?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    accessLimit?: NullableIntFieldUpdateOperationsInput | number | null
    accessCount?: IntFieldUpdateOperationsInput | number
    requireAuth?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkAccessCreateManySharedLinkInput = {
    id?: number
    viewerIp?: string | null
    viewerAgent?: string | null
    accessedAt?: Date | string
  }

  export type SharedLinkAccessUpdateWithoutSharedLinkInput = {
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkAccessUncheckedUpdateWithoutSharedLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharedLinkAccessUncheckedUpdateManyWithoutSharedLinkInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    viewerAgent?: NullableStringFieldUpdateOperationsInput | string | null
    accessedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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