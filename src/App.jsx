import { Component, Suspense, lazy, useEffect, useSyncExternalStore } from 'react'
import { topics } from './course.js'

// Every task file is loaded only when you open it, so one broken
// task cannot stop the rest of the course app from working.
const taskFiles = import.meta.glob('./topics/*/Task*.jsx')
const lazyTasks = {}
for (const [path, load] of Object.entries(taskFiles)) {
  lazyTasks[path] = lazy(load)
}

// The address after the # decides what we show, e.g. #/03-state/4
function subscribe(callback) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function getHash() {
  return window.location.hash
}

function topicNumber(topic) {
  return topic.slug.slice(0, 2)
}

export default function App() {
  const hash = useSyncExternalStore(subscribe, getHash)
  const [slug, taskText] = hash.replace(/^#\/?/, '').split('/')
  const topic = topics.find((t) => t.slug === slug)
  const taskNumber = Number(taskText)
  const showTask = topic && taskNumber >= 1 && taskNumber <= topic.tasks.length

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [hash])

  return (
    <div className="app">
      <header className="app-header">
        <a href="#/" className="brand">
          <span className="brand-mark">DELHI COLLEGE</span>
          <span className="brand-dot">·</span>
          <span className="brand-dept">ICT DEPARTMENT</span>
        </a>
        <h1>React Fundamentals</h1>
        <p>Eleven topics, eight tasks each. Pick a task to see it running.</p>
      </header>

      <main className="app-main">
        {showTask ? (
          <TaskView topic={topic} taskNumber={taskNumber} />
        ) : (
          <Menu />
        )}
      </main>

      <footer className="app-footer">
        Delhi College · ICT Department · Eastleigh, Nairobi
      </footer>
    </div>
  )
}

function Menu() {
  return (
    <div className="menu">
      {topics.map((topic) => (
        <section className="topic-card" key={topic.slug}>
          <div className="topic-head">
            <span className="topic-number">{topicNumber(topic)}</span>
            <div>
              <h2>{topic.title}</h2>
              <p className="topic-summary">{topic.summary}</p>
            </div>
            <span className={'level level-' + topic.level.toLowerCase()}>
              {topic.level}
            </span>
          </div>
          <ol className="task-links">
            {topic.tasks.map((title, index) => (
              <li key={title}>
                <a href={`#/${topic.slug}/${index + 1}`}>
                  <span className="task-number">Task {index + 1}</span>
                  {title}
                </a>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}

function TaskView({ topic, taskNumber }) {
  const path = `./topics/${topic.slug}/Task${taskNumber}.jsx`
  const TaskComponent = lazyTasks[path]
  const title = topic.tasks[taskNumber - 1]
  const hasPrevious = taskNumber > 1
  const hasNext = taskNumber < topic.tasks.length

  return (
    <div className="task-view">
      <nav className="crumbs">
        <a href="#/">← All topics</a>
        <span>
          Topic {topicNumber(topic)} · {topic.title}
        </span>
      </nav>

      <div className="task-title">
        <span className="task-badge">{String(taskNumber).padStart(2, '0')}</span>
        <div>
          <h2>{title}</h2>
          <code>src/topics/{topic.slug}/Task{taskNumber}.jsx</code>
        </div>
      </div>

      <div className="stage" key={path}>
        {TaskComponent ? (
          <ErrorBox>
            <Suspense fallback={<p className="muted">Loading task…</p>}>
              <TaskComponent />
            </Suspense>
          </ErrorBox>
        ) : (
          <p className="muted">
            This task has not been written yet. Create the file above and
            save it — the page will update by itself.
          </p>
        )}
      </div>

      <nav className="pager">
        {hasPrevious ? (
          <a href={`#/${topic.slug}/${taskNumber - 1}`}>← Task {taskNumber - 1}</a>
        ) : (
          <span />
        )}
        {hasNext && (
          <a href={`#/${topic.slug}/${taskNumber + 1}`}>Task {taskNumber + 1} →</a>
        )}
      </nav>
    </div>
  )
}

// Catches a crash inside one task and shows the message instead of a
// blank page. (Error boundaries are the one place React still needs a class.)
class ErrorBox extends Component {
  state = { error: null }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="crash">
          <strong>This task crashed.</strong>
          <pre>{String(this.state.error.message || this.state.error)}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
