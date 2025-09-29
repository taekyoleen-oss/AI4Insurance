---
title: "TypeScript 고급 타입 활용하기"
date: "2025-01-10"
category: "tech"
excerpt: "TypeScript의 고급 타입 기능들을 활용하여 더 안전하고 유지보수하기 쉬운 코드를 작성하는 방법을 알아보겠습니다."
tags: ["TypeScript", "Programming", "Type Safety"]
---

TypeScript는 JavaScript에 정적 타입을 추가한 언어로, 대규모 애플리케이션 개발에 필수적인 도구입니다. 이번 포스트에서는 TypeScript의 고급 타입 기능들을 살펴보겠습니다.

## 유니온 타입과 인터섹션 타입

### 유니온 타입 (Union Types)
```typescript
type StringOrNumber = string | number;

function processValue(value: StringOrNumber) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value.toString();
}
```

### 인터섹션 타입 (Intersection Types)
```typescript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  department: string;
}

type EmployeePerson = Person & Employee;

const john: EmployeePerson = {
  name: 'John Doe',
  age: 30,
  employeeId: 'EMP001',
  department: 'Engineering'
};
```

## 제네릭 타입

제네릭을 사용하면 재사용 가능한 타입을 만들 수 있습니다.

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: 'John', email: 'john@example.com' },
  status: 200,
  message: 'Success'
};
```

## 조건부 타입 (Conditional Types)

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type Example1 = NonNullable<string | null>; // string
type Example2 = NonNullable<number | undefined>; // number
```

## 유틸리티 타입

TypeScript는 다양한 유틸리티 타입을 제공합니다.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Pick: 특정 속성만 선택
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;

// Omit: 특정 속성 제외
type CreateUser = Omit<User, 'id'>;

// Partial: 모든 속성을 선택적으로
type UpdateUser = Partial<User>;
```

## 맵드 타입 (Mapped Types)

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
```

## 템플릿 리터럴 타입

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;

type MouseEventName = EventName<'click'>; // 'onClick'
type KeyboardEventName = EventName<'keydown'>; // 'onKeydown'
```

## 결론

TypeScript의 고급 타입 기능들을 활용하면 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다. 이러한 기능들을 적절히 활용하여 프로젝트의 타입 안정성을 높여보세요.
