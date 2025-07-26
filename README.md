# 🧩 TaskFlow

**TaskFlow** is a simple task management app built with React. It allows users to organize tasks into columns like "To do", "In progress", and "Done". Tasks can be added, deleted, and moved between columns.

---

## 🚀 Features


### 🧠 Persistent Storage with `useEffect`

- Tasks are saved in `localStorage`.
- On page load, tasks are retrieved from `localStorage` using `useEffect`.

---

### 🔄  Controlled Form

- Tasks are added via a controlled form:
  - Managed with `useState`
  - Real-time input handling with `onChange`

---

### 🧱 Lifting State Up

- The main state (columns and tasks) is lifted to the `Board` component.
- State is passed to child components (`Column`, `Task`) via props.

---

### 📦 Custom Hook: `useTasks`

- Encapsulates task logic:
  - Add task
  - Delete task
  - Move task
- Promotes reusability and clean separation of concerns.

---

### ✅ Performance Optimizations

- `useCallback`: Optimizes prop functions to prevent unnecessary re-renders.

---

### 🧪 Testing with Jest 

- Unit tests for:
  - Task creation
  - Task deletion
  - Conditional rendering

---

## 🛠️ Tech Stack

- React
- TypeScript
- Jest & React Testing Library

---

## 🧪 Running the Project

```bash
npm install
npm start


🧑‍💻 Author
Made by Lisa Eriksen.