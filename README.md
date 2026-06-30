# snippets-sg

Personal and team VS Code snippets for React, Next.js, TypeScript, and `utility-fns`.

## Install Locally

Build or install the `.vsix` package from this repository, then use the prefixes below inside JavaScript, TypeScript, or TSX files.

Run `npm run validate` before packaging to check snippet JSON and contributed paths.

## Utility-fns Snippets

These snippets help use `utility-fns@2.x` with the same patterns used in company projects.

| Prefix | Detail |
| --- | --- |
| `ufi`, `uf-import` | Import common utility-fns helpers |
| `ufn`, `uf-null` | Import null/default helpers |
| `ufns`, `uf-ns`, `NullString` | `NullString(value)` |
| `ufni`, `uf-ni`, `NullInt` | `NullInt(value)` |
| `ufna`, `uf-na`, `NullArray` | `NullArray(value)` |
| `ufnsel`, `uf-nsel`, `NullSelect` | `NullSelect(value)` |
| `ufnp`, `uf-np`, `NullPicture` | `NullPicture(value)` |
| `ufntp`, `uf-ntp`, `NullToPoint` | `NullToPoint(value)` |
| `ufztn`, `uf-ztn`, `ZeroToNull` | `ZeroToNull(value)` |
| `uftss`, `uf-tss`, `toStringSafe` | `toStringSafe(value, defaultValue)` |
| `ufib`, `uf-ib`, `isBlank` | `isBlank(value)` |
| `ufv`, `uf-validate` | Import validation helpers |
| `ufp`, `uf-payload` | Import payload helpers |
| `ufo`, `uf-object` | Import object helpers |
| `ufs`, `uf-string` | Import string helpers |
| `uf-reqkeys`, `reqKeys` | Full `onValidate` using `reqKeys` |
| `uf-reqcheck`, `reqCheck` | Full `onValidate` using `reqCheck` result |
| `uf-reqvalues`, `reqValues` | Validate direct values |
| `uf-reqvaluecheck`, `reqValueCheck` | Validate direct values and return detail |
| `uf-first`, `getFirstValue` | Get first non-empty payload value |
| `uf-buildname`, `buildName` | Compose display text from keys |
| `uf-fullname`, `buildFullName` | Compose full name |
| `uf-clean`, `cleanPayload` | Clean payload before submit |
| `uf-uuid`, `generateUUID` | Generate UUID |
| `uf-uuid-client`, `generateUUIDClient` | Generate UUID on browser/client side |
| `uf-uuid-node`, `generateUUIDNode` | Generate UUID on Node.js side |
| `uf-date`, `formatDateTime` | Date alias helper |
| `uf-safe`, `safeExecute` | Safe execution helper |
| `uf-null-ex`, `NullString` | Common null helper usage |

### Validation Example

`uf-reqkeys`

```ts
const onValidate = (_data: FormDataProps) => {
  const valid = reqKeys(_data, ['roleId', 'status'], ['seq'], true);
  setSubmitted(!valid);
  return valid;
};
```

`uf-reqcheck`

```ts
const onValidate = (_data: FormDataProps) => {
  const result = reqCheck(_data, ['roleId', 'status'], ['seq'], true);
  setSubmitted(result.submitted);
  return result.valid;
};
```

## React / Next Snippets

Existing snippets are still available.

| Prefix | Detail |
| --- | --- |
| `imr`, `ir` | Import React |
| `imrh`, `irh` | Import React with `useEffect` and `useState` |
| `us`, `ust`, `useState` | `useState(...)` |
| `usts`, `useStateType` | Typed `useState<T>(...)` for TypeScript |
| `ue`, `useEffect` | `useEffect(..., [deps])` |
| `ued`, `useEffectEmpty` | `useEffect(..., [])` |
| `up`, `usePage` | `const page = usePage();` |
| `ut`, `useTranslation` | `const {t} = useTranslation();` |
| `ul`, `useLoading` | Loading and alert hook |
| `ull` | Loading only |
| `ula` | Alert only |
| `ud`, `useDialog` | Dialog show/warn |
| `udw` | Dialog warning |
| `uds` | Dialog show |
| `udf` | Dialog file |
| `uda` | Dialog all |
| `ucf`, `ucfb`, `useConfig` | Config hook |
| `ua`, `useAPI` | API hook |
| `uaf`, `useAPIFile` | API file hook |
| `ums`, `useMasterStore` | Master store hook |
| `itc` | `onInputTextChange` for local state |
| `itcp`, `onInputTextChange` | `onInputTextChange` for props state |
| `ick`, `onInputCheckedChange` | Checkbox checked change handler |

## Project Hook Snippets

These snippets are based on custom hooks from `nt-nsw-register/layout/hooks`.

| Prefix | Detail |
| --- | --- |
| `uhi`, `uh-import` | Import common project hooks |
| `uhp`, `uhpage` | `usePage()` |
| `uhc`, `uhconfig` | `useConfig()` |
| `uhai`, `uhapi` | `useAPI()` with data state |
| `uhau`, `uhapiu` | `useAPI()` update action |
| `uhah`, `uhapih` | `useAPI()` without dialog/loading |
| `uhaf`, `uhfile` | `useAPIFile()` |
| `uhmp`, `uhmulti` | `useMultipart()` |
| `uhl`, `uhload` | `useLoading()` |
| `uha`, `uhalert` | `setAlert(...)` |
| `uhd`, `uhdialog` | `useDialog()` |
| `uhds`, `uhdshow` | `setDialogShow(...)` |
| `uhdw`, `uhdwarn` | `setDialogWarn(...)` |
| `uhms`, `uhmaster` | `useMasterStore()` by ctType |
| `uhmso`, `uhmastero` | `useMasterStore()` with object filter |
| `uhmct`, `uhmasterctt` | `useMasterStoreCTT()` |
| `uhls`, `uh-local-storage` | `useLocalStorage()` |
| `uhsearch`, `uhlsearch` | `useLocalSearch()` |
| `uhr`, `uhrole` | `useDisableRole()` |
| `uhss`, `uhscreen` | `useScreenSize()` |
| `uht`, `uhticker` | `useTicker()` |
| `uhsw`, `uhswipe` | `useSwipeNotification()` |
| `uhlog`, `uhauth` | `useAuthLog()` |
| `uhpv`, `uhproviders` | Provider wrapper |

## TypeScript Input Snippet

The TypeScript input snippets now create a local event type alias so the function signature stays readable.

```ts
type InputTextChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

const onInputTextChange = (e: InputTextChangeEvent, key = '') => {
  const target = e.target;
  const id = key || target.id || '';
  const val = target.value ?? '';

  setData((preState: any) => ({
    ...preState,
    [id]: val,
  }));
};
```

## License

MIT
