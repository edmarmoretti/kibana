<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-kibana\_utils-public-state\_sync](./kibana-plugin-plugins-kibana_utils-public-state_sync.md) &gt; [IStateSyncConfig](./kibana-plugin-plugins-kibana_utils-public-state_sync.istatesyncconfig.md) &gt; [stateContainer](./kibana-plugin-plugins-kibana_utils-public-state_sync.istatesyncconfig.statecontainer.md)

## IStateSyncConfig.stateContainer property

State container to keep in sync with storage, have to implement [INullableBaseStateContainer](./kibana-plugin-plugins-kibana_utils-public-state_sync.inullablebasestatecontainer.md) interface We encourage to use  as a state container, but it is also possible to implement own custom container for advanced use cases

<b>Signature:</b>

```typescript
stateContainer: INullableBaseStateContainer<State>;
```
