# Certificate document drop-folder

Place **verified** certificate scans / PDFs here when the company supplies them, e.g.:

- `mea-ra-licence.pdf`
- `certificate-of-incorporation.pdf`
- `gst-certificate.pdf`
- `emigration-establishment-registration.pdf`

Then, in `src/data/licenses.ts`, for the matching entry set:

```ts
document: "/documents/mea-ra-licence.pdf",
verified: true,
number: "<real number from the document>",
```

The UI unlocks “View certificate / Download PDF” automatically only when `verified: true` and `document` is set.
Never set `verified: true` without the original on file.
