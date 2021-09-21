import React, { useState } from "react"

import UrlApi from "../../api/url"
import styles from "./Form.module.css"

export default function Form() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [isNew, setIsNew] = useState(true)

  function handleChange(event) {
    if (error) setError("")
    if (success) setSuccess("")
    if (!isNew) setIsNew(true)
    setUrl(event.target.value)
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (error) setError("")
    if (success) setSuccess("")
    if (!isNew) setIsNew(true)
    setLoading(true)
    try {
      const res = await UrlApi.shorten(url)
      setSuccess(res.data.shortUrl)
      setIsNew(res.data.new)
      setLoading(false)
    } catch (error) {
      if (error.response.data.error) {
        switch (error.response.data.error) {
          case "invalid_long_uri":
            setError("The url you wrote is invalid ! Please try again.")
            break
          default:
            setError("An unknown error occured !")
        }
      } else {
        setError("An unknow error occured !")
      }
      setLoading(false)
    }
  }

  return (
    <form className={styles.form} method="POST" onSubmit={handleSubmit}>
      <h3 className={styles.title}> Welcome to the Url Shortener ! </h3>
      <div className={styles.group}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter the url to be shortened..."
          value={url}
          onChange={handleChange}
          required
        />
      </div>
      <div className={styles.group}>
        <button className={styles.btn} type="submit">
          Shorten
        </button>
      </div>
      {loading && (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {error && (
        <div className={styles.group}>
          <p className={styles.error}> {error} </p>
        </div>
      )}
      {!isNew && (
        <div className={styles.group}>
          <p className={styles.new}>
            Good news this url was already shortened previously !
          </p>
        </div>
      )}
      {success && (
        <div className="text-center">
          <a href={success} target="_blank" rel="noreferrer">
            {success}
          </a>
        </div>
      )}
    </form>
  )
}
